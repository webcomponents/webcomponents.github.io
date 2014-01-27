module.exports = {

    /* =========================================================================
       Production Environment
    ========================================================================= */

    // These are variables will be accessible via our templates

    templateData: {
        site: {
            title: "WebComponents.org",
            description: "The web platform specs that will change the way you build apps",
            url: "http://webcomponentsorg.github.io/webcomponents.org"
        },

        /* Authors
        ===================================================================== */

        authors: {
            addy_osmani: {
                name: "Addy Osmani",
                bio: "Addy works on the Chrome Developer Relations team at Google, building and advocating for tools to help improve developer productivity and satisfaction. His personal projects include TodoMVC, which helps developers compare JavaScript MVC frameworks and AuraJS. He've also written 'Developing Backbone.js Applications' and 'Learning JavaScript Design Patterns'.",
                gravatar: "96270e4c3e5e9806cf7245475c00b275",
                gplus: "+AddyOsmani",
                twitter: "addyosmani"
            },
            alex_komoroske: {
                name: "Alex Komoroske",
                bio: "Alex is a Product Manager on Chrome's Open Web Platform team. Before he was a product manager he was a web developer and even today loves building web apps in his spare time. Now he's excited to be helping other web developers make awesome apps that harness the open web platform's full potential.",
                gravatar: "e6d71413617dfba7a5ff5b9a7180c007",
                gplus: "+AlexKomoroske",
                twitter: "jkomoros"
            },
            dominic_cooney: {
                name: "Dominic Cooney",
                bio: "Dominic is Staff Software Engineer at Google on web frontends and server and client web platforms.",
                gravatar: "73b7633609b8f2bda1e73d35dabacb08",
                gplus: "+DominicCooney",
                twitter: "coonsta"
            },
            eric_bidelman: {
                name: "Eric Bidelman",
                bio: "Eric is a Staff Developer Programs Engineer on the Google Chrome team. His current passion is web components and Polymer. Eric is the author of 'Using the HTML5 Filesystem API' and regularly contributes to html5rocks.com and other open source projects. Prior to Google, Eric worked as a software engineer at the University of Michigan where he designed rich web applications and APIs for the university’s 19 libraries.",
                gravatar: "e7948aac7c52b26470be80311873a398",
                gplus: "+EricBidelman",
                twitter: "ebidel"
            },
            mark_dalgleish: {
                name: "Mark Dalgleish",
                bio: "Mark is a senior UI developer at SEEK and the lead organiser of MelbJS. He’s obsessed with everything web and loves using JavaScript, CSS and HTML to create rich experiences that resonate with end users. In his spare time, he loves experimenting with the latest web technologies, sharing projects online and helping others learn progressive web development techniques.",
                gravatar: "eec502b7f6f17f63f1e36d1cd566a254",
                gplus: "104420396861285844168",
                twitter: "markdalgleish"
            },
            peter_gasston: {
                name: "Peter Gasston",
                bio: "Peter Gasston has been a web developer for over 10 years in both agency and corporate settings. He was one of the original contributors to CSS3.info, the leading online destination for CSS3. Peter has been published in the UK's .net magazine, gives talks about CSS and web technologies at developer conferences, and runs the web development blog Broken Links. He lives in London, England.",
                gravatar: "9d9f17e37b751b9f83081ba3dd44bab4",
                gplus: "101356325339382110529",
                twitter: "stopsatgreen"
            },
            rob_dodson: {
                name: "Rob Dodson",
                bio: "Rob is a Developer Advocate on the Google Chrome team. He is currently helping to educate developers about web components and Polymer. Though he's originally from the South, these days he divides his time between Mountain View and San Francisco.",
                gravatar: "95c3a3b33ea51545229c625bef42e343",
                gplus: "+RobDodson",
                twitter: "rob_dodson"
            },
            varunkumar_nagarajan: {
                name: "Varunkumar Nagarajan",
                bio: "A software engineer by profession and a blogger by passion. A web developer. Technology enthusiast. Have four years of industry experience.",
                gravatar: "a7c860a23fc707909d7b78fcbb374367",
                gplus: "+varunkumarnagarajan",
                twitter: "varunkumar"
            },
            zeno_rocha: {
                name: "Zeno Rocha",
                bio: "Zeno is front-end engineer at Liferay, Inc. Besides that, he's a writer at Smashing Magazine, member at the Google Developer Experts program, host at Zone Of Front-Enders podcast and co-founder of BrazilJS Foundation.",
                gravatar: "e190023b66e2b8aa73a842b106920c93",
                gplus: "+ZenoRochaBN",
                twitter: "zenorocha"
            }
        },

        /* Helpers
        ===================================================================== */

        getAuthor: function(author) {
            return this.authors[author];
        },

        getAuthorGravatar: function(author) {
            return "https://2.gravatar.com/avatar/" + this.authors[author].gravatar;
        },

        getAuthorGooglePlus: function(author) {
            return "https://plus.google.com/" + this.authors[author].gplus + "/";
        },

        getAuthorTwitter: function(author) {
            return "https://twitter.com/" + this.authors[author].twitter;
        },

        getTitle: function() {
            if (this.document.title) {
                return "" + this.document.title + " — " + this.site.title;
            }
            else {
                return "" + this.site.title;
            }
        },

        getDescription: function() {
            if (this.hasReadMore(this.document.content)) {
                return "" + this.getExcerpt(this.document.content);
            }
            else {
                return "" + this.site.description;
            }
        },

        getExcerpt: function(content) {
            var i = content.search("<!-- Read more -->");

            if (i >= 0) {
                return content.slice(0, (i - 1));
            } else {
                return content;
            }
        },

        hasReadMore: function(content) {
            return content.search("<!-- Read more -->") >= 0;
        }
    },

    /* =========================================================================
       Development Environment
    ========================================================================= */

    environments: {
        development: {
            templateData: {
                site: {
                    url: "http://localhost:9778"
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
            }, [{ title: 1 }]);
        },

        polyfills: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/polyfills"
                }
            }, [{ title: 1 }]);
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

        specs: function() {
            return this.getCollection("documents").findAllLive({
                url: {
                    $startsWith: "/specs"
                }
            }, [{ order: 1 }]);
        }
    },

    /* =========================================================================
       Plugins Configuration
    ========================================================================= */

    plugins: {
        moment: {
            formats: [
                { raw: "date", format: "MMMM Do, YYYY", formatted: "humanDate" }
            ]
        },
        grunt: {
            writeAfter: false,
            generateAfter: ["clean", "cssmin", "htmlmin"]
        }
    }
};
