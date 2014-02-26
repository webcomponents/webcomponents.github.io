(function (window, document, undefined) {

    'use strict';

    var form = document.querySelector('#suggest-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var title = 'Suggest new Sandbox section: ' + e.target['0'].value;
        window.location.href = 'https://github.com/webcomponents/webcomponents.github.io/issues/new?title=' + title;
    });

})(window, document);
