import {Component, View} from "angular2/core";

@Component({
   selector: 'main-page'
})

@View({
  template: '<div class="container-fluid">
		<div class="row">
			<nav class="navbar navbar-inverse navbar-static-top">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#">Haley's Kitchen</a>
					</div>
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li><a [routerLink]="['/food-blog']">Food Blog</a></li>
							<li><a [routerLink]="['/food-Gallery']">Food Gallery</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Recipies <span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
									<li><a href="#">Something else here</a></li>
									<li role="separator" class="divider"></li>
									<li><a href="#">Separated link</a></li>
									<li role="separator" class="divider"></li>
									<li><a href="#">One more separated link</a></li>
								</ul>
							</li>
							<li><a [routerLink]="['/about-page']">About</a></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Language <span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li><a href="#">English-US</a></li>
									<li><a href="#">Vietmanese</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div class="row">
			<div class="col-md-10">
				<router-outlet>Loading</router-outlet>
			</div>
			<div class="col-md-2">
				<div class="row">
					<div class="col-md-11">
						<div class="sidebar">
							<div class="row">
								<div class=col-md-3></div>
								<div class="col-md-5">
									<img src="Images/rsz_profile.jpg" alt="...">
								</div>
								<div class=col-md-4></div>
							</div>
							<div class="sidebar-title">
								<div class="sidebar-title-text">
									Haley Nguyen
								</div>
								<div class="sidebar-title-body">
									I am currently a student studying a bachelor in accounting and majoring in finance, who loves cooking in her spare time.
								</div>
							</div>
							<div class="sidebar-buttons">
								<button type="button" class="btn btn-primary btn-sm">Follow</button>
								<button type="button" class="btn btn-success btn-sm">Contact</button>
							</div>
						</div>
						<div class="sidebar">
							<div class="sidebar-icons">
								<p><img src="Images/Icons/facebook.png" /><img src="Images/Icons/twitter.png" /><img src="Images/Icons/linkedin.png" /><img src="Images/Icons/pinterest.png" /><img src="Images/Icons/instagram.png" /></p>
							</div>
						</div>
						<div class="sidebar">
							<div class="sidebar-title">
								<div class="sidebar-title-text">
									Subcribe to stay up to date with new blogs
								</div>
								<div class="sidebar-title-body">
									<p>
										<input type="email" placeholder="Enter email here" />
										<button type="button" class="btn btn-success btn-sm">Submit</button>
									</p>
								</div>
							</div>
						</div>
						<div class="sidebar">
							<div class="sidebar-title">
								<div class="sidebar-title-text">
									Daily Cooking Tip
								</div>
								<div class="sidebar-title-body">
									<p>When cooking oranges make sure to wash your hands multiple times</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>'
})

export class AppComponent {
	Banana: "banana"
}