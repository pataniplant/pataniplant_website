import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class NavigationBar extends React.Component {
	render() {
		return (
			<AppBar>
				<Toolbar>
					<Typography>Pataniplant</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export default NavigationBar;
