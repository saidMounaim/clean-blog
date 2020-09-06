import * as actions from './PostActionsTypes';

const initialState = {
	posts: [],
};

export const fetchPostsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		case actions.FETCH_POSTS_CATEGORY:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
};
