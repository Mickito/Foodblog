import {Component, View} from "angular2/core";

@Component({
   selector: 'Food-Blog'
})

@View({
  template: '<h2>Here is a {{Banana}}</h2>'
})

export class FoodBlog {
	Banana: "food-blog"
}