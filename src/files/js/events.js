/*
 (c) 2015, Beto Muniz - betomuniz.com
 Get Web Components Events from Meetup.com
*/

(function () { 'use strict';

    function Events() {
        this.init();
    }

    Events.prototype = {

        groups_source: "/data/groups.json",

        init: function () {
            this.loadEvents();
        },

        loadEvents: function(events) {
            var that = this;
            that._getData(that.groups_source, function(){
                var data = JSON.parse(this.responseText),
                    groups = that.prepareGroups(data.groups, "id");
                that._getData("https://api.meetup.com/2/events?&sign=true&photo-host=public&group_id="+groups+"&page=6&key=46455a723321385a1a58f4d77314c16", function() {
                    var events = JSON.parse(this.responseText).results;
                    that.setEvents(events, data);
                });
            });
        },

        setEvents: function(events, groups) {

            var that = this,
                eventsSection = document.querySelector("#events");

                if(events.length > 0) {
                    var eventCardTpl = document.querySelector("#card-event-template").innerHTML, virtualCardTpl = eventCardTpl,
                        eventsOrdered = that.orderEvents(events),
                        name,
                        description,
                        yes_rsvp_count,
                        event_url;

                    eventsSection.innerHTML = '';
                    
                    for (var i = 0; i < eventsOrdered.length; i++){
                        virtualCardTpl = eventCardTpl;

                        // Add image to template
                        virtualCardTpl = virtualCardTpl.replace(/{{image}}/g, that.getGroup(eventsOrdered[i].group.id, groups).thumbnail);

                        // Add name to template
                        name = (eventsOrdered[i].name) ? that._textStrip(eventsOrdered[i].name) : "";
                        virtualCardTpl = virtualCardTpl.replace(/{{name}}/g, that._textTruncate(name));

                        // Add description to template
                        description = (eventsOrdered[i].description) ? that._textStrip(eventsOrdered[i].description) : "This meetup has no description.";
                        virtualCardTpl = virtualCardTpl.replace(/{{description}}/g, that._textTruncate(description, 170));

                        // Convert timestamp to date and add to template
                        virtualCardTpl = virtualCardTpl.replace(/{{date}}/g, that._timestampToDate(eventsOrdered[i].time));

                        if(eventsOrdered[i].venue){
                            // Add city to template
                            var city = (eventsOrdered[i].venue.city) ? eventsOrdered[i].venue.city+", " : "";
                            virtualCardTpl = virtualCardTpl.replace(/{{city}}/g, city);

                            // Add country to template
                            var country = (eventsOrdered[i].venue.country) ? eventsOrdered[i].venue.country : "";
                            virtualCardTpl = virtualCardTpl.replace(/{{country}}/g, country);
                        } else {
                            virtualCardTpl = virtualCardTpl.replace(/{{city}}|{{country}}/g, "");
                        }

                        // Add RVSPs to template
                        yes_rsvp_count = (eventsOrdered[i].yes_rsvp_count && eventsOrdered[i].yes_rsvp_count > 0) ? eventsOrdered[i].yes_rsvp_count : "No RVSPs";
                        virtualCardTpl = virtualCardTpl.replace(/{{yes_rsvp_count}}/g, yes_rsvp_count);

                        // Add url to template
                        event_url = (eventsOrdered[i].event_url) ? eventsOrdered[i].event_url : "";
                        virtualCardTpl = virtualCardTpl.replace(/{{url}}/g, event_url);
                        
                        eventsSection.innerHTML += virtualCardTpl;
                    }
                } else {
                    eventsSection.innerHTML = '<p class="no-events">No events found.</p>';
                }

        },

        getGroup: function (group_id, data) {
            var group;
            for (var i = 0; i < data.groups.length; i++) {
                if(data.groups[i].id == group_id) group = data.groups[i];
            };
            return group;
        },

        prepareGroups: function (obj, key) {
            return obj.map(function(i){ return i[key] }).toString();
        },

        orderEvents: function(events) {
            return events.sort(function(x, y){
                return x.time - y.time;
            });
        },

        _getData: function (url, callback) {
            var req = new XMLHttpRequest();
            req.onload = callback;
            req.open("GET", url, true);
            req.send();
        },

        _textStrip: function(html) {
            html = html.replace(/\n/gm,'');
            return html.replace(/<(?:.|\n)*?>/gm,'');
        },

        _timestampToDate: function(ts) {
            var t = new Date(ts), day, month, date;
            day = (t.getDate() <= 9) ? "0"+t.getDate() : t.getDate();
            month = ((t.getMonth() + 1) <= 9) ? "0"+(t.getMonth() + 1) : (t.getMonth() + 1);
            date = month+"/"+day;
            return date;
        },

        _textTruncate: function(text, size) {
            return (text.length > size) ? text.substring(0, size)+"..." : text;
        }
    };

    window.Events = Events;

})();
