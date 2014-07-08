(function (window, document, undefined) {

    'use strict';

    var button = document.querySelector('.menubutton'),
        nav = document.querySelector('.nav');

    button.addEventListener('click', function(e) {
        nav.classList.toggle('desktop-only');
    });
})(window, document);
