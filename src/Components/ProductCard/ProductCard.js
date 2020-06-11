import React from 'react';
import { Button } from '@material-ui/core';
import { ProductInfoPopup, AddToCartPopup } from '../';
import { modifyOrder } from '../../Redux/Actions';
import { connect } from 'react-redux';

import styles from './ProductCard.module.css';

class ProductCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productPopup: false,
			addToCartPopup: false,
		};
	}

	handleClickSeeMore = () => {
		this.setState({
			productPopup: true,
		});
	};

	handleCloseSeeMore = () => {
		this.setState({
			productPopup: false,
		});
	};

	handleClickAddToCart = () => {
		this.setState({
			addToCartPopup: true,
		});
	};

	handleCloseAddToCart = () => {
		this.setState({
			addToCartPopup: false,
		});
	};

	handleSubmitAddToCart = async (amount) => {
		if (amount < 0) {
			alert('số lượng không được là số âm');
			return;
		}
		await this.props.dispatch(modifyOrder(this.props.product.id, amount));
		this.setState({
			addToCartPopup: false,
		});
	};

	render() {
		const product = this.props.product;
		const infoPopup = (
			<ProductInfoPopup
				open={this.state.productPopup}
				name={product.name}
				description={product.description}
				onClose={this.handleCloseSeeMore}
			/>
		);
		const addToCartPopup = (
			<AddToCartPopup
				open={this.state.addToCartPopup}
				submitting={this.props.submitting}
				name={product.name}
				onClose={this.handleCloseAddToCart}
				onSubmit={this.handleSubmitAddToCart}
				amount={
					product.id in this.props.productOrdered
						? this.props.productOrdered[product.id]
						: 1
				}
			/>
		);
		return (
			<div className={styles.root}>
				<img
					src={product.image}
					alt='main product'
					className={styles.product_image}
				/>
				<div className={styles.name_description}>
					<p className={styles.name}>{product.name}</p>
					<p className={styles.description}>{product.description}</p>
				</div>
				<div className={styles.options}>
					<Button
						variant='contained'
						color='primary'
						size='large'
						onClick={this.handleClickSeeMore}
					>
						xem thêm
					</Button>
					<Button
						variant='contained'
						color='primary'
						size='large'
						onClick={this.handleClickAddToCart}
					>
						thêm vào giỏ hàng
					</Button>
				</div>
				{infoPopup}
				{addToCartPopup}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		submitting: state.submitting,
		productOrdered: state.productOrdered,
	};
};

export default connect(mapStateToProps)(ProductCard);
