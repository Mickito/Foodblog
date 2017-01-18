import {Component} from "@angular/core";

@Component({
   	selector: 'default-component',
	template: `
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-purple">
			<div class="panel-heading">
				<h3 class="panel-title">An Introduction to Haley's Kitchen</h3>
			</div>
			<div class="panel-body">
				<div class="col-md-8">
					<p>A place where food lovers can read, learn and discuss food dishes of different varieties from many cultures. Feel free to contact me with any enquiries about this blog or to suggest what to cook next, also don't forget to subscribe to the newsletter for updates regarding new blog posts.</p>
					<p>This blog is often updated every sunday at 7:00pm Australian Eastern Standard Time (AEST) with new food recipes. It is also updated several times a week on important events happening in my life related to my studies, personal life and work.</p>
				</div>
				<div class="col-md-4">
					<div id="ImgCarousel" class="carousel slide carousel-fade" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#ImgCarousel" data-slide-to="0" class="active"></li>
							<li data-target="#ImgCarousel" data-slide-to="1"></li>
							<li data-target="#ImgCarousel" data-slide-to="2"></li>
							<li data-target="#ImgCarousel" data-slide-to="3"></li>
						</ol>
						<div class="carousel-inner" role="listbox">
							<div class="item active">
								<img src="/Images/Food-Gallery/CChesseSticks.jpg" alt="First Image">
								<div class="carousel-content">
									<h3>Mozella Deep Fried Cheese Sticks</h3>
									<p>27th January 2014</p>
								</div>
							</div>
							<div class="item">
								<img src="/Images/Food-Gallery/Cchocobrownies.jpg" alt="Second Image">
								<div class="carousel-content">
									<h3>Soft Milk-Chocolate Brownies</h3>
									<p>7th April 2016</p>
								</div>
							</div>
							<div class="item">
								<img src="/Images/Food-Gallery/Cpho.jpg" alt="Third Image">
								<div class="carousel-content">
									<h3>South Style Vietmanese Phở</h3>
									<p>20th March 2016</p>
								</div>
							</div>
							<a class="left carousel-control" data-target="#ImgCarousel" role="button" data-slide="prev">
								<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a class="right carousel-control" data-target="#ImgCarousel" role="button" data-slide="next">
								<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-purple">
			<div class="panel-heading">
				<h3 class="panel-title">Recent Blog Posts</h3>
			</div>
			<div class="panel-body">
				<div class="col-md-4">
					<ul>
						<li><a href="">A change will come one day - 24/08/2016</a></li>
						<li><a href="">Cooking guide for cooking with cheese - 14/08/2016</a></li>
						<li><a href="">The future is unclear - 13/08/2016</a></li>
						<li><a href="">Top 10 Vietmanese dishes - 11/08/2016</a></li>
					</ul>
				</div>
				<div class="col-md-4">
					<ul>
						<li><a href="">How I feel about Donald Trump - 24/07/2016</a></li>
						<li><a href="">Top 5 Australian dishes - 23/07/2016</a></li>
						<li><a href="">Do I think MSG is good or bad - 04/07/2016</a></li>
						<li><a href="">The future of accounting - 15/05/2016</a></li>
					</ul>
				</div>
				<div class="col-md-4">
					<ul>
						<li><a href="">Potential Internship - 10/05/2016</a></li>
						<li><a href="">How to fillet a fish - 23/04/2016</a></li>
						<li><a href="">The right tools for the job - 20/03/2016</a></li>
						<li><a href="">Personal favorite celebrity chefs - 11/03/2016</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-purple">
			<div class="panel-heading">
				<h3 class="panel-title">Let's Get Started</h3>
			</div>
			<div class="panel-body">
				<div class="col-md-1">
				</div>
				<div class="col-md-2">
				</div>
				<div class="col-md-2">
				</div>
				<div class="col-md-2">
				</div>
				<div class="col-md-2">
				</div>
				<div class="col-md-1">
				</div>
			</div>
		</div>
	</div>
</div>
`
})

export class DefaultComponent {

}