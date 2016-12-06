import {Component} from "@angular/core";

@Component({
   	selector: 'sidebar-component',
	template: `
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
			I am currently a student studying a bachelor in bussiness majoring in accounting and finance, who loves cooking in her spare time.
		</div>
	</div>
	<div class="sidebar-buttons">
		<button type="button" class="btn btn-primary btn-sm">Share</button>
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
			Cooking Tip
		</div>
		<div class="sidebar-title-body">
			<p>When cooking oranges make sure to wash your hands multiple times</p>
		</div>
	</div>
</div>
<div class="sidebar">
	<div class="sidebar-title">
		<div class="sidebar-title-body">

		</div>
	</div>
</div>
`
})

export class SidebarComponent {

}