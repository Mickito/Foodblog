import { Injectable  } from '@angular/core';
import { Http } from '@angular/http';

@Injectable ()

export class FoodGalleryService{
	constructor (private _http: Http) {}
	
	getFoodData () {
		return this._http.get(`http://date.jsontest.com`).map(Foods => Foods.json());
	}
}