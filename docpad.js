module.exports = {

    /** =====================================================================
        Production Environment
        ===================================================================== */

    // These are variables will be accessible via our templates

    templateData: {
        authors: require("./authors"),

        site: {
            title: "WebComponents.org",
            description: "A place to discuss and evolve Web Component best-practices",
            url: "http://webcomponents.org",
            image: "http://webcomponents.org/img/logo.png"
        },

        github: {
            user: "webcomponents",
            repo: "webcomponents.github.io"
        },

        /* Helpers
        ===================================================================== */

        getAuthor: function(author) {
            if (author) {
                return this.authors[author];
            }

            return this.authors["community"];
        },

        getAuthorImage: function(author) {
            if (this.authors[author].gravatar) {
                return "https://2.gravatar.com/avatar/" + this.authors[author].gravatar;
            }

            return this.authors[author].image;
        },

        getAuthorTwitter: function(author) {
            return "https://twitter.com/" + this.authors[author].twitter;
        },

        getGithubURL: function() {
            return "https://github.com/" + this.github.user + "/" + this.github.repo;
        },

        getGithubEditURL: function(path) {
            return this.getGithubURL() + "/edit/site/src/documents/" + path;
        },

        getTagURL: function(tag) {
            var page = this.getFile({
                tag: tag
            });

            if (page != null) {
                return page.get("url");
            }

            return "";
        },

        getTitle: function() {
            if (this.document.title) {
                return "" + this.document.title + " — " + this.site.title;
            }

            return "" + this.site.title;
        },

        getDescription: function() {
            if (this.document.layout === "single") {
                return this.getExcerpt(this.document.content);
            }

            if (this.document.description) {
                return this.document.description;
            }

            return this.site.description;
        },

        getExcerpt: function(item) {
            var content = String(item);
            var i = content.search("<!-- Excerpt -->");

            if (i >= 0) {
                return content.slice(0, (i - 1));
            }

            return content;
        },

        getImage: function() {
            if (this.document.image) {
                return "" + this.site.url + "/img/stories/" + this.document.image;
            }

            return this.site.image;
        },

        hasReadMore: function(item) {
            var content = String(item);

            return content.search("<!-- Excerpt -->") >= 0;
        },

        hasRssFeed: function(item) {
            var articles = this.document.title === "Articles";
            var presentations = this.document.title === "Presentations";
            var podcasts = this.document.title === "Podcasts";


            return articles || presentations || podcasts;
        },

        getSticky: function(collection){
            var arraySticky = collection.filter(function(item){
                return item.sticky === true;
            });

            if(arraySticky.length > 0){
                return arraySticky.slice(0, 1);
            }

            return collection.slice(0, 1);
        },

        isActiveMenu: function(path) {
            if (path === this.document.relativeDirPath) {
                return true;
            }

            return;
        },

        // Since we're using CSS columns, all cards get ordered in the UI
        // from top to bottom, instead of from left to right.
        // This function reorders the document list to address that.
        fixOrder: function(documentsList){
            var documentsEven = [],
                documentsOdd = [],
                i = 0;

            if (!Array.isArray(documentsList)) {
                return documentsList;
            }

            for (; i < documentsList.length; i++) {
                if (i%2 === 0) {
                    documentsEven.push(documentsList[i]);
                } else {
                    documentsOdd.push(documentsList[i]);
                }
            }

            return documentsEven.concat(documentsOdd);
        }
    },

    /** =====================================================================
        Development Environment
        ===================================================================== */

    environments: {
        development: {
            templateData: {
                site: {
                    url: "http://localhost:9778"
                }
            }
        }
    },

    /** =====================================================================
        Collections
        ===================================================================== */

    collections: {
        articles: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/articles"
                },
                layout: "single",
                isPagedAuto: {
                    $ne: true
                }
            }, [{ date: -1 }]);
        },

        browserSupport: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/browser-support"
                }
            }, [{ order: 1 }]);
        },

        discover: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/discover"
                }
            }, [{ order: 1 }]);
        },

        libraries: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/libraries"
                }
            }, [{ order: 1 }]);
        },

        presentations: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/presentations"
                },
                layout: "single",
                isPagedAuto: {
                    $ne: true
                }
            }, [{ date: -1 }]);
        },

        podcasts: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/podcasts"
                },
                layout: "single",
                isPagedAuto: {
                    $ne: true
                }
            }, [{ date: -1 }]);
        },

        specs: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/specs"
                }
            }, [{ order: 1 }]);
        },

        swags: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/swags"
                }
            }, [{ order: 1 }]);
        },

        about: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/about"
                }
            }, [{ order: -1 }]);
        }
    },

    /** =====================================================================
        Plugins Configuration
        ===================================================================== */

    plugins: {
        moment: {
            formats: [
                { raw: "original_date", format: "MMMM Do, YYYY", formatted: "humanDate" }
            ]
        },
        grunt: {
            writeAfter: false,
            generateAfter: ["clean", "cssmin", "htmlmin"]
        },
        ghpages: {
            deployBranch: "master"
        },
        tags: {
            extension: ".html",
            injectDocumentHelper: function (document) {
                return document.setMeta({
                    layout: "tags"
                });
            }
        },
        rss: {
            articles: {
                collection: "articles",
                url: "/articles.xml"
            },
            presentations: {
                collection: "presentations",
                url: "/presentations.xml"
            },
            podcasts: {
                collection: "podcasts",
                url: "/podcasts.xml"
            }
        }
    }
};
