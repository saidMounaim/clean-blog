import axios from 'axios';

function getPosts() {
	return axios.get(`http://localhost:1337/posts`).then((response) => response.data);
}

function getPostByCategory(category) {
	return axios.get(`http://localhost:1337/posts?category=${category}`).then((response) => response.data);
}

export default {
	getPosts,
	getPostByCategory,
};
