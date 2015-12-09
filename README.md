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

## Features
- Easy to use directive
- Ability to have multiple slider instances on a page, each with their own configuration
- Template configurable and easily overridden
- Uses angular framework to present sliders which enables the plugin to be run when it's needed and destroyed when it isn't to save memory

## To Do
- Create ability to pass slides object to the api so slides can be stored in a database.
- Fully template the slides template using angular methodologies so the slides are dynamic and separate from the default template

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

The $scope is used to push slider configurations to the element & attributes which in turn feed into the slider jQuery plugin. Eventually I will add the ability to pass a slides object to the api which will allow slides to come from a database.

## Example

index.html
```html
<!-- main container -->
<div class="container-fluid" data-ng-style="{'max-width':'1920px'}">
    <!-- slider parent container -->
    <section class="content-section" data-ng-style="{'max-width':'1920px', 'margin':'0 auto'}">
      <!-- slider container -->
      <div class="rev_slider_wrapper jumbotron" style="background-color:#ddd;margin:0px auto;padding:0px;margin-top:0px;margin-bottom:0px;">
        <!-- angular-revolution as attribute in div -->
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
// angular module
angular.module("app", [])
// module controller
.controller("HomeCtrl", ["$scope", function ($scope) {
  // slider settings object set to scope.
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
}]);
```

