/*
 * angular-revolution
 * https://github.com/Karnith/angular-revolution

 * Version: 1.0.0 - 2015-12-07
 * License: MIT
 */
angular.module("rev.slider", ["rev.slider.tpls"])
    .directive('revSlider', ['$timeout', function ($timeout) {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {
                sliderType: '@',
                sliderLayout: '@',
                responsiveLevels: '@',
                gridwidth: '@',
                gridheight: '@',
                autoHeight: '@',
                minHeight: '@',
                fullScreenOffsetContainer: '@',
                fullScreenOffset: '@',
                delay: '@',
                disableProgressBar: '@',
                startDelay: '@',
                stopAfterLoops: '@',
                stopAtSlide: '@',
                viewPort: '@',
                lazyType: '@',
                dottedOverlay: '@',
                shadow: '@',
                spinner: '@',
                hideAllCaptionAtLilmit: '@',
                hideCaptionAtLimit: '@',
                hideSliderAtLimit: '@',
                debugMode: '@',
                extensions: '@',
                extensions_suffix: '@extensionssuffix',
                fallbacks: '@',
                parallax: '@',
                revCarousel: '@',
                navigation: '@',
                jsFileLocation: '@',
                visibilityLevels: '@',
                hideThumbsOnMobile: '@',
                slides: '='
            },
            templateUrl: function(element, attrs) {
                return attrs.sliderTemplateUrl || 'template/slider/slider.tpl.html';
            },
            link: function(scope, element, attrs) {
                var hasValuesDefined, trueOrFalse;
                scope.templateUrl = attrs.sliderTemplateUrl;
                trueOrFalse = function(bool) {
                    if (bool === 'true') {
                        return true;
                    } else {
                        return false;
                    }
                };
                hasValuesDefined = function(value) {
                    if (angular.isDefined(value)) {
                        return JSON.parse(value);
                    } else {
                        return {};
                    }
                };
                return $timeout(function() {
                    var revapi;
                    revapi = element.show().revolution({
                        sliderType: scope.sliderType,
                        sliderLayout: scope.sliderLayout,
                        responsiveLevels: hasValuesDefined(scope.responsiveLevels),
                        gridwidth: hasValuesDefined(scope.gridwidth),
                        gridheight: hasValuesDefined(scope.gridheight),
                        autoHeight: scope.autoHeight,
                        minHeight: scope.minHeight,
                        fullScreenOffsetContainer: scope.fullScreenOffsetContainer,
                        fullScreenOffset: scope.fullScreenOffset,
                        delay: scope.delay,
                        disableProgressBar: scope.disableProgressBar,
                        startDelay: scope.startDelay,
                        stopAfterLoops: scope.stopAfterLoops,
                        stopAtSlide: scope.stopAtSlide,
                        viewPort: hasValuesDefined(scope.viewPort),
                        lazyType: scope.lazyType,
                        dottedOverlay: scope.dottedOverlay,
                        shadow: scope.shadow,
                        spinner: scope.spinner,
                        hideAllCaptionAtLilmit: scope.hideAllCaptionAtLilmit,
                        hideCaptionAtLimit: scope.hideCaptionAtLimit,
                        hideSliderAtLimit: scope.hideSliderAtLimit,
                        debugMode: trueOrFalse(scope.debugMode),
                        extensions: scope.extensions,
                        extensions_suffix: scope.extensions_suffix,
                        fallbacks: hasValuesDefined(scope.fallbacks),
                        parallax: hasValuesDefined(scope.parallax),
                        carousel: hasValuesDefined(scope.carousel),
                        navigation: hasValuesDefined(scope.navigation),
                        jsFileLocation: scope.jsFileLocation,
                        visibilityLevels: hasValuesDefined(scope.visibilityLevels),
                        hideThumbsOnMobile: scope.hideThumbsOnMobile
                    });
                    return scope.$on('$destroy', function() {
                        return revapi.revkill();
                    });
                });
            }
        };
    }]);

