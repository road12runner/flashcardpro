import {SET_STACK} from '../actions'

export  const reducer = (state = {}, action) => {
	switch(action.type) {
		case SET_STACK:
			return action.payload;
		default:
			return state;
	}
};

