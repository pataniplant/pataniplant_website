import React from 'react';
import styles from './MainProductPage.module.css';

import sample_image from '../../public/images/gift_image.jpg';
import { ProductCard } from '../../Components';

const mainProducts = [
	{
		id: '1',
		name: 'name1',
		image: sample_image,
		description:
			'asfnasdkfnka nAKSJFNKASJDNF  ASDFNJKASDNFKJASFBN ASJFNKASDJN  DSNJKfksdnf  asejkfak afkjdbfaksdb fbdfbbaweb aef ajkdfk',
		price: '100,000đ',
	},
	{
		id: '2',
		name: 'name2',
		image: sample_image,
		description:
			'asfnasdkfnka nAKSJFNKASJDNF  ASDFNJKASDNFKJASFBN ASJFNKASDJN  DSNJKfksdnf  asejkfak afkjdbfaksdb fbdfbbaweb aef ajkdfk',
		price: '100,000đ',
	},
	{
		id: '3',
		name: 'name3',
		image: sample_image,
		description:
			'asfnasdkfnka nAKSJFNKASJDNF  ASDFNJKASDNFKJASFBN ASJFNKASDJN  DSNJKfksdnf  asejkfak afkjdbfaksdb fbdfbbaweb aef ajkdfk',
		price: '100,000đ',
	},
	{
		id: '4',
		name: 'name4',
		image: sample_image,
		description:
			'asfnasdkfnka nAKSJFNKASJDNF  ASDFNJKASDNFKJASFBN ASJFNKASDJN  DSNJKfksdnf  asejkfak afkjdbfaksdb fbdfbbaweb aef ajkdfk',
		price: '',
	},
];

const productCards = mainProducts.map((product) => {
	return <ProductCard product={product} />;
});

class MainProductPage extends React.Component {
	render() {
		return (
			<div className={styles.root}>
				<p className={styles.title}>Sản Phẩm Mới</p>
				<div className={styles.product_cards}>{productCards}</div>
			</div>
		);
	}
}

export default MainProductPage;
