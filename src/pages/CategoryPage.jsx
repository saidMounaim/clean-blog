import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategoriesAction } from '../redux/category/CategoryActions';
import CategoryApi from '../services/CategoryApi';

const CategoryPage = () => {
	const { categories } = useSelector((state) => state.categories);
	const dispatch = useDispatch();

	const fetchCategories = async () => {
		try {
			const categories = await CategoryApi.getCategories();
			dispatch(fetchCategoriesAction(categories));
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	console.log('Categories ====> ', categories);

	return (
		<React.Fragment>
			<header class="masthead" style={{ backgroundImage: `url(${window.location.origin}/images/home-bg.jpg)` }}>
				<div class="overlay"></div>
				<div class="container">
					<div class="row">
						<div class="col-lg-8 col-md-10 mx-auto">
							<div class="site-heading">
								<h1>Category</h1>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="container">
				<div className="row mt-4 posts">
					{categories.map((category) => (
						<div className="col-md-6 col-sm-12">
							<Link
								to={{
									pathname: `/category/${category.id}`,
									state: category.id,
								}}
								className="card"
							>
								<img src={`http://localhost:1337${category.image.formats.thumbnail.url}`} />
								<h2>{category.name}</h2>
							</Link>
						</div>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default CategoryPage;
