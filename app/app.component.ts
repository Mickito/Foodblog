import {Component} from 'angular2/core';
import {NavigationComponent} from './navigation.component.ts';
import {SidebarComponent} from './sidebar.component.ts';

@Component({
   selector: 'main-page'
  template: `
  <div class="row">
		<div class="jumbotron">
			<div class="container">
				<h1>Haley Nguyen's Kitchen</h1>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row sides">
			<nav-component></nav-component>
		</div>
		<div class="row">
			<div class="col-md-10">
			</div>
			<div class="col-md-2">
				<div class="row">
					<div class="col-md-11">
						<sidebar-component></sidebar-component>
					</div>
				</div>
			</div>
		</div>
	</div>
  `,
  directives: [NavigationComponent,SidebarComponent]
})

export class AppComponent {
}