"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'nav-component',
            template: "\n\t\t\t<nav class=\"navbar navbar-default navbar-static-top\">\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t\t<li><a href=\"\">Main Page</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Food Blog</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Lifestyle Blog</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Food Gallery</a></li>\n\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Recipies <span class=\"caret\"></span></a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n\t\t\t\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\n\t\t\t\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">One more separated link</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li><a href=\"\">About Me</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map