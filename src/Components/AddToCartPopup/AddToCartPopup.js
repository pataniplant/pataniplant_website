import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	DialogActions,
	Button,
} from '@material-ui/core';

import styles from './AddToCardPopup.module.css';

class AddToCartPopup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: props.amount,
		};
	}

	onChangeAmount = (e) => {
		this.setState({
			amount: e.target.value,
		});
	};

	render() {
		return (
			<Dialog
				open={this.props.open}
				onClose={() => {
					this.setState({
						amount: this.props.amount,
					});
					this.props.onClose();
				}}
			>
				<DialogTitle>Thêm vào giỏ hàng</DialogTitle>
				<DialogContent className={styles.popup_content}>
					<p className={styles.name}>{this.props.name}</p>
					<TextField
						disabled={this.props.submitting}
						required
						label='Số Lượng'
						value={this.state.amount}
						onChange={this.onChangeAmount}
						variant='outlined'
						type='number'
						className={styles.amount_field}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							this.props.onSubmit(this.state.amount);
						}}
						variant='contained'
						color='primary'
					>
						Xác nhận
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default AddToCartPopup;
