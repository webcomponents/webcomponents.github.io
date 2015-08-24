(function (window, document) {

    'use strict';

    // Callback function
    function appendContributors() {
        /*jshint validthis: true*/
        var result = JSON.parse(this.responseText),
            tpl = '<li class="contributor" itemprop="itemListElement" itemscope itemtype="http://schema.org/Person"><a href="#"><img class="picture" width="90" height="90"></a></li>',
            str = '',
            div;

        for (var i = 0; i < result.length; i++) {
            div = document.createElement('div');
            div.innerHTML = tpl;
            div.querySelector('a').href = result[i].html_url;
            div.querySelector('img').src = result[i].avatar_url + '&size=180';
            str += div.innerHTML;
        }

        document.querySelector('.profile-list').innerHTML = str;
    }

    var url = "https://api.github.com/repos/webcomponents/webcomponents.github.io/contributors";

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', appendContributors);
    oReq.open("get", url, true);
    oReq.send();

})(window, document);
