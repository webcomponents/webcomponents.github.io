module.exports = {

    /* =========================================================================
       Production Environment
    ========================================================================= */

    // These are variables will be accessible via our templates

    templateData: {
        site: {
            title: 'WebComponents.org',
            description: 'The web platform specs that will change the way you build apps',
            url: 'http://webcomponentsorg.github.io/webcomponents.org'
        },

        authors: {
            addy_osmani: {
                name: 'Addy Osmani',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorem cum sapiente odio voluptates commodi. Pariatur, saepe, non id consequuntur voluptatum sequi illo esse dolor voluptatibus voluptates minus reiciendis veritatis aliquid quas.',
                gravatar: '96270e4c3e5e9806cf7245475c00b275',
                twitter: 'addyosmani'
            },
            dominic_cooney: {
                name: 'Dominic Cooney',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorem cum sapiente odio voluptates commodi. Pariatur, saepe, non id consequuntur voluptatum sequi illo esse dolor voluptatibus voluptates minus reiciendis veritatis aliquid quas.',
                gravatar: '73b7633609b8f2bda1e73d35dabacb08',
                twitter: 'coonsta'
            },
            eric_bidelman: {
                name: 'Eric Bidelman',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorem cum sapiente odio voluptates commodi. Pariatur, saepe, non id consequuntur voluptatum sequi illo esse dolor voluptatibus voluptates minus reiciendis veritatis aliquid quas.',
                gravatar: 'bc648a000e8edf29f3b7310b68bac247',
                twitter: 'ebidel'
            },
            rob_dodson: {
                name: 'Rob Dodson',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorem cum sapiente odio voluptates commodi. Pariatur, saepe, non id consequuntur voluptatum sequi illo esse dolor voluptatibus voluptates minus reiciendis veritatis aliquid quas.',
                gravatar: '95c3a3b33ea51545229c625bef42e343',
                twitter: 'rob_dodson'
            }
        },

        getAuthor: function(author) {
            return this.authors[author];
        },

        getExcerpt: function(content) {
            var i = content.search('<!-- Read more -->');

            if (i >= 0) {
                return content.slice(0, (i - 1));
            } else {
                return content;
            }
        },

        hasReadMore: function(content) {
            return content.search('<!-- Read more -->') >= 0;
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
                },
                layout: 'single',
                isPagedAuto: {
                    $ne: true
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
                },
                layout: 'single',
                isPagedAuto: {
                    $ne: true
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
