import { Component } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { SidebarComponent } from './sidebar.component';
import 'rxjs/Rx';

@Component({
  selector: 'main-page',
  template: `
  <div class="row">
	</div>
	<div class="container-fluid background">
		<div class="row">
			<div class="col-md-12">
				<div class="jumbotron">
					<div class="container">
				<h1>A Hint of Sweet</h1>
				<p>When the love of food is never enough</p>
					</div>
				</div>
				<nav-component></nav-component>
			</div>
		</div>
		<div class="row">
			<div class="col-md-10">
				<router-outlet></router-outlet>
			</div>
			<div class="col-md-2">
				<div class="row">
					<div class="col-md-12">
						<sidebar-component></sidebar-component>
					</div>
				</div>
			</div>
		</div>
	</div>
  `
})

export class AppComponent {
}