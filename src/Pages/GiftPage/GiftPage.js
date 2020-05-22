import React from 'react';
import { ChoosingGift, InputInformation } from '../../Components';
import styles from './GiftPage.module.css';

class Gift extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	scrollToInput = () => {
		window.scrollTo({
			behavior: 'smooth',
			top: this.inputRef.current.offsetTop,
		});
	};

	render() {
		return (
			<div className={styles.root}>
				<div className={styles.choosing_gift}>
					<ChoosingGift scrollToInput={this.scrollToInput} />
				</div>
				<div className={styles.input_information} ref={this.inputRef}>
					<InputInformation />
				</div>
			</div>
		);
	}
}

export default Gift;
