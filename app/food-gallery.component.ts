import {Component} from '@angular/core';
import {FoodGalleryService} from './food-gallery.service';
@Component({
   selector: 'food-gallery-component',
   template: `<p>{{foodData}}</p>`,
   providers: [FoodGalleryService]
})

export class FoodGalleryComponent {
	foodData:string;
	constructor(private httpService:FoodGalleryService){}

	getData() {
		return this.httpService.getFoodData().subscribe(f => this.foodData = JSON.stringify(f));
		alert(this.foodData);
	}

	ngOnInit(){
		this.foodData = this.getData();
		alert(this.foodData);
	}
}