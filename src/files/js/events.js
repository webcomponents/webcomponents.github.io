/*
 (c) 2015, Beto Muniz - betomuniz.com
 Get Web Components Events from Meetup.com
*/

(function() {
    'use strict';

    function Events() {
        this.init();
    }

    Events.prototype = {

        groups_source: "/data/groups.json",

        init: function() {
            this.loadEvents();
        },

        loadEvents: function(events) {
            var that = this;
            that._getData(that.groups_source, function() {
                var data = JSON.parse(this.responseText),
                    groups = that.prepareGroups(data.groups, "id");
                // The `key` should be changed to a shared API KEY
                that._JSONP(
                    "https://api.meetup.com/2/events?sign=true" +
                    "&photo-host=public&group_id="               +
                    groups                                       +
                    "&page=6&key=235a631d264079e676b2e5b5fe6853",
                    function(res) {
                    var events = res.results;
                    that.setEvents(events, data);
                });
            });
        },

        setEvents: function(events, groups) {

            var that = this,
                eventsSection = document.querySelector("#events");

            if (events.length > 0) {
                var eventCardTpl = document.querySelector("#card-event-template").innerHTML,
                    virtualCardTpl = eventCardTpl,
                    eventsOrdered = that.orderEvents(events),
                    name,
                    description,
                    yes_rsvp_count,
                    event_url;

                eventsSection.innerHTML = '';

                for (var i = 0; i < eventsOrdered.length; i++) {
                    virtualCardTpl = eventCardTpl;

                    // Add image to template
                    virtualCardTpl = that.setCardImage(virtualCardTpl, eventsOrdered[i], groups);

                    // Add name to template
                    virtualCardTpl = that.setCardName(virtualCardTpl, eventsOrdered[i]);

                    // Add description to template
                    virtualCardTpl = that.setCardDescription(virtualCardTpl, eventsOrdered[i], "This meetup has no description.");

                    // Add date to template
                    virtualCardTpl = that.setCardDate(virtualCardTpl, eventsOrdered[i]);

                    // Add venue to template
                    virtualCardTpl = that.setCardVenue(virtualCardTpl, eventsOrdered[i]);

                    // Add RVSPs to template
                    virtualCardTpl = that.setCardRVSP(virtualCardTpl, eventsOrdered[i], "No RVSPs");

                    // Add url to template and bind template
                    eventsSection.innerHTML += that.setCardUrl(virtualCardTpl, eventsOrdered[i]);
                }
            } else {
                eventsSection.innerHTML = '<p class="no-events">No events found.</p>';
            }

        },

        setCardImage: function(virtualTpl, eventsOrdered, groups) {
            return this.prepareTpl(virtualTpl, 'image', this.getGroup(eventsOrdered.group.id, groups).thumbnail);
        },

        setCardName: function(virtualTpl, eventsOrdered) {
            var name = (eventsOrdered.name) ? this._textStrip(eventsOrdered.name) : "";
            return this.prepareTpl(virtualTpl, 'name', this._textTruncate(name));
        },

        setCardDescription: function(virtualTpl, eventsOrdered, defaultMsg) {
            var description = (eventsOrdered.description) ? this._textStrip(eventsOrdered.description) : defaultMsg;
            return this.prepareTpl(virtualTpl, 'description', this._textTruncate(description, 170));
        },

        setCardDate: function(virtualTpl, eventsOrdered) {
            return this.prepareTpl(virtualTpl, 'date', this._timestampToDate(eventsOrdered.time));
        },

        setCardVenue: function(virtualTpl, eventsOrdered) {
            if (eventsOrdered.venue) {
                // Add city to template
                var city = (eventsOrdered.venue.city) ? eventsOrdered.venue.city + ", " : "";
                virtualTpl = this.prepareTpl(virtualTpl, 'city', city);

                // Add country to template
                var country = (eventsOrdered.venue.country) ? eventsOrdered.venue.country : "";
                virtualTpl = this.prepareTpl(virtualTpl, 'country', country);
            } else {
                virtualTpl = this.prepareTpl(virtualTpl, 'country', "");
            }
            return virtualTpl;
        },

        setCardRVSP: function(virtualTpl, eventsOrdered, defaultMsg) {
            var yes_rsvp_count = (eventsOrdered.yes_rsvp_count && eventsOrdered.yes_rsvp_count > 0) ? eventsOrdered.yes_rsvp_count : defaultMsg;
            return this.prepareTpl(virtualTpl, 'yes_rsvp_count', yes_rsvp_count);
        },

        setCardUrl: function(virtualTpl, eventsOrdered) {
            var event_url = (eventsOrdered.event_url) ? eventsOrdered.event_url : "";
            return this.prepareTpl(virtualTpl, 'url', event_url);
        },

        getGroup: function(group_id, data) {
            var group;
            for (var i = 0; i < data.groups.length; i++) {
                if (data.groups[i].id == group_id) group = data.groups[i];
            };
            return group;
        },

        prepareTpl: function(virtualTpl, key, value) {
            var re = new RegExp("{{" + key + "}}", "g");
            return virtualTpl.replace(re, value);
        },

        prepareGroups: function(obj, key) {
            return obj.map(function(i) {
                return i[key]
            }).toString();
        },

        orderEvents: function(events) {
            return events.sort(function(x, y) {
                return x.time - y.time;
            });
        },

        _getData: function(url, callback) {
            var req = new XMLHttpRequest();
            req.onload = callback;
            req.open("GET", url, true);
            req.send();
        },

        _JSONP: function(url, method, callback) {
            url = url || '';
            method = method || '';
            callback = callback || function(){};

            if(typeof method == 'function'){
              callback = method;
              method = 'callback';
            }

            var generatedFunction = 'jsonp'+Math.round(Math.random()*1000001);
            window[generatedFunction] = function(json){
              callback(json);
              delete window[generatedFunction];
            };
            if(url.indexOf('?') === -1){ url = url+'?'; } else { url = url+'&'; }

            var jsonpScript = document.createElement('script');
            jsonpScript.setAttribute("src", url+method+'='+generatedFunction);
            document.getElementsByTagName("head")[0].appendChild(jsonpScript);
        },

        _textStrip: function(html) {
            html = html.replace(/\n/gm, '');
            return html.replace(/<(?:.|\n)*?>/gm, '');
        },

        _timestampToDate: function(ts) {
            var t = new Date(ts),
                day, month, date;
            day = (t.getDate() <= 9) ? "0" + t.getDate() : t.getDate();
            month = ((t.getMonth() + 1) <= 9) ? "0" + (t.getMonth() + 1) : (t.getMonth() + 1);
            date = month + "/" + day;
            return date;
        },

        _textTruncate: function(text, size) {
            return (text.length > size) ? text.substring(0, size) + "..." : text;
        }
    };

    window.Events = Events;

})();
