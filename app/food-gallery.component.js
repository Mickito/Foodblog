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
var core_1 = require('@angular/core');
var food_gallery_service_1 = require('./food-gallery.service');
var FoodGalleryComponent = (function () {
    function FoodGalleryComponent(httpService) {
        this.httpService = httpService;
        this.mode = 'Observable';
    }
    FoodGalleryComponent.prototype.getData = function () {
        var _this = this;
        this.httpService.getFoodData().subscribe(function (foods) { return _this.foods = foods; });
    };
    FoodGalleryComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    FoodGalleryComponent = __decorate([
        core_1.Component({
            selector: 'food-gallery-component',
            templateUrl: '/templates/food-gallery.template.html',
            providers: [food_gallery_service_1.FoodGalleryService]
        }), 
        __metadata('design:paramtypes', [food_gallery_service_1.FoodGalleryService])
    ], FoodGalleryComponent);
    return FoodGalleryComponent;
}());
exports.FoodGalleryComponent = FoodGalleryComponent;
//# sourceMappingURL=food-gallery.component.js.map