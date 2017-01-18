import {Component} from '@angular/core';
import {FoodGalleryService} from './food-gallery.service';
import { food } from './food';

@Component({
   selector: 'food-gallery-component',
   template: 
`
<div class="col-sm-6 col-md-2" *ngFor="let f of foods ">
	<div class="thumbnail">
			<img src="{{f.thumbnailUrl}}" alt="...">
		<div class="caption">
			<h4>{{f.Name}}</h4>
				<p></p>
				<p><a href="#" class="btn btn-default" role="button">Infomation</a> <a href="#" class="btn purplebtn" role="button">Recipe</a></p>
		</div>
	</div>
</div>
`,
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