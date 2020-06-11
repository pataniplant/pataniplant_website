import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import styles from './InputInformation.module.css';
import form_image from '../../public/images/form_image.jpg';
import {
	submitGiftInformation,
	setCustomerInformation,
} from '../../Redux/Actions';
import { Redirect } from 'react-router-dom';
import { NotifyPopup } from '../';

class InputInfomation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errorName: '',
			errorEmail: '',
			errorPhoneNumber: '',
			errorAddress: '',
			redirectURL: '',
			redirectPopup: false,
		};
	}

	onChangeValue = (field, value) => {
		this.props.dispatch(setCustomerInformation(field, value));
	};

	checkInputFields = () => {
		let errorName = '',
			errorAddress = '',
			errorPhoneNumber = '',
			errorEmail = '',
			willSubmit = true;
		if (!this.props.name) {
			errorName = 'Mục này không được để trống';
			willSubmit = false;
		}
		if (!this.props.address) {
			errorAddress = 'Mục này không được để trống';
			willSubmit = false;
		}
		if (!this.props.phoneNumber) {
			errorPhoneNumber = 'Mục này không được để trống';
			willSubmit = false;
		}
		if (!this.props.email) {
			errorEmail = 'Mục này không được để trống';
			willSubmit = false;
		} else if (
			!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
				this.props.email
			)
		) {
			errorEmail = 'Hãy điền email đúng';
			willSubmit = false;
		}

		this.setState({
			errorAddress,
			errorEmail,
			errorName,
			errorPhoneNumber,
		});
		return willSubmit;
	};

	handleSubmit = async () => {
		let willSubmit = this.checkInputFields();
		if (willSubmit) {
			await this.props.dispatch(
				submitGiftInformation(
					{
						name: this.props.name,
						email: this.props.email,
						address: this.props.address,
						phoneNumber: this.props.phoneNumber,
					},
					this.props.giftChoice
				)
			);

			this.setState({
				redirectPopup: true,
			});
		}
	};

	onCloseRedirectPopup = () => {
		this.setState({
			redirectPopup: false,
		});

		this.setState({
			redirectURL: '/product',
		});
	};

	render() {
		const redirectPopup = (
			<NotifyPopup
				open={this.state.redirectPopup}
				onClose={this.onCloseRedirectPopup}
				title='Bạn sẽ được chuyển qua trang sản phẩm chính của chúng tôi
				trước khi xác nhận đơn đặt hàng'
			/>
		);

		const inputForm = (
			<form className={styles.form}>
				<TextField
					disabled={this.props.submitting}
					required
					label='Họ và Tên'
					value={this.props.name}
					onChange={(e) => {
						this.onChangeValue('name', e.target.value);
					}}
					variant='outlined'
					className={styles.input_field}
					error={this.state.errorName ? true : false}
					helperText={this.state.errorName}
				/>
				<TextField
					disabled={this.props.submitting}
					required
					label='Địa Chỉ Email'
					value={this.props.email}
					onChange={(e) => {
						this.onChangeValue('email', e.target.value);
					}}
					variant='outlined'
					className={styles.input_field}
					error={this.state.errorEmail ? true : false}
					helperText={this.state.errorEmail}
				/>
				<TextField
					disabled={this.props.submitting}
					required
					label='Số Điện Thoại'
					value={this.props.phoneNumber}
					onChange={(e) => {
						this.onChangeValue('phoneNumber', e.target.value);
					}}
					variant='outlined'
					className={styles.input_field}
					error={this.state.errorPhoneNumber ? true : false}
					helperText={this.state.errorPhoneNumber}
				/>
				<TextField
					disabled={this.props.submitting}
					required
					label='Địa Chỉ Giao Hàng'
					value={this.props.address}
					onChange={(e) => {
						this.onChangeValue('address', e.target.value);
					}}
					variant='outlined'
					className={styles.input_field}
					error={this.state.errorAddress ? true : false}
					helperText={this.state.errorAddress}
				/>
			</form>
		);

		const redirectComponent = this.state.redirectURL ? (
			<Redirect push to={this.state.redirectURL} />
		) : null;

		// console.log(this.state);

		return (
			<div className={styles.root}>
				<Typography variant='h2'>
					Thông Tin Liên Lạc và Địa Chỉ Giao Hàng
				</Typography>
				<div className={styles.input_section}>
					{inputForm}
					<img
						src={form_image}
						alt='form'
						className={styles.form_image}
					/>
				</div>
				<Button
					size='large'
					variant='outlined'
					onClick={this.handleSubmit}
				>
					Tiếp Tục
				</Button>
				{redirectComponent}
				{redirectPopup}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		giftChoice: state.giftChoice,
		submitting: state.submitting,
		name: state.name,
		email: state.email,
		address: state.address,
		phoneNumber: state.phoneNumber,
	};
};

export default connect(mapStateToProps)(InputInfomation);
