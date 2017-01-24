import {Component} from "@angular/core";
declare var $:JQueryStatic;

@Component({
   	selector: 'default-component',
	templateUrl: '/templates/default.template.html'
})

export class DefaultComponent {

	ngAfterViewInit() {
		$(document).ready(function(){
    	 	$("#FoodCarousel").carousel();
		});
	}
}