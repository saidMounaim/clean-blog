import * as actions from './CategoryActionsTypes';

const intialState = {
	categories: [],
};

export const fetchCategoriesReducer = (state = intialState, action) => {
	switch (action.type) {
		case actions.FETCH_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		default:
			return state;
	}
};
