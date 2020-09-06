import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div class="container">
				<Link class="navbar-brand" to="/">
					SimpleBlog
				</Link>
				<button
					class="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					Menu
					<i class="fas fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<Link class="nav-link" to="/">
								Home
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to="/categories">
								Category
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
