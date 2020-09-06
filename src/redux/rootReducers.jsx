import { combineReducers } from 'redux';
import { fetchPostsReducer } from './post/PostReducers';
import { fetchCategoriesReducer } from './category/CategoryReducers';

export const rootReducres = combineReducers({
	posts: fetchPostsReducer,
	categories: fetchCategoriesReducer,
});
