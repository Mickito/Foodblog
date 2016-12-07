import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodGalleryComponent } from './food-gallery.component';

const routes: Routes = [
	{path: 'FoodGallery', component: FoodGalleryComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
 
export const routingComponents = [FoodGalleryComponent];