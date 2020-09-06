import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import PostCategoryPage from './pages/PostCategoryPage';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/category/:id" component={PostCategoryPage} />
					<Route path="/categories" component={CategoryPage} />
					<Route path="/" component={HomePage} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
