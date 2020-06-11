import React from 'react';

import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';

class NotifyPopup extends React.Component {
	render() {
		return (
			<Dialog open={this.props.open} onClose={this.props.onClose}>
				<DialogTitle>{this.props.title}</DialogTitle>
				<DialogActions>
					<Button
						onClick={this.props.onClose}
						variant='outlined'
						color='primary'
					>
						Đồng ý
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default NotifyPopup;
