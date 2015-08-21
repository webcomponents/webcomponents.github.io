(function (window, document) {

    'use strict';

    var baseUrl = 'https://api.github.com/';

    // Callback function
    function appendContributors() {
        /*jshint validthis: true*/
        var result = JSON.parse(this.responseText),
            i,
            length = result.length,
            tpl = '<li class="contributor" itemprop="itemListElement" itemscope itemtype="http://schema.org/Person"><a href="#"><img class="picture" width="90" height="90"></a></li>',
            str = '',
            obj,
            div;

        for (i = 0; i < length; i += 1) {
            obj = result[i];

            div = document.createElement('div');
            div.innerHTML = tpl;
            div.querySelector('a').href = obj.html_url;
            div.querySelector('img').src = obj.avatar_url;
            // document.body.querySelector('.users').appendChild(div);
            str += div.innerHTML;
        }

        document.body.querySelector('.profile-list').innerHTML = str;
    }

    var url = baseUrl + "repos/webcomponents/webcomponents.github.io/contributors";

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', appendContributors);
    oReq.open("get", url, true);
    oReq.send();

})(window, document);