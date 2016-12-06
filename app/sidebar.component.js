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
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar-component',
            template: "\n<div class=\"sidebar\">\n\t<div class=\"row\">\n\t\t<div class=col-md-3></div>\n\t\t<div class=\"col-md-5\">\n\t\t\t<img src=\"Images/rsz_profile.jpg\" alt=\"...\">\n\t\t</div>\n\t\t<div class=col-md-4></div>\n\t</div>\n\t<div class=\"sidebar-title\">\n\t\t<div class=\"sidebar-title-text\">\n\t\t\tHaley Nguyen\n\t\t</div>\n\t\t<div class=\"sidebar-title-body\">\n\t\t\tI am currently a student studying a bachelor in bussiness majoring in accounting and finance, who loves cooking in her spare time.\n\t\t</div>\n\t</div>\n\t<div class=\"sidebar-buttons\">\n\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\">Share</button>\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm\">Contact</button>\n\t</div>\n</div>\n<div class=\"sidebar\">\n\t<div class=\"sidebar-icons\">\n\t\t<p><img src=\"Images/Icons/facebook.png\" /><img src=\"Images/Icons/twitter.png\" /><img src=\"Images/Icons/linkedin.png\" /><img src=\"Images/Icons/pinterest.png\" /><img src=\"Images/Icons/instagram.png\" /></p>\n\t</div>\n</div>\n<div class=\"sidebar\">\n\t<div class=\"sidebar-title\">\n\t\t<div class=\"sidebar-title-text\">\n\t\t\tSubcribe to stay up to date with new blogs\n\t\t</div>\n\t\t<div class=\"sidebar-title-body\">\n\t\t\t<p>\n\t\t\t\t<input type=\"email\" placeholder=\"Enter email here\" />\n\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm\">Submit</button>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"sidebar\">\n\t<div class=\"sidebar-title\">\n\t\t<div class=\"sidebar-title-text\">\n\t\t\tCooking Tip\n\t\t</div>\n\t\t<div class=\"sidebar-title-body\">\n\t\t\t<p>When cooking oranges make sure to wash your hands multiple times</p>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"sidebar\">\n\t<div class=\"sidebar-title\">\n\t\t<div class=\"sidebar-title-body\">\n\n\t\t</div>\n\t</div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map