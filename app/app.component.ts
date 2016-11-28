import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: '<h2>Here is a {{Banana}}</h2>'
})

export class AppComponent {
	Banana: "banana"
}