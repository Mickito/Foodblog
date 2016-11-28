import { RouterConfig } from '@angular/router';

import { FoodGallery } from 'app/app.food-gallery-component';
import { FoodBlog } from 'app/app.food-blog-component';
import { DefaultPage } from 'app/app.default-page-component';

export const routes: RouterConfig = [
  { path: '', component: DefaultPage }
  { path: 'Food-Gallery', component: FoodGallery }
  { path: 'Food-Blog', component: FoodBlog }
];