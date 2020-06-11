import React from 'react';
import {
	Radio,
	Card,
	CardActionArea,
	Typography,
	CardContent,
	Button,
} from '@material-ui/core';
import gift_image from '../../public/images/gift_image.jpg';
import styles from './ChoosingGift.module.css';
import { connect } from 'react-redux';
import { chooseGift } from '../../Redux/Actions';

const giftList = [
	{
		id: '1',
		name: 'name1',
		image: gift_image,
		description:
			'asfnasdkfnka nAKSJFNKASJDNF  ASDFNJKASDNFKJASFBN ASJFNKASDJN  DSNJKfksdnf  asejkfak afkjdbfaksdb fbdfbbaweb aef ajkdfk',
		price: '100,000đ',
	},
	{
		id: '2',
		name: 'name2',
		image: gift_image,
		description:
			'asfnasdkfnka nAKSJFNKASJDNF  ASDFNJKASDNFKJASFBN ASJFNKASDJN  DSNJKfksdnf  asejkfak afkjdbfaksdb fbdfbbaweb aef ajkdfk',
		price: '100,000đ',
	},
	{
		id: '3',
		name: 'name3',
		image: gift_image,
		description:
			'asfnasdkfnka nAKSJFNKASJDNF  ASDFNJKASDNFKJASFBN ASJFNKASDJN  DSNJKfksdnf  asejkfak afkjdbfaksdb fbdfbbaweb aef ajkdfk',
		price: '100,000đ',
	},
	{
		id: '4',
		name: 'name4',
		image: gift_image,
		description:
			'asfnasdkfnka nAKSJFNKASJDNF  ASDFNJKASDNFKJASFBN ASJFNKASDJN  DSNJKfksdnf  asejkfak afkjdbfaksdb fbdfbbaweb aef ajkdfk',
		price: '',
	},
];

class ChoosingGift extends React.Component {
	onChooseGiftHandler = (id) => {
		this.props.dispatch(chooseGift(id));
	};

	handleSubmit = () => {
		if (this.props.giftChoice in ['1', '2', '3', '4']) {
			this.props.scrollToInput();
		} else {
			alert('Hãy chọn một món quà trước khi tiếp tục');
		}
	};

	render() {
		const renderedList = giftList.map((gift) => {
			return (
				<Card
					className={styles.gift_card}
					key={gift.id}
					onClick={(e) => {
						this.onChooseGiftHandler(gift.id);
					}}
				>
					<CardActionArea>
						<img
							src={gift.image}
							alt='gift_image'
							className={styles.gift_image}
						/>
						<CardContent>
							<Typography>{gift.name}</Typography>
							<Typography>{gift.description}</Typography>

							<Typography>
								Giá: {gift.price ? gift.price : 'Miễn Phí'}
							</Typography>
							<Radio
								color='default'
								checked={this.props.giftChoice === gift.id}
							/>
						</CardContent>
					</CardActionArea>
				</Card>
			);
		});

		// console.log(this.props.scrollToInput);

		return (
			<div className={styles.choose_gift}>
				<Typography variant='h2'>
					Hãy chọn món quà mà bạn ưa thích
				</Typography>
				<ul className={styles.gift_list}>{renderedList}</ul>
				<Button
					size='large'
					variant='outlined'
					onClick={this.handleSubmit}
				>
					Tiếp Tục
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		giftChoice: state.giftChoice,
	};
};

export default connect(mapStateToProps)(ChoosingGift);
