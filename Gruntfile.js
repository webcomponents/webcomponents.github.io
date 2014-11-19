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
                'out/specs',
                'out/tags/index.html'
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

        lintspaces: {
            all: {
                src: [
                    'src/documents/**/*', 'src/files/css/*', 'src/layouts/**/*',
                    'src/partials/**/*', '*.js', '*.json'
                ],
                options: {
                    editorconfig: '.editorconfig'
                }
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
                    url: "http://webcomponents.github.io/",
                    strategy: "desktop",
                    threshold: 80,
                    locale: "en_US"
                }
            },
            mobile: {
                options: {
                    url: "http://webcomponents.github.io/",
                    strategy: "mobile",
                    threshold: 68,
                    locale: "en_US"
                }
            },
            options: {
                // PageSpeed API key defined as an environment variable
                // Generate your own: http://goo.gl/FQplpu
                key: process.env.PAGESPEED_API_KEY,
                url: "http://webcomponents.github.io"
            }
        }
    });

    require('load-grunt-tasks')(grunt);
};
