# Angular Revolution

### A directive for the Slider Revolution created by [ThemePunch](http://www.themepunch.com/portfolio/slider-revolution-jquery-plugin/)

### **Note:** *This directive requires the jQuery plugin Slider Revolution, which is a paid plugin and requires license. The plugin is not included in this directive because of this.

---
**[Download 1.0.0](https://github.com/Karnith/angular-revolution/archive/master.zip) |**
**[Guide](https://github.com/Karnith/angular-revolution/wiki) |**
**[FAQ](https://github.com/Karnith/angular-revolution/wiki/Frequently-Asked-Questions) |**
**[Resources](#resources) |**
**[Report an Issue](https://github.com/Karnith/angular-revolution/blob/master/CONTRIBUTING.md#report-an-issue) |**
**[Contribute](https://github.com/Karnith/angular-revolution/blob/master/CONTRIBUTING.md#contribute)

---

## Get Started

**(1)** Get angular-revolution in one of the following ways:
 - clone & [build](CONTRIBUTING.md#developing) this repository
 - [download the release](https://github.com/Karnith/angular-revolution/archive/master.zip)
 - via **[npm](https://www.npmjs.org/)**: by running `$ npm install angular-revolution` from your console
 - or via **[Bower](http://bower.io/)**: by running `$ bower install angular-revolution` from your console
 
**(2)** Include `angular-revolution.js` (or `angular-revolution.min.js`) in your `index.html`, after including Angular itself

**(3)** Add `'rev.slider'` to your main module's list of dependencies

When you're done, your setup should look similar to the following:

>
```html
<!doctype html>
<html ng-app="myApp">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
    <script src="js/angular-revolution.min.js"></script>
    <script>
        var myApp = angular.module('myApp', ['rev.slider']);
        // For Component users, it should look like this:
        // var myApp = angular.module('myApp', [require('angular-revolution')]);
    </script>
    ...
</head>
<body>
    ...
</body>
</html>
```

## Usage

The directive can be used as an element
```html
<rev-slider
  id="rev_slider"
  class="rev_slider"
  data-version="5.1.1RC"
  slider-Type="{{slider.sliderType}}"
  slider-Layout="{{slider.sliderLayout}}"
  responsive-Levels="{{slider.responsiveLevels}}"
  gridwidth="{{slider.gridwidth}}"
  gridheight="{{slider.gridheight}}"
  auto-Height="{{slider.autoHeight}}"
  min-Height="{{slider.minHeight}}"
  full-Screen-Offset-Container="{{slider.fullScreenOffsetContainer}}"
  full-Screen-Offset="{{slider.fullScreenOffset}}"
  delay="{{slider.delay}}"
  disable-Progress-Bar="{{slider.disableProgressBar}}"
  start-Delay="{{slider.startDelay}}"
  stop-After-Loops="{{slider.stopAfterLoops}}"
  stop-At-Slide="{{slider.stopAtSlide}}"
  view-Port="{{slider.viewPort}}"
  lazy-Type="{{slider.lazyType}}"
  dotted-Overlay="{{slider.dottedOverlay}}"
  shadow="{{slider.shadow}}"
  spinner="{{slider.spinner}}"
  hide-All-Caption-At-Lilmit="{{slider.hideAllCaptionAtLilmit}}"
  hide-Caption-At-Limit="{{slider.hideCaptionAtLimit}}"
  hide-Slider-At-Limit="{{slider.hideSliderAtLimit}}"
  debug-Mode="{{slider.debugMode}}"
  extensions="{{slider.extensions}}"
  extensionssuffix="{{slider.extensions_suffix}}"
  fallbacks="{{slider.fallbacks}}"
  parallax="{{slider.parallax}}"
  rev-Carousel="{{slider.carousel}}"
  navigation="{{slider.navigation}}"
  js-File-Location="{{slider.jsFileLocation}}"
  visibility-Levels="{{slider.visibilityLevels}}"
  hide-Thumbs-On-Mobile="{{slider.hideThumbsOnMobile}}"
  slides="slider.slides"
  slider-Template-Url="common/templates/directiveSlider/frontpage.slider.tpl.html"
>
</rev-slider>
```
or an attribute
```html
<div rev-slider
  id="rev_slider"
  class="rev_slider"
  data-version="5.1.1RC"
  slider-Type="{{slider.sliderType}}"
  slider-Layout="{{slider.sliderLayout}}"
  responsive-Levels="{{slider.responsiveLevels}}"
  gridwidth="{{slider.gridwidth}}"
  gridheight="{{slider.gridheight}}"
  auto-Height="{{slider.autoHeight}}"
  min-Height="{{slider.minHeight}}"
  full-Screen-Offset-Container="{{slider.fullScreenOffsetContainer}}"
  full-Screen-Offset="{{slider.fullScreenOffset}}"
  delay="{{slider.delay}}"
  disable-Progress-Bar="{{slider.disableProgressBar}}"
  start-Delay="{{slider.startDelay}}"
  stop-After-Loops="{{slider.stopAfterLoops}}"
  stop-At-Slide="{{slider.stopAtSlide}}"
  view-Port="{{slider.viewPort}}"
  lazy-Type="{{slider.lazyType}}"
  dotted-Overlay="{{slider.dottedOverlay}}"
  shadow="{{slider.shadow}}"
  spinner="{{slider.spinner}}"
  hide-All-Caption-At-Lilmit="{{slider.hideAllCaptionAtLilmit}}"
  hide-Caption-At-Limit="{{slider.hideCaptionAtLimit}}"
  hide-Slider-At-Limit="{{slider.hideSliderAtLimit}}"
  debug-Mode="{{slider.debugMode}}"
  extensions="{{slider.extensions}}"
  extensionssuffix="{{slider.extensions_suffix}}"
  fallbacks="{{slider.fallbacks}}"
  parallax="{{slider.parallax}}"
  rev-Carousel="{{slider.carousel}}"
  navigation="{{slider.navigation}}"
  js-File-Location="{{slider.jsFileLocation}}"
  visibility-Levels="{{slider.visibilityLevels}}"
  hide-Thumbs-On-Mobile="{{slider.hideThumbsOnMobile}}"
  slides="slider.slides"
  slider-Template-Url="common/templates/directiveSlider/frontpage.slider.tpl.html"
>
</div>
```

The $scope is used to push slider configurations to the element & attributes which in turn feed into the slider jQuery plugin.

## Example

index.html
```html
<div class="container-fluid" data-ng-style="{'max-width':'1920px'}">
    <section class="content-section" data-ng-style="{'max-width':'1920px', 'margin':'0 auto'}">
      <div class="rev_slider_wrapper jumbotron" style="background-color:#ddd;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;">
        <div rev-slider
          id="rev_slider"
          class="rev_slider"
          data-version="5.1.1RC"
          slider-Type="{{slider.sliderType}}"
          slider-Layout="{{slider.sliderLayout}}"
          responsive-Levels="{{slider.responsiveLevels}}"
          gridwidth="{{slider.gridwidth}}"
          gridheight="{{slider.gridheight}}"
          auto-Height="{{slider.autoHeight}}"
          min-Height="{{slider.minHeight}}"
          full-Screen-Offset-Container="{{slider.fullScreenOffsetContainer}}"
          full-Screen-Offset="{{slider.fullScreenOffset}}"
          delay="{{slider.delay}}"
          disable-Progress-Bar="{{slider.disableProgressBar}}"
          start-Delay="{{slider.startDelay}}"
          stop-After-Loops="{{slider.stopAfterLoops}}"
          stop-At-Slide="{{slider.stopAtSlide}}"
          view-Port="{{slider.viewPort}}"
          lazy-Type="{{slider.lazyType}}"
          dotted-Overlay="{{slider.dottedOverlay}}"
          shadow="{{slider.shadow}}"
          spinner="{{slider.spinner}}"
          hide-All-Caption-At-Lilmit="{{slider.hideAllCaptionAtLilmit}}"
          hide-Caption-At-Limit="{{slider.hideCaptionAtLimit}}"
          hide-Slider-At-Limit="{{slider.hideSliderAtLimit}}"
          debug-Mode="{{slider.debugMode}}"
          extensions="{{slider.extensions}}"
          extensionssuffix="{{slider.extensions_suffix}}"
          fallbacks="{{slider.fallbacks}}"
          parallax="{{slider.parallax}}"
          rev-Carousel="{{slider.carousel}}"
          navigation="{{slider.navigation}}"
          js-File-Location="{{slider.jsFileLocation}}"
          visibility-Levels="{{slider.visibilityLevels}}"
          hide-Thumbs-On-Mobile="{{slider.hideThumbsOnMobile}}"
          slides="slider.slides"
          slider-Template-Url="common/templates/directiveSlider/frontpage.slider.tpl.html"
        >
        </div>
      </div>
    </section>
</div>
```

index.js
```html
(function() {
  var Config, HomeCtrl;

  Config = (function() {
    function Config($stateProvider, $urlRouterProvider, gsapifyRouterProvider) {
      $stateProvider.state("frontPage.home", {
        url: "/",
        views: {
          content: {
            controller: "HomeCtrl",
            controllerAs: "homeVm",
            templateProvider: function($templateCache) {
              return $templateCache.get("app/public/home/index.tpl.html");
            }
          }
        },
        ncyBreadcrumb: {
          label: "Home"
        },
        data: {
          "gsapifyRouter.content": {
            enter: {
              "in": {
                transition: "slideLeft"
              },
              out: {
                transition: "slideRight"
              }
            }
          }
        }
      });
    }

    return Config;

  })();

  HomeCtrl = (function() {
    function HomeCtrl($scope, titleService, $log, $mdDialog, $document) {
      var action, vm;
      vm = this;
      titleService.setTitle("Home");
      $scope.$on("gsapifyRouter:enterSuccess", function() {
        return $log.log("gsapifyRouter:enterSuccess", "home");
      });
      action = function(event) {
        return $mdDialog.show($mdDialog.alert().title("Secondary Action").content("Secondary actions can be used for one click actions").ariaLabel("Secondary click demo").ok("Neat!").targetEvent(event));
      };
      vm.serviceCards = [
        {
          link: "frontPage.services.spc",
          imagePath: "core/templates/default/images/hand.jpg",
          imageAlt: "Consulting Hand",
          title: "SharePoint Consulting",
          mainContent: "JCMar specializes in customizations, integrations and implementations. New to SharePoint? Extending your existing environment? No matter where you are on the journey, we\"ll find the right solution for you.",
          action: action,
          enabled: true
        }, {
          link: "frontPage.services.csc",
          imagePath: "core/templates/default/images/prog1.jpg",
          imageAlt: "Programming",
          title: "Websites & Solutions",
          mainContent: "Using our expertise in technology, both latest and legacy, we can provide a solution to your business situations that meets both your goals and budget.",
          action: action,
          enabled: true
        }, {
          link: "frontPage.services.iic",
          imagePath: "core/templates/default/images/gears.jpg",
          imageAlt: "Gears",
          title: "Infrastructure IT Consulting",
          mainContent: "JCMar specializes in SharePoint Customizations, integrations and implementations.",
          action: action,
          enabled: false
        }, {
          link: "frontPage.services.mad",
          imagePath: "core/templates/default/images/touch.jpg",
          imageAlt: "Mobile",
          title: "Mobile Application Development",
          mainContent: "JCMar specializes in SharePoint customizations, integrations and implementations.",
          action: action,
          enabled: false
        }, {
          link: "frontPage.services.cloud",
          imagePath: "core/templates/default/images/cloud.png",
          imageAlt: "Cloud",
          title: "Cloud",
          mainContent: "JCMar specializes in SharePoint Customizations, integrations and implementations.",
          action: action,
          enabled: true
        }
      ];
      $scope.slider = {
        sliderType: "standard",
        sliderLayout: "auto",
        responsiveLevels: [1920, 1024, 778, 480],
        gridwidth: [1930, 1240, 778, 480],
        gridheight: [768, 768, 960, 720],
        autoHeight: "off",
        minHeight: "",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        delay: 9000,
        disableProgressBar: "on",
        startDelay: "",
        stopAfterLoops: "",
        stopAtSlide: "",
        viewPort: {},
        lazyType: "none",
        dottedOverlay: "none",
        shadow: 0,
        spinner: "off",
        hideAllCaptionAtLilmit: 0,
        hideCaptionAtLimit: 0,
        hideSliderAtLimit: 0,
        debugMode: false,
        extensions: "",
        extensions_suffix: "",
        fallbacks: {
          simplifyAll: "off",
          disableFocusListener: false
        },
        parallax: {
          type: "scroll",
          origo: "enterpoint",
          speed: 400,
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
        },
        carousel: {},
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          onHoverStop: "on",
          touch: {
            touchenabled: "on",
            swipe_treshold: 75,
            swipe_min_touches: 1,
            drag_block_vertical: false,
            swipe_direction: "horizontal"
          },
          tabs: {
            style: "zeus",
            enable: true,
            width: 150,
            height: 30,
            min_width: 100,
            wrapper_padding: 0,
            wrapper_color: "transparent",
            wrapper_opacity: "0",
            tmp: "<span class="tp-tab-title">{{title}}</span>",
            visibleAmount: 3,
            hide_onmobile: true,
            hide_under: 480,
            hide_onleave: false,
            hide_delay: 200,
            direction: "horizontal",
            span: true,
            position: "inner",
            space: 1,
            h_align: "left",
            v_align: "top",
            h_offset: 30,
            v_offset: 30
          }
        },
        jsFileLocation: "",
        visibilityLevels: [1240, 1024, 778, 480],
        hideThumbsOnMobile: "off"
      };
    }

    return HomeCtrl;

  })();

  angular.module("JCMarSite").config(["$stateProvider", "$urlRouterProvider", "gsapifyRouterProvider", Config]).controller("HomeCtrl", ["$scope", "titleService", "$log", "$mdDialog", "$document", HomeCtrl]);

}).call(this);
```

## Attributes

sliderType:
The type of slider to use (Standard, Hero, Carousel)

sliderLayout:
Responsiveness of slider (Auto, fullwidth, fullscreen)

responsiveLevels:
Grid Sizes (Aspect Ratios)

gridwidth:
The content container size within a slider for width

gridheight:
The content container size within a slider for height

autoHeight:
allow the Slider to always keep the Aspect Ratio which is set via the gridwidth and gridheight parameters (on, off)

minHeight:
Slider Minimum Height

fullScreenOffsetContainer:
Slider’s height will be reduced with the height of the containers

fullScreenOffset:
Fullscreen Slider’s height will be reduced/increased with the the value defined 

delay:
Describes the default (global) length of the slides in ms

disableProgressBar:
Display progressbar (on, off)

startDelay:
Wait with starting the first animation after the slider has been loaded. 

stopAfterLoops:
Auto Play stop after the Slider has been looped  “x” time

stopAtSlide:
Auto Play stop at Slide Nr. “x”

viewPort:
Define how many percent of the Slider must be visible before it starts

lazyType:
The art to load the images within the slides and navigation containers

dottedOverlay:
A Default overlay on slides

shadow:
Shadow type which will be drawn via jQuery and css on demand

spinner:
Loader (“spinner”) Type

hideAllCaptionAtLilmit:
Defines a Global parameter to hide all layers if the browser width is smaller than this

hideCaptionAtLimit:
Defines a Global parameter to hide certain layers if the browser width is smaller than this

hideSliderAtLimit:
Defines a Global parameter to hide certain layers if the browser width is smaller than this

debugMode:
Turns on the Frontend Debug mode,

extensions:
Extensions location

extensions_suffix:
Extensions suffix

fallbacks:
Fallbacks for slider on different devices / browsers

parallax:
Defines the configuration for parallax

revCarousel:
Defines the settings for carousel

navigation:
Defines the settings for navigation

jsFileLocation:
Location to js file

visibilityLevels:
Visibility Levels

hideThumbsOnMobile:
Hide thumbnails on mobile devices

slides:
Slides object

## Resources

* [In-Depth Guide](https://github.com/Karnith/angular-revolution/wiki)
* [FAQ](https://github.com/Karnith/angular-revolution/wiki/Frequently-Asked-Questions)
 
## Reporting issues and Contributing

Please read our [Contributor guidelines](CONTRIBUTING.md) before reporting an issue or creating a pull request.