angular.module("rev.slider.tpls", ["template/slider/slider.tpl.html"]);
angular.module("template/slider/slider.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put('template/slider/slider.tpl.html',
        '<ul data-ng-style="{\'max-width\':\'1920px\'}">\n' +
        '  <!-- SLIDE  -->\n' +
        '  <li\n' +
        '  data-index="rs-1255"\n' +
        '  data-transition="slideoverhorizontal"\n' +
        '  data-slotamount="7"\n' +
        '  data-easein="default"\n' +
        '  data-easeout="default"\n' +
        '  data-masterspeed="1500"\n' +
        '  data-thumb="core/templates/default/images/sliders/newspaper_bg1-320x200.jpg"\n' +
        '  data-rotate="0"\n' +
        '  data-fstransition="fade"\n' +
        '  data-fsmasterspeed="1000"\n' +
        '  data-fsslotamount="7"\n' +
        '  data-saveperformance="off"\n' +
        '  data-title="Tab 1"\n' +
        '  data-description="">\n' +
        '\n' +
        '  <!-- MAIN IMAGE -->\n' +
        '  <img\n' +
        '  src="core/templates/default/images/sliders/newspaper_bg1.jpg"\n' +
        '  alt=""\n' +
        '  width="1920"\n' +
        '  height="1280"\n' +
        '  data-bgposition="center bottom"\n' +
        '  data-bgfit="cover"\n' +
        '  data-bgrepeat="no-repeat"\n' +
        '  data-bgparallax="10"\n' +
        '  class="rev-slidebg"\n' +
        '  data-no-retina>\n' +
        '\n' +
        '  <!-- LAYER NR. 1 -->\n' +
        '  <a class="tp-caption News-Title tp-resizeme rs-parallaxlevel-0"\n' +
        '  data-ui-sref="frontPage.services.spc"\n' +
        '  id="slide-1255-layer-1"\n' +
        '  data-x="[\'left\',\'left\',\'left\',\'left\']"\n' +
        '  data-hoffset="[\'80\',\'80\',\'40\',\'40\']"\n' +
        '  data-y="[\'top\',\'top\',\'top\',\'top\']"\n' +
        '  data-voffset="[\'450\',\'450\',\'250\',\'150\']"\n' +
        '  data-width="364"\n' +
        '  data-height="133"\n' +
        '  data-whitespace="normal"\n' +
        '  data-transform_idle="o:1;"\n' +
        '  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"\n' +
        '  data-transform_out="y:[100%];s:1000;s:1000;"\n' +
        '  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"\n' +
        '  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"\n' +
        '  data-start="500"\n' +
        '  data-splitin="none"\n' +
        '  data-splitout="none"\n' +
        '  data-responsive_offset="on"\n' +
        '  data-ng-style="{\n' +
        '  \'z-index\':\'5\',\n' +
        '  \'min-width\':\'364px\',\n' +
        '  \'min-height\':\'133px\',\n' +
        '  \'white-space\':\'normal\',\n' +
        '  \'max-width\':\'364px\',\n' +
        '  \'max-height\':\'133px\',\n' +
        '  \'font-size\':\'70px\',\n' +
        '  \'line-height\':\'60px\',\n' +
        '  \'font-weight\':\'400\',\n' +
        '  \'color\':\'rgba(255, 255, 255, 1.00)\',\n' +
        '  \'font-family\':\'Roboto Slab\',\n' +
        '  \'padding\':\'0 0 0 0\',\n' +
        '  \'border-radius\':\'0 0 0 0\'\n' +
        '  }">\n' +
        '  Slide 1\n' +
        '  Title\n' +
        '  </a>\n' +
        '\n' +
        '  <!-- LAYER NR. 2 -->\n' +
        '  <div class="tp-caption tp-resizeme rs-parallaxlevel-0"\n' +
        '  id="slide-1255-layer-2"\n' +
        '  data-x="[\'left\',\'left\',\'left\',\'left\']"\n' +
        '  data-hoffset="[\'80\',\'80\',\'40\',\'40\']"\n' +
        '  data-y="[\'top\',\'top\',\'top\',\'top\']"\n' +
        '  data-voffset="[\'587\',\'587\',\'382\',\'282\']"\n' +
        '  data-width="none"\n' +
        '  data-height="none"\n' +
        '  data-whitespace="nowrap"\n' +
        '  data-transform_idle="o:1;"\n' +
        '  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"\n' +
        '  data-transform_out="x:[100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"\n' +
        '  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"\n' +
        '  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"\n' +
        '  data-start="500"\n' +
        '  data-responsive_offset="on"\n' +
        '  data-ng-style="{\'z-index\':\'6\', \'line-height\':\'4px\', \'padding\':\'0 0 0 0\', \'border-radius\':\'0 0 0 0\'}">\n' +
        '  <img\n' +
        '  src="core/templates/default/images/sliders/bluebar.png"\n' +
        '  alt=""\n' +
        '  width="350"\n' +
        '  height="4"\n' +
        '  data-ww="[\'350px\',\'350px\',\'350px\',\'350px\']"\n' +
        '  data-hh="[\'4px\',\'4px\',\'4px\',\'4px\']"\n' +
        '  data-no-retina>\n' +
        '  </div>\n' +
        '\n' +
        '  <!-- LAYER NR. 3 -->\n' +
        '  <a class="tp-caption News-Subtitle tp-resizeme rs-parallaxlevel-0"\n' +
        '    data-ui-sref="frontPage.services.spc"\n' +
        '    id="slide-1255-layer-3"\n' +
        '    data-x="[\'left\',\'left\',\'left\',\'left\']"\n' +
        '    data-hoffset="[\'81\',\'81\',\'41\',\'41\']"\n' +
        '    data-y="[\'top\',\'top\',\'top\',\'top\']"\n' +
        '    data-voffset="[\'605\',\'605\',\'401\',\'301\']"\n' +
        '    data-width="none"\n' +
        '    data-height="none"\n' +
        '    data-whitespace="nowrap"\n' +
        '    data-transform_idle="o:1;"\n' +
        '    data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeInOut;"\n' +
        '    data-style_hover="c:rgba(255, 255, 255, 0.65);br:0 0 0px 0;cursor:pointer;"\n' +
        '    data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"\n' +
        '    data-transform_out="y:[100%];s:1000;s:1000;"\n' +
        '    data-mask_in="x:0px;y:0px;"\n' +
        '    data-mask_out="x:inherit;y:inherit;"\n' +
        '    data-start="500"\n' +
        '    data-splitin="none"\n' +
        '    data-splitout="none"\n' +
        '    data-responsive_offset="on"\n' +
        '    data-ng-style="{\n' +
        '    \'z-index\':\'7\',\n' +
        '    \'min-width\':\'auto\',\n' +
        '    \'min-height\':\'auto\',\n' +
        '    \'white-space\':\'nowrap\',\n' +
        '    \'max-width\':\'auto\',\n' +
        '    \'max-height\':\'auto\',\n' +
        '    \'font-size\':\'15px\',\n' +
        '    \'line-height\':\'24px\',\n' +
        '    \'font-weight\':\'300\',\n' +
        '    \'color\':\'rgba(255, 255, 255, 1.00)\',\n' +
        '    \'font-family\':\'Roboto Slab\',\n' +
        '    \'background-color\':\'rgba(255, 255, 255, 0)\',\n' +
        '    \'padding\':\'0 0 0 0\',\n' +
        '    \'border-radius\':\'0 0 0 0\'\n' +
        '  }">\n' +
        '  Slide 1 description / text\n' +
        '  </a>\n' +
        '\n' +
        '  <!-- LAYER NR. 4 -->\n' +
        '  <div class="tp-caption - tp-resizeme rs-parallaxlevel-0"\n' +
        '  id="slide-1255-layer-4"\n' +
        '  data-x="[\'left\',\'left\',\'left\',\'left\']"\n' +
        '  data-hoffset="[\'463\',\'463\',\'443\',\'443\']"\n' +
        '  data-y="[\'top\',\'top\',\'top\',\'top\']"\n' +
        '  data-voffset="[\'607\',\'607\',\'403\',\'303\']"\n' +
        '  data-width="none"\n' +
        '  data-height="none"\n' +
        '  data-whitespace="nowrap"\n' +
        '  data-transform_idle="o:1;"\n' +
        '  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"\n' +
        '  data-transform_out="x:[100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"\n' +
        '  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"\n' +
        '  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"\n' +
        '  data-start="500"\n' +
        '  data-splitin="none"\n' +
        '  data-splitout="none"\n' +
        '  data-responsive_offset="on"\n' +
        '  data-ng-style="{\n' +
        '  \'z-index\':\'8\',\n' +
        '  \'min-width\':\'auto\',\n' +
        '  \'min-height\':\'auto\',\n' +
        '  \'white-space\':\'nowrap\',\n' +
        '  \'max-width\':\'auto\',\n' +
        '  \'max-height\':\'auto\',\n' +
        '  \'font-size\':\'20px\',\n' +
        '  \'line-height\':\'22px\',\n' +
        '  \'font-weight\':\'400\',\n' +
        '  \'color\':\'rgba(0, 210, 255, 1.00)\',\n' +
        '  \'padding\':\'0 0 0 0\',\n' +
        '  \'border-radius\':\'0 0 0 0\'\n' +
        '  }">\n' +
        '  <i class="fa fa-caret-right"></i>\n' +
        '  </div>\n' +
        '  </li>\n' +
        '\n' +
        '  <!-- SLIDE  -->\n' +
        '  <li\n' +
        '  data-index="rs-1103"\n' +
        '  data-transition="slideoverhorizontal"\n' +
        '  data-slotamount="7"\n' +
        '  data-easein="default"\n' +
        '  data-easeout="default"\n' +
        '  data-masterspeed="1500"\n' +
        '  data-thumb="core/templates/default/images/sliders/newspaper_bg3-320x200.jpg"\n' +
        '  data-rotate="0"\n' +
        '  data-saveperformance="off"\n' +
        '  data-title="Tab 2"\n' +
        '  data-description="">\n' +
        '\n' +
        '  <!-- MAIN IMAGE -->\n' +
        '  <img\n' +
        '  src="core/templates/default/images/sliders/newspaper_bg2.jpg"\n' +
        '  alt=""\n' +
        '  width="1920"\n' +
        '  height="1180"\n' +
        '  data-bgposition="center bottom"\n' +
        '  data-bgfit="cover"\n' +
        '  data-bgrepeat="no-repeat"\n' +
        '  data-bgparallax="10"\n' +
        '  class="rev-slidebg"\n' +
        '  data-no-retina>\n' +
        '\n' +
        '  <!-- LAYER NR. 1 -->\n' +
        '  <a class="tp-caption News-Title tp-resizeme rs-parallaxlevel-0"\n' +
        '  data-ui-sref="frontPage.services.csc"\n' +
        '  id="slide-1103-layer-1"\n' +
        '  data-x="[\'left\',\'left\',\'left\',\'left\']"\n' +
        '  data-hoffset="[\'80\',\'80\',\'40\',\'40\']"\n' +
        '  data-y="[\'top\',\'top\',\'top\',\'top\']"\n' +
        '  data-voffset="[\'450\',\'450\',\'250\',\'150\']"\n' +
        '  data-width="364"\n' +
        '  data-height="133"\n' +
        '  data-whitespace="normal"\n' +
        '  data-transform_idle="o:1;"\n' +
        '  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"\n' +
        '  data-transform_out="y:[100%];s:1000;s:1000;"\n' +
        '  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"\n' +
        '  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"\n' +
        '  data-start="500"\n' +
        '  data-splitin="none"\n' +
        '  data-splitout="none"\n' +
        '  data-responsive_offset="on"\n' +
        '  data-ng-style="{\n' +
        '  \'z-index\':\'5\',\n' +
        '  \'min-width\':\'364px\',\n' +
        '  \'min-height\':\'133px\',\n' +
        '  \'white-space\':\'normal\',\n' +
        '  \'max-width\':\'364px\',\n' +
        '  \'max-height\':\'133px\',\n' +
        '  \'font-size\':\'70px\',\n' +
        '  \'line-height\':\'60px\',\n' +
        '  \'font-weight\':\'400\',\n' +
        '  \'color\':\'rgba(255, 255, 255, 1.00)\',\n' +
        '  \'font-family\':\'Roboto Slab\',\n' +
        '  \'padding\':\'0 0 0 0\',\n' +
        '  \'border-radius\':\'0 0 0 0\'\n' +
        '  }">\n' +
        '  Slide 2\n' +
        '  Title\n' +
        '  </a>\n' +
        '\n' +
        '  <!-- LAYER NR. 2 -->\n' +
        '  <div class="tp-caption  tp-resizeme rs-parallaxlevel-0"\n' +
        '  id="slide-1103-layer-2"\n' +
        '  data-x="[\'left\',\'left\',\'left\',\'left\']" data-hoffset="[\'80\',\'80\',\'40\',\'40\']"\n' +
        '  data-y="[\'top\',\'top\',\'top\',\'top\']" data-voffset="[\'587\',\'587\',\'382\',\'282\']"\n' +
        '  data-width="none"\n' +
        '  data-height="none"\n' +
        '  data-whitespace="nowrap"\n' +
        '  data-transform_idle="o:1;"\n' +
        '  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"\n' +
        '  data-transform_out="x:[100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"\n' +
        '  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"\n' +
        '  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"\n' +
        '  data-start="500"\n' +
        '  data-responsive_offset="on"\n' +
        '  data-ng-style="{\'z-index\':\'6\', \'line-height\':\'4px\', \'padding\':\'0 0 0 0\', \'border-radius\':\'0 0 0 0\'}">\n' +
        '  <img src="core/templates/default/images/sliders/bluebar.png" alt="" width="350" height="4" data-ww="" data-hh="" data-no-retina>\n' +
        '  </div>\n' +
        '\n' +
        '  <!-- LAYER NR. 3 -->\n' +
        '  <a class="tp-caption News-Subtitle tp-resizeme rs-parallaxlevel-0"\n' +
        '  data-ui-sref="frontPage.services.csc"\n' +
        '  id="slide-1103-layer-3"\n' +
        '  data-x="[\'left\',\'left\',\'left\',\'left\']"\n' +
        '  data-hoffset="[\'81\',\'81\',\'41\',\'41\']"\n' +
        '  data-y="[\'top\',\'top\',\'top\',\'top\']"\n' +
        '  data-voffset="[\'605\',\'605\',\'401\',\'301\']"\n' +
        '  data-width="none"\n' +
        '  data-height="none"\n' +
        '  data-whitespace="nowrap"\n' +
        '  data-transform_idle="o:1;"\n' +
        '  data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeInOut;"\n' +
        '  data-style_hover="c:rgba(255, 255, 255, 0.65);br:0 0 0px 0;cursor:pointer;"\n' +
        '  data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"\n' +
        '  data-transform_out="y:[100%];s:1000;s:1000;"\n' +
        '  data-mask_in="x:0px;y:0px;"\n' +
        '  data-mask_out="x:inherit;y:inherit;"\n' +
        '  data-start="500"\n' +
        '  data-splitin="none"\n' +
        '  data-splitout="none"\n' +
        '  data-responsive_offset="on"\n' +
        '  data-ng-style="{\n' +
        '  \'z-index\':\'7\',\n' +
        '  \'min-width\':\'auto\',\n' +
        '  \'min-height\':\'auto\',\n' +
        '  \'white-space\':\'nowrap\',\n' +
        '  \'max-width\':\'auto\',\n' +
        '  \'max-height\':\'auto\',\n' +
        '  \'font-size\':\'15px\',\n' +
        '  \'line-height\':\'24px\',\n' +
        '  \'font-weight\':\'300\',\n' +
        '  \'color\':\'rgba(255, 255, 255, 1.00)\',\n' +
        '  \'font-family\':\'Roboto Slab\',\n' +
        '  \'background-color\':\'rgba(255, 255, 255, 0)\',\n' +
        '  \'padding\':\'0 0 0 0\',\n' +
        '  \'border-radius\':\'0 0 0 0\'\n' +
        '  }">\n' +
        '  Slide 2 description / text\n' +
        '  </a>\n' +
        '\n' +
        '  <!-- LAYER NR. 4 -->\n' +
        '  <div class="tp-caption - tp-resizeme rs-parallaxlevel-0"\n' +
        '  id="slide-1103-layer-4"\n' +
        '  data-x="[\'left\',\'left\',\'left\',\'left\']" data-hoffset="[\'423\',\'423\',\'383\',\'383\']"\n' +
        '  data-y="[\'top\',\'top\',\'top\',\'top\']" data-voffset="[\'607\',\'607\',\'403\',\'303\']"\n' +
        '  data-width="none"\n' +
        '  data-height="none"\n' +
        '  data-whitespace="nowrap"\n' +
        '  data-transform_idle="o:1;"\n' +
        '  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"\n' +
        '  data-transform_out="x:[100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"\n' +
        '  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"\n' +
        '  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"\n' +
        '  data-start="500"\n' +
        '  data-splitin="none"\n' +
        '  data-splitout="none"\n' +
        '  data-responsive_offset="on"\n' +
        '  data-ng-style="{\n' +
        '  \'z-index\':\'8\',\n' +
        '  \'min-width\':\'auto\',\n' +
        '  \'min-height\':\'auto\',\n' +
        '  \'white-space\':\'nowrap\',\n' +
        '  \'max-width\':\'auto\',\n' +
        '  \'max-height\':\'auto\',\n' +
        '  \'font-size\':\'20px\',\n' +
        '  \'line-height\':\'22px\',\n' +
        '  \'font-weight\':\'400\',\n' +
        '  \'color\':\'rgba(0, 210, 255, 1.00)\',\n' +
        '  \'padding\':\'0 0 0 0\',\n' +
        '  \'border-radius\':\'0 0 0 0\'\n' +
        '  }">\n' +
        '  <i class="fa fa-caret-right"></i>\n' +
        '  </div>\n' +
        '  </li>\n' +
        '</ul>\n' +
        '<!--<ul data-ng-style="{\'max-width\':\'1920px\'}">-->\n' +
        '  <!--&lt;!&ndash; SLIDE  &ndash;&gt;-->\n' +
        '  <!--<li-->\n' +
        '    <!--data-ng-repeat="slide in slides"-->\n' +
        '    <!--data-index="{{slide.dataIndex}}"-->\n' +
        '    <!--data-transition="{{slide.dataTransition}}"-->\n' +
        '    <!--data-slotamount="{{slide.dataSlotamount}}"-->\n' +
        '    <!--data-easein="{{slide.dataEasein}}"-->\n' +
        '    <!--data-easeout="{{slide.dataEaseout}}"-->\n' +
        '    <!--data-masterspeed="{{slide.dataMasterspeed}}"-->\n' +
        '    <!--data-thumb="{{slide.dataThumb}}"-->\n' +
        '    <!--data-rotate="{{slide.dataRotate}}"-->\n' +
        '    <!--data-fstransition="{{slide.dataFstransition}}"-->\n' +
        '    <!--data-fsmasterspeed="{{slide.dataFsmasterspeed}}"-->\n' +
        '    <!--data-fsslotamount="{{slide.dataFsslotamount}}"-->\n' +
        '    <!--data-saveperformance="{{slide.dataSaveperformance}}"-->\n' +
        '    <!--data-title="{{slide.dataTitle}}"-->\n' +
        '    <!--data-description="{{slide.dataDescription}}">-->\n' +
        '\n' +
        '    <!--&lt;!&ndash; MAIN IMAGE &ndash;&gt;-->\n' +
        '    <!--<img-->\n' +
        '      <!--data-ng-if="slide.mainImage.dataNoRetina"-->\n' +
        '      <!--src="{{slide.mainImage.src}}"-->\n' +
        '      <!--alt="{{slide.mainImage.alt}}"-->\n' +
        '      <!--width="{{slide.mainImage.width}}"-->\n' +
        '      <!--height="{{slide.mainImage.height}}"-->\n' +
        '      <!--data-bgposition="{{slide.mainImage.dataBgposition}}"-->\n' +
        '      <!--data-bgfit="{{slide.mainImage.dataBgfit}}"-->\n' +
        '      <!--data-bgrepeat="{{slide.mainImage.dataBgrepeat}}"-->\n' +
        '      <!--data-bgparallax="{{slide.mainImage.dataBgparallax}}"-->\n' +
        '      <!--class="{{slide.mainImage.class}}"-->\n' +
        '      <!--data-no-retina>-->\n' +
        '\n' +
        '    <!--&lt;!&ndash; LAYER NR. 1 &ndash;&gt;-->\n' +
        '    <!--<div-->\n' +
        '      <!--data-ng-repeat="layer in slide.layers"-->\n' +
        '      <!--class="{{layer.class}}"-->\n' +
        '      <!--id="{{layer.id}}"-->\n' +
        '      <!--data-x="{{layer.dataX}}"-->\n' +
        '      <!--data-hoffset="{{layer.dataHoffset}}"-->\n' +
        '      <!--data-y="{{layer.dataY}}"-->\n' +
        '      <!--data-voffset="{{layer.dataVoffset}}"-->\n' +
        '      <!--data-width="{{layer.dataWidth}}"-->\n' +
        '      <!--data-height="{{layer.dataHeight}}"-->\n' +
        '      <!--data-whitespace="{{layer.dataWhitespace}}"-->\n' +
        '      <!--data-style_hover="{{layer.dataStyle_hover}}"-->\n' +
        '      <!--data-transform_idle="{{layer.dataTransform_idle}}"-->\n' +
        '      <!--data-transform_in="{{layer.dataTransform_in}}"-->\n' +
        '      <!--data-transform_out="{{layer.dataTransform_out}}"-->\n' +
        '      <!--data-mask_in="{{layer.dataMask_in}}"-->\n' +
        '      <!--data-mask_out="{{layer.dataMask_out}}"-->\n' +
        '      <!--data-start="{{layer.dataStart}}"-->\n' +
        '      <!--data-splitin="{{layer.dataSplitin}}"-->\n' +
        '      <!--data-splitout="{{layer.dataSplitout}}"-->\n' +
        '      <!--data-responsive_offset="{{layer.dataResponsive_offset}}"-->\n' +
        '      <!--style="{{layer.dataNgStyle}}">-->\n' +
        '      <!--{{layer.layerText.text}}-->\n' +
        '      <!--<img-->\n' +
        '        <!--data-ng-if="layer.img.dataNoRetina"-->\n' +
        '        <!--src="{{layer.img.src}}"-->\n' +
        '        <!--alt="{{layer.img.alt}}"-->\n' +
        '        <!--width="{{layer.img.width}}"-->\n' +
        '        <!--height="{{layer.img.height}}"-->\n' +
        '        <!--data-ww="{{layer.img.dataWw}}"-->\n' +
        '        <!--data-hh="{{layer.img.dataHh}}"-->\n' +
        '        <!--data-no-retina>-->\n' +
        '      <!--<i data-ng-if="layer.icon" class="{{layer.icon.class}}"></i>-->\n' +
        '    <!--</div>-->\n' +
        '  <!--</li>-->\n' +
        '<!--</ul>-->\n' +
        '<div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>\n' +
        '');
}]);
