import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Error from './pages/Error';
import OnlineRanking from './pages/OnlineRanking';
import OfflineRanking from './pages/OfflineRanking';
// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Error />
					</Route>
					<Route exact path="/online">
						<OnlineRanking />
					</Route>
					<Route exact path="/presencial">
						<OfflineRanking />
					</Route>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
