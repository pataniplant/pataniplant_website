import React from 'react';
import { Button } from '@material-ui/core';
import { ProductInfoPopup } from '../';

import styles from './ProductCard.module.css';

class ProductCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productPopup: false,
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
					<Button variant='contained' color='primary' size='large'>
						thêm vào giỏ hàng
					</Button>
				</div>
				{infoPopup}
			</div>
		);
	}
}

export default ProductCard;
