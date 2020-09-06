import React from 'react';

const Jumbotron = () => {
	return (
		<header class="masthead" style={{ backgroundImage: `url(${window.location.origin}/images/home-bg.jpg)` }}>
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="site-heading">
							<h1>Clean Blog</h1>
							<span class="subheading">A Blog Theme by Start Bootstrap</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Jumbotron;
