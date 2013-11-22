module.exports = function(grunt) {
    grunt.initConfig({
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

    grunt.loadNpmTasks('grunt-pagespeed');
};
