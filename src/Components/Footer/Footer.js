import React from 'react';
import { Typography } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import styles from './Footer.module.css';

class Footer extends React.Component {
	render() {
		return (
			<div className={styles.footer}>
				<Typography variant='h4' className={styles.author}>
					Made with {<Favorite />} by Quan Vo
				</Typography>
			</div>
		);
	}
}

export default Footer;
