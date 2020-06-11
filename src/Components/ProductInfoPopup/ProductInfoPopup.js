import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from '@material-ui/core';

class ProductInfoPopup extends React.Component {
	render() {
		return (
			<Dialog open={this.props.open} onClose={this.props.onClose}>
				<DialogTitle>{this.props.name}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{this.props.description}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						variant='contained'
						color='primary'
						onClick={this.props.onClose}
					>
						Tắt
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default ProductInfoPopup;
