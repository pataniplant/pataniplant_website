export const CHOOSE_GIFT = 'CHOOSE_GIFT';

export function chooseGift(value) {
	return {
		type: CHOOSE_GIFT,
		payload: value,
	};
}
