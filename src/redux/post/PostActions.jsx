import * as actions from './PostActionsTypes';

export const fetchPostsAction = (posts) => {
	return {
		type: actions.FETCH_POSTS,
		payload: posts,
	};
};

export const fetchPostsCategoryAction = (posts) => {
	return {
		type: actions.FETCH_POSTS_CATEGORY,
		payload: posts,
	};
};
