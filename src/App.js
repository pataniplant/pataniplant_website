import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GiftPage, MainProductPage } from './Pages';
import { NavigationBar, Footer } from './Components';

class App extends React.Component {
	componentDidMount() {
		document.title = 'Pataniplant';
	}

	render() {
		return (
			<div className='App'>
				<Router>
					<NavigationBar />
					<Switch>
						<Route exact path='/' component={GiftPage} />
						<Route path='/gift' component={GiftPage} />
						<Route path='/product' component={MainProductPage} />
					</Switch>
					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;
