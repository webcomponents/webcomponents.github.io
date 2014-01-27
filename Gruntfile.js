module.exports = function(grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: 'src/files/vendor',
                    cleanBowerDir: true
                }
            }
        },

        clean: {
            dist: [
                'out/browser-support',
                'out/discover',
                'out/polyfills',
                'out/specs'
            ]
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'src/files/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'out/css/',
                ext: '.min.css'
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'out',
                    src: '**/*.html',
                    dest: 'out/'
                }]
            }
        },

        imageoptim: {
            dist: {
                options: {
                    jpegMini: false,
                    imageAlpha: true,
                    quitAfter: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/files/img',
                    src: '**/*.{png,jpg,jpeg}',
                    dest: 'src/files/img'
                }]
            }
        },

        pagespeed: {
            desktop: {
                options: {
                    url: "http://webcomponentsorg.github.io/webcomponents.org",
                    strategy: "desktop",
                    threshold: 80
                }
            },
            mobile: {
                options: {
                    url: "http://webcomponentsorg.github.io/webcomponents.org",
                    strategy: "mobile",
                    threshold: 70
                }
            },
            options: {
                // PageSpeed API key defined as an environment variable
                // Generate your own: http://goo.gl/FQplpu
                key: process.env.PAGESPEED_API_KEY,
                url: "http://webcomponentsorg.github.io"
            }
        }
    });

    require('load-grunt-tasks')(grunt);
};