Default template
```html
<ul data-ng-style="{'max-width':'1920px'}">
  <!-- SLIDE  -->
  <li
  data-index="rs-1255"
  data-transition="slideoverhorizontal"
  data-slotamount="7"
  data-easein="default"
  data-easeout="default"
  data-masterspeed="1500"
  data-thumb="core/templates/default/images/sliders/newspaper_bg1-320x200.jpg"
  data-rotate="0"
  data-fstransition="fade"
  data-fsmasterspeed="1000"
  data-fsslotamount="7"
  data-saveperformance="off"
  data-title="SharePoint"
  data-description="">

  <!-- MAIN IMAGE -->
  <img
  src="core/templates/default/images/sliders/newspaper_bg1.jpg"
  alt=""
  width="1920"
  height="1280"
  data-bgposition="center bottom"
  data-bgfit="cover"
  data-bgrepeat="no-repeat"
  data-bgparallax="10"
  class="rev-slidebg"
  data-no-retina>

  <!-- LAYER NR. 1 -->
  <a class="tp-caption News-Title tp-resizeme rs-parallaxlevel-0"
  data-ui-sref="frontPage.services.spc"
  id="slide-1255-layer-1"
  data-x="['left','left','left','left']"
  data-hoffset="['80','80','40','40']"
  data-y="['top','top','top','top']"
  data-voffset="['450','450','250','150']"
  data-width="364"
  data-height="133"
  data-whitespace="normal"
  data-transform_idle="o:1;"
  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
  data-transform_out="y:[100%];s:1000;s:1000;"
  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
  data-start="500"
  data-splitin="none"
  data-splitout="none"
  data-responsive_offset="on"
  data-ng-style="{
  'z-index':'5',
  'min-width':'364px',
  'min-height':'133px',
  'white-space':'normal',
  'max-width':'364px',
  'max-height':'133px',
  'font-size':'70px',
  'line-height':'60px',
  'font-weight':'400',
  'color':'rgba(255, 255, 255, 1.00)',
  'font-family':'Roboto Slab',
  'padding':'0 0 0 0',
  'border-radius':'0 0 0 0'
  }">
  SharePoint
  Consulting
  </a>

  <!-- LAYER NR. 2 -->
  <div class="tp-caption tp-resizeme rs-parallaxlevel-0"
  id="slide-1255-layer-2"
  data-x="['left','left','left','left']"
  data-hoffset="['80','80','40','40']"
  data-y="['top','top','top','top']"
  data-voffset="['587','587','382','282']"
  data-width="none"
  data-height="none"
  data-whitespace="nowrap"
  data-transform_idle="o:1;"
  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
  data-transform_out="x:[100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
  data-start="500"
  data-responsive_offset="on"
  data-ng-style="{'z-index':'6', 'line-height':'4px', 'padding':'0 0 0 0', 'border-radius':'0 0 0 0'}">
  <img
  src="core/templates/default/images/sliders/bluebar.png"
  alt=""
  width="350"
  height="4"
  data-ww="['350px','350px','350px','350px']"
  data-hh="['4px','4px','4px','4px']"
  data-no-retina>
  </div>

  <!-- LAYER NR. 3 -->
  <a class="tp-caption News-Subtitle tp-resizeme rs-parallaxlevel-0"
    data-ui-sref="frontPage.services.spc"
    id="slide-1255-layer-3"
    data-x="['left','left','left','left']"
    data-hoffset="['81','81','41','41']"
    data-y="['top','top','top','top']"
    data-voffset="['605','605','401','301']"
    data-width="none"
    data-height="none"
    data-whitespace="nowrap"
    data-transform_idle="o:1;"
    data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeInOut;"
    data-style_hover="c:rgba(255, 255, 255, 0.65);br:0 0 0px 0;cursor:pointer;"
    data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
    data-transform_out="y:[100%];s:1000;s:1000;"
    data-mask_in="x:0px;y:0px;"
    data-mask_out="x:inherit;y:inherit;"
    data-start="500"
    data-splitin="none"
    data-splitout="none"
    data-responsive_offset="on"
    data-ng-style="{
    'z-index':'7',
    'min-width':'auto',
    'min-height':'auto',
    'white-space':'nowrap',
    'max-width':'auto',
    'max-height':'auto',
    'font-size':'15px',
    'line-height':'24px',
    'font-weight':'300',
    'color':'rgba(255, 255, 255, 1.00)',
    'font-family':'Roboto Slab',
    'background-color':'rgba(255, 255, 255, 0)',
    'padding':'0 0 0 0',
    'border-radius':'0 0 0 0'
  }">
  Balance SharePoint & Your Business to reach new heights
  </a>

  <!-- LAYER NR. 4 -->
  <div class="tp-caption - tp-resizeme rs-parallaxlevel-0"
  id="slide-1255-layer-4"
  data-x="['left','left','left','left']"
  data-hoffset="['463','463','443','443']"
  data-y="['top','top','top','top']"
  data-voffset="['607','607','403','303']"
  data-width="none"
  data-height="none"
  data-whitespace="nowrap"
  data-transform_idle="o:1;"
  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
  data-transform_out="x:[100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
  data-start="500"
  data-splitin="none"
  data-splitout="none"
  data-responsive_offset="on"
  data-ng-style="{
  'z-index':'8',
  'min-width':'auto',
  'min-height':'auto',
  'white-space':'nowrap',
  'max-width':'auto',
  'max-height':'auto',
  'font-size':'20px',
  'line-height':'22px',
  'font-weight':'400',
  'color':'rgba(0, 210, 255, 1.00)',
  'padding':'0 0 0 0',
  'border-radius':'0 0 0 0'
  }">
  <i class="fa fa-caret-right"></i>
  </div>
  </li>

  <!-- SLIDE  -->
  <li
  data-index="rs-1103"
  data-transition="slideoverhorizontal"
  data-slotamount="7"
  data-easein="default"
  data-easeout="default"
  data-masterspeed="1500"
  data-thumb="core/templates/default/images/sliders/newspaper_bg3-320x200.jpg"
  data-rotate="0"
  data-saveperformance="off"
  data-title="Web Solutions"
  data-description="">

  <!-- MAIN IMAGE -->
  <img
  src="core/templates/default/images/sliders/newspaper_bg2.jpg"
  alt=""
  width="1920"
  height="1180"
  data-bgposition="center bottom"
  data-bgfit="cover"
  data-bgrepeat="no-repeat"
  data-bgparallax="10"
  class="rev-slidebg"
  data-no-retina>

  <!-- LAYER NR. 1 -->
  <a class="tp-caption News-Title tp-resizeme rs-parallaxlevel-0"
  data-ui-sref="frontPage.services.csc"
  id="slide-1103-layer-1"
  data-x="['left','left','left','left']"
  data-hoffset="['80','80','40','40']"
  data-y="['top','top','top','top']"
  data-voffset="['450','450','250','150']"
  data-width="364"
  data-height="133"
  data-whitespace="normal"
  data-transform_idle="o:1;"
  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
  data-transform_out="y:[100%];s:1000;s:1000;"
  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
  data-start="500"
  data-splitin="none"
  data-splitout="none"
  data-responsive_offset="on"
  data-ng-style="{
  'z-index':'5',
  'min-width':'364px',
  'min-height':'133px',
  'white-space':'normal',
  'max-width':'364px',
  'max-height':'133px',
  'font-size':'70px',
  'line-height':'60px',
  'font-weight':'400',
  'color':'rgba(255, 255, 255, 1.00)',
  'font-family':'Roboto Slab',
  'padding':'0 0 0 0',
  'border-radius':'0 0 0 0'
  }">
  Websites &
  Solutions
  </a>

  <!-- LAYER NR. 2 -->
  <div class="tp-caption  tp-resizeme rs-parallaxlevel-0"
  id="slide-1103-layer-2"
  data-x="['left','left','left','left']" data-hoffset="['80','80','40','40']"
  data-y="['top','top','top','top']" data-voffset="['587','587','382','282']"
  data-width="none"
  data-height="none"
  data-whitespace="nowrap"
  data-transform_idle="o:1;"
  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
  data-transform_out="x:[100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
  data-start="500"
  data-responsive_offset="on"
  data-ng-style="{'z-index':'6', 'line-height':'4px', 'padding':'0 0 0 0', 'border-radius':'0 0 0 0'}">
  <img src="core/templates/default/images/sliders/bluebar.png" alt="" width="350" height="4" data-ww="" data-hh="" data-no-retina>
  </div>

  <!-- LAYER NR. 3 -->
  <a class="tp-caption News-Subtitle tp-resizeme rs-parallaxlevel-0"
  data-ui-sref="frontPage.services.csc"
  id="slide-1103-layer-3"
  data-x="['left','left','left','left']"
  data-hoffset="['81','81','41','41']"
  data-y="['top','top','top','top']"
  data-voffset="['605','605','401','301']"
  data-width="none"
  data-height="none"
  data-whitespace="nowrap"
  data-transform_idle="o:1;"
  data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeInOut;"
  data-style_hover="c:rgba(255, 255, 255, 0.65);br:0 0 0px 0;cursor:pointer;"
  data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
  data-transform_out="y:[100%];s:1000;s:1000;"
  data-mask_in="x:0px;y:0px;"
  data-mask_out="x:inherit;y:inherit;"
  data-start="500"
  data-splitin="none"
  data-splitout="none"
  data-responsive_offset="on"
  data-ng-style="{
  'z-index':'7',
  'min-width':'auto',
  'min-height':'auto',
  'white-space':'nowrap',
  'max-width':'auto',
  'max-height':'auto',
  'font-size':'15px',
  'line-height':'24px',
  'font-weight':'300',
  'color':'rgba(255, 255, 255, 1.00)',
  'font-family':'Roboto Slab',
  'background-color':'rgba(255, 255, 255, 0)',
  'padding':'0 0 0 0',
  'border-radius':'0 0 0 0'
  }">
  Provide unforgettable experiences to your users
  </a>

  <!-- LAYER NR. 4 -->
  <div class="tp-caption - tp-resizeme rs-parallaxlevel-0"
  id="slide-1103-layer-4"
  data-x="['left','left','left','left']" data-hoffset="['423','423','383','383']"
  data-y="['top','top','top','top']" data-voffset="['607','607','403','303']"
  data-width="none"
  data-height="none"
  data-whitespace="nowrap"
  data-transform_idle="o:1;"
  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
  data-transform_out="x:[100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
  data-start="500"
  data-splitin="none"
  data-splitout="none"
  data-responsive_offset="on"
  data-ng-style="{
  'z-index':'8',
  'min-width':'auto',
  'min-height':'auto',
  'white-space':'nowrap',
  'max-width':'auto',
  'max-height':'auto',
  'font-size':'20px',
  'line-height':'22px',
  'font-weight':'400',
  'color':'rgba(0, 210, 255, 1.00)',
  'padding':'0 0 0 0',
  'border-radius':'0 0 0 0'
  }">
  <i class="fa fa-caret-right"></i>
  </div>
  </li>
</ul>
<div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>
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
Slides object, still under development

## Resources

* [In-Depth Guide](https://github.com/Karnith/angular-revolution/wiki)
* [FAQ](https://github.com/Karnith/angular-revolution/wiki/Frequently-Asked-Questions)
 
## Reporting issues and Contributing

Please read our [Contributor guidelines](CONTRIBUTING.md) before reporting an issue or creating a pull request.

