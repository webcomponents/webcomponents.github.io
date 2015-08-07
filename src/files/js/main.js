(function (window, document, undefined) {
    'use strict';

    var button = document.querySelector('.menu-button'),
        nav = document.querySelector('.nav'),
        searchBox = document.querySelector('.search-box');

    button.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.toggle('desktop-only');
        searchBox.classList.toggle('desktop-only');
    });
})(window, document);