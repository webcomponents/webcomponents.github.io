module.exports = {

    /* =========================================================================
       Production Environment
    ========================================================================= */

    // These are variables will be accessible via our templates

    templateData: {
        site: {
            title: 'WebComponents.org',
            description: 'The open web technology that will change the way you build apps',
            url: 'http://zenorocha.github.io/webcomponents.org'
        },

        }
    },

    /* =========================================================================
       Development Environment
    ========================================================================= */

    environments: {
        development: {
            templateData: {
                site: {
                    url: 'http://localhost:9778'
                }
            }
        }
    },

    /* =========================================================================
       Collections
    ========================================================================= */

    collections: {
        articles: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/articles'
                }
            }, [{ date: -1 }]);
        },

        browserSupport: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/browser-support'
                }
            }, [{ order: 1 }]);
        },

        discover: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/discover'
                }
            }, [{ title: 1 }]);
        },

        polyfills: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/polyfills'
                }
            }, [{ title: 1 }]);
        },

        presentations: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/presentations'
                }
            }, [{ date: -1 }]);
        },

        specs: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: '/specs'
                }
            }, [{ order: 1 }]);
        }
    }

};
