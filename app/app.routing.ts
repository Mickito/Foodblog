import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodGalleryComponent } from './food-gallery.component';
import { DefaultComponent } from './default.component'
import { RecipeComponent } from './recipe.component'

const routes: Routes = [
	{path: 'FoodGallery', component: FoodGalleryComponent},
	{path: 'Main', component: DefaultComponent},
	{path: 'Recipe', component: DefaultComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
 
export const routingComponents = [FoodGalleryComponent,DefaultComponent];