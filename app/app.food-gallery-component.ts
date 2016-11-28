import {Component, View} from "angular2/core";

@Component({
   selector: 'Food-Gallery'
})

@View({
  template: '<h2>Here is a {{Banana}}</h2>'
})

export class FoodGallery {
	Banana: "food-gallery"
}