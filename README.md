# Angular Revolution

### A directive for the Slider Revolution created by [ThemePunch](http://www.themepunch.com/portfolio/slider-revolution-jquery-plugin/)

### **Note:** *This directive requires the jQuery plugin Slider Revolution, which is a paid plugin and requires license. The plugin is not included in this directive because of this.

---
**[Download 1.0.0](https://github.com/Karnith/angular-revolution/archive/master.zip) **|**
**[Guide](https://github.com/Karnith/angular-revolution/wiki) |**
**[FAQ](https://github.com/Karnith/angular-revolution/wiki/Frequently-Asked-Questions) |**
**[Resources](#resources) |**
**[Report an Issue](https://github.com/Karnith/angular-revolution/blob/master/CONTRIBUTING.md#report-an-issue) |**
**[Contribute](https://github.com/Karnith/angular-revolution/blob/master/CONTRIBUTING.md#contribute) |**

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
<rev-slider></rev-slider>
```
or an attribute
```html
<div rev-slider></div>
```

## Resources

* [In-Depth Guide](https://github.com/Karnith/angular-revolution/wiki)
* [FAQ](https://github.com/Karnith/angular-revolution/wiki/Frequently-Asked-Questions)
 
## Reporting issues and Contributing

Please read our [Contributor guidelines](CONTRIBUTING.md) before reporting an issue or creating a pull request.

