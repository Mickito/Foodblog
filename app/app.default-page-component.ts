import {Component, View} from "angular2/core";

@Component({
   selector: 'default-page'
})

@View({
  template: '<h2>Here is a {{Banana}}</h2>'
})

export class DefaultPage {
	Banana: "default"
}