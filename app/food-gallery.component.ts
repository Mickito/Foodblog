import {Component} from '@angular/core';
import {FoodGalleryService} from './food-gallery.service';
import { food } from './food';

@Component({
   selector: 'food-gallery-component',
   templateUrl: '/templates/food-gallery.template.html',
   providers: [FoodGalleryService]
})

export class FoodGalleryComponent {
	foods: food[];
	mode = 'Observable';
	constructor(private httpService:FoodGalleryService){}

	getData() {
		this.httpService.getFoodData().subscribe(foods => this.foods = foods);
	}

	ngOnInit(){
		this.getData();
	}
}