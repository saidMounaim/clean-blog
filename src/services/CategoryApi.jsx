import axios from 'axios';

function getCategories() {
	return axios.get('http://localhost:1337/categories').then((response) => response.data);
}

export default {
	getCategories,
};
