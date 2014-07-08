(function (window, document, undefined) {

    'use strict';

    var button = document.querySelector('.menu-button'),
        nav = document.querySelector('.nav');

    button.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.toggle('desktop-only');
    });
})(window, document);
