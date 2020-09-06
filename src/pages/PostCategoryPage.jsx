import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { fetchPostsCategoryAction } from '../redux/post/PostActions';
import PostApi from '../services/PostApi';

const PostCategoryPage = () => {
	const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const category = location.state;

	const fetchPostsCategory = async () => {
		try {
			const posts = await PostApi.getPostByCategory(category);
			dispatch(fetchPostsCategoryAction(posts));
		} catch (error) {
			console.log(error.response);
			history.push('/');
		}
	};

	useEffect(() => {
		fetchPostsCategory();
	}, []);

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
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						{posts.map((post, index) => (
							<PostCard post={post} index={index} />
						))}
						<hr />
						<div class="clearfix">
							{posts?.length > 4 && (
								<>
									<a class="btn btn-primary float-right" href="#">
										Older Posts
									</a>
									<a class="btn btn-primary float-left" href="#">
										Newset Posts
									</a>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
			<hr />
		</React.Fragment>
	);
};

export default PostCategoryPage;
