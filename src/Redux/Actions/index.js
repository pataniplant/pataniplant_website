import { databaseRef } from '../../config';

export const CHOOSE_GIFT = 'CHOOSE_GIFT';
export const SET_CUSTOMER_INFORMATION = 'SET_CUSTOMER_INFORMATION';
export const SET_SUBMITTING_STATUS = 'SET_SUBMITTING_STATUS';
export const SET_ORDER_ID = 'SET_ORDER_ID';
export const SET_PRODUCT_AMOUNT = 'SET_PRODUCT_AMOUNT';

export function chooseGift(value) {
	return {
		type: CHOOSE_GIFT,
		payload: value,
	};
}

export function setCustomerInformation(field, value) {
	return {
		type: SET_CUSTOMER_INFORMATION,
		payload: { field, value },
	};
}

export function setSubmittingStatus(value) {
	return {
		type: SET_SUBMITTING_STATUS,
		payload: value,
	};
}

export function setOrderId(value) {
	return {
		type: SET_ORDER_ID,
		payload: value,
	};
}

export function setProductAmount(productId, amount) {
	return {
		type: SET_PRODUCT_AMOUNT,
		payload: { productId, amount },
	};
}

export function submitGiftInformation(customerInfo, giftChoice) {
	return async function (dispatch, getState) {
		await dispatch(setSubmittingStatus(true));
		const orderRef = databaseRef.child('orders');
		const newOrder = orderRef.push();
		await newOrder.set({
			customerInfo: customerInfo,
			giftChoice: giftChoice,
		});
		await dispatch(setOrderId(newOrder.key));
		await dispatch(setSubmittingStatus(false));
	};
}

export function modifyOrder(productId, amount) {
	return async function (dispatch, getState) {
		await dispatch(setSubmittingStatus(true));
		const currentState = getState();
		let orderRef = databaseRef.child('orders');
		if (currentState.orderId) {
			orderRef = orderRef.child(currentState.orderId);
			let data = await orderRef.once('value');
			let currentOrder = data.val().order ? data.val().order : {};
			currentOrder[productId] = amount;
			orderRef.set({
				order: currentOrder,
			});
		} else {
			const newOrder = orderRef.push();
			await newOrder.set({
				order: { [productId]: amount },
			});
			await dispatch(setOrderId(newOrder.key));
		}
		await dispatch(setProductAmount(productId, amount));
		await dispatch(setSubmittingStatus(false));
	};
}
