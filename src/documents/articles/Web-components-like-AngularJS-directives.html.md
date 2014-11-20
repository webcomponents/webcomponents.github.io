As you may already know web components consist out of a set of technologies which are combined to create a custom element for use in your HTML markup. The main additions, as described in several blogposts, are HTML imports, Shadow Dom and Templates combined with isolated scripts and styling. (If these concepts are new to you i suggest you read up on web components here at WebComponents.org).

This blog post has a living [example on plnkr.co](http://plnkr.co/edit/PidifMB7t7NQ3Pjy5kIT?p=preview).

If we look at Angular it already supports html imports and isolated scripts through it's directive approach. This means we can already create custom components by using directives. The downside of this approach however is that there is no true isolation of markup and styling. Meaning both markup and styling may be inadvertently influenced by an outside source.

Let's start with a basic directive:

    angular.module('shadow.app', ['component.api'])
    .directive('simpleDirective', function() {
        return {
          restrict: 'E',
          replace: false,
          templateUrl: 'template.html',
          transclude: true,
          scope: {
            dynamic: '='
          },
          link: function($scope, element) {
            // your code here
          }
        };
      })

And it's corresponding template

    <div class="outer">
      <div class="boilerplate">
        This is template content
      </div>
      <div class="name">
        <div ng-transclude></div>
      </div>
      <div class="boilerplate">
        {{dynamic}}
      </div>
    </div>

Now the first thing we'll want to do is make sure that the template we get is correct. In order to do this we will be creating a function which retrieves the template and encapsulates it inside a template. You could also do this in the template it's self, but it'll soon become clear why I choose to work this way.

The method for doing this will require $interpolate and $templateCache to be added to your directive. As we'll be getting the template from the cache directly and create a template stamp. The stamp should look something like this:

    var shadowTemplate = $interpolate('<div ng-transclude></div>' +
        '<template>{{template}}</template>');

And then the function would look like:

    function handleShadowTemplate(url) {
        var template = $templateCache.get(url);

        template = template.replace('<div ng-transclude></div>', '<content></content>');
        template = shadowTemplate({
            template: template
        })
        return template;
    }

This effectively wraps the markup inside a Template for later use with the shadow root whilst still maintaining a link inside it with our transcluded content through the content tag. The trick here is to create a wrapper for the link function. You could also use the link function for this but it'll become clear later on why i choose not follow said approach.

The function would look something like this:

    function shadowLink(linkCallback) {
        return function($scope, element, attr, controllers, transcludeFn) {
            var shadow = element.find('div')[0].createShadowRoot(),
                template = element.find('template')[0],
                clone = document.importNode(template.content, true);

            shadow.appendChild(clone);
            $compile(shadow)($scope);

            linkCallback($scope, element, attr, controllers, transcludeFn);
        }
    }
This effectively retrieves the transcluding tag which will now also become our shadow root, retrieve our template (the one we stamped out earlier) and clone it's content and now the magic begins. Well not really magic but something interesting nonetheless. We add our cloned content to our shadow root and then compile it with the scope of our directive.

This effectively binds our scope content to our shadow-document. Allowing data binding to function as it normally would in a AngularJS directive. Only now our markup is isolated and will not be as prone to accidental manipulation.

Now I mentioned styling earlier on. And in many blogs you'll see people add styling inline. I don't really like that method so I personally prefer to use the @import statement but that is mainly preference I think.

And as for the reason for the wrappers. Using methods en encapsulate our callbacks it's possible to move them into a service allowing us to use these exact same methods in multiple directives whilst maintaining a single point of maintainability. Like so:

    angular.module('component.api', []).provider('ShadowService', function() {
        this.$get = ['$compile', '$interpolate', '$templateCache',
            function($compile, $interpolate, $templateCache) {
                var shadowTemplate = $interpolate('<div ng-transclude></div>' +
                    '<template>{{template}}</template>');

                function handleShadowTemplate(url) {
                    // Your code here
                }

                function shadowLink(linkCallback) {
                    // Your code here
                }

                return {
                    shadowTemplate: handleShadowTemplate,
                    shadowLink: shadowLink
                };
            }
        ];
    });
Always good to keep up with the DRY principle and all. You can see more on how I implemented the provider in my [plunker example](http://plnkr.co/edit/PidifMB7t7NQ3Pjy5kIT?p=preview). And also how I prevent shadow dom execution when createShadowRoot is not supported.

If you wan't to see more or just play with this setup see the [plunker](http://plnkr.co/edit/PidifMB7t7NQ3Pjy5kIT?p=preview) i've created for your enjoyment. I hope you've enjoyed reading this and please ask any questions you may have through the comments section below.