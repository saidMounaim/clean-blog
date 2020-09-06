import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostApi from '../services/PostApi';
import { fetchPostsAction } from '../redux/post/PostActions';
import PostCard from './PostCard';
import PostLoader from './loader/PostLoader';

const Posts = () => {
	const [loading, setLoading] = useState(true);
	const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	const fetchPosts = async () => {
		try {
			const posts = await PostApi.getPosts();
			dispatch(fetchPostsAction(posts));
			setLoading(false);
		} catch (error) {
			console.log(error.response);
			setLoading(true);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	console.log('POSTS ===>', posts);

	return (
		<React.Fragment>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						{loading ? <PostLoader /> : posts.map((post, index) => <PostCard post={post} index={index} />)}
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

export default Posts;
