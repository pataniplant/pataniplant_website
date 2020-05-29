import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gift from './Pages/GiftPage/GiftPage';
import { NavigationBar, Footer } from './Components';

class App extends React.Component {
	componentDidMount() {
		document.title = 'Pataniplant';
		console.log(process.env);
	}

	render() {
		return (
			<div className='App'>
				<Router>
					<NavigationBar />
					<Switch>
						<Route path='/' component={Gift} />
						<Route path='/gift' component={Gift} />
					</Switch>
					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;
