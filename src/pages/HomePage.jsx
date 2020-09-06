import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Posts from '../components/Posts';

const HomePage = () => {
	return (
		<React.Fragment>
			<Jumbotron />
			<Posts />
		</React.Fragment>
	);
};

export default HomePage;
