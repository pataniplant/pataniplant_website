import { CHOOSE_GIFT } from '../Actions';

const initialState = {
	giftChoice: '',
	name: '',
	email: '',
	phoneNumber: '',
	address: '',
};

function reducer(state = initialState, action) {
	if ((action.type = CHOOSE_GIFT)) {
		return Object.assign({}, state, {
			giftChoice: action.payload,
		});
	}
	return state;
}

export default reducer;
