import React from 'react';
import moment from 'moment';

const PostCard = ({ post, index }) => {
	return (
		<div class="post-preview" key={index}>
			<a href="post.html">
				<h2 class="post-title">{post.title}</h2>
				<h3 class="post-subtitle">{post.description.slice(0, 80)}...</h3>
			</a>
			<p class="post-meta">
				Posted by
				<a href="#"> {post.author.username} </a>
				on {moment().format(post.createdAt, 'MMMM D YYYY')}
			</p>
		</div>
	);
};

export default PostCard;
