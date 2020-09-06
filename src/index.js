import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// create store
import { createStore } from 'redux';
// Provider
import { Provider } from 'react-redux';
// All reducres
import { rootReducres } from './redux/rootReducers';

const store = createStore(rootReducres);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
