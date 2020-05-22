import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import styles from './InputInformation.module.css';
import form_image from '../../public/images/form_image.jpg';

class InputInfomation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phoneNumber: '',
			address: '',
		};
	}

	onChangeValue = (field, value) => {
		this.setState({
			[field]: value,
		});
	};

	render() {
		const inputForm = (
			<form className={styles.form}>
				<TextField
					required
					label='Họ và Tên'
					value={this.state.name}
					onChange={(e) => {
						this.onChangeValue('name', e.target.value);
					}}
					variant='outlined'
					className={styles.input_field}
				/>
				<TextField
					required
					label='Địa Chỉ Email'
					value={this.state.email}
					onChange={(e) => {
						this.onChangeValue('email', e.target.value);
					}}
					variant='outlined'
					className={styles.input_field}
				/>
				<TextField
					required
					label='Số Điện Thoại'
					value={this.state.phoneNumber}
					onChange={(e) => {
						this.onChangeValue('phoneNumber', e.target.value);
					}}
					variant='outlined'
					className={styles.input_field}
				/>
				<TextField
					required
					label='Địa Chỉ Giao Hàng'
					value={this.state.address}
					onChange={(e) => {
						this.onChangeValue('address', e.target.value);
					}}
					variant='outlined'
					className={styles.input_field}
				/>
			</form>
		);

		console.log(this.state);

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
				<Button size='large' variant='outlined'>
					Tiếp Tục
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.name,
		email: state.email,
		phoneNumber: state.phoneNumber,
		address: state.address,
	};
};

export default connect(mapStateToProps)(InputInfomation);
