import {
	CHOOSE_GIFT,
	SET_CUSTOMER_INFORMATION,
	SET_SUBMITTING_STATUS,
	SET_ORDER_ID,
	SET_PRODUCT_AMOUNT,
} from '../Actions';

const initialState = {
	giftChoice: '',
	name: '',
	email: '',
	phoneNumber: '',
	address: '',
	submitting: false,
	orderId: '',
	productOrdered: {},
};

function reducer(state = initialState, action) {
	const payload = action.payload;
	const type = action.type;
	if (type === CHOOSE_GIFT) {
		return Object.assign({}, state, {
			giftChoice: payload,
		});
	}
	if (type === SET_CUSTOMER_INFORMATION) {
		return Object.assign({}, state, {
			[payload.field]: payload.value,
		});
	}
	if (type === SET_SUBMITTING_STATUS) {
		return Object.assign({}, state, {
			submitting: payload,
		});
	}
	if (type === SET_ORDER_ID) {
		return Object.assign({}, state, {
			orderId: payload,
		});
	}
	if (type === SET_PRODUCT_AMOUNT) {
		let currentOrder = state.productOrdered;
		currentOrder[payload.productId] = payload.amount;
		return Object.assign({}, state, {
			productOrdered: currentOrder,
		});
	}
	return state;
}

export default reducer;
