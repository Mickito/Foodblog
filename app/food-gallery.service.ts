import { Injectable  } from '@angular/core';
import { Http, Response } from '@angular/http';

import { food } from './food';
import { Observable } from 'rxjs/Observable';

@Injectable ()

export class FoodGalleryService{
	constructor (private _http: Http) {}
	
	getFoodData () : Observable<food[]>
	{
		return this._http.get(`/data/Food-List.json`).map(this.extractData);
	}

	private extractData(res: Response) {
	let body = res.json();
	return body.data || { };
  }
}