//import logo from './logo.svg';
import Login from '../../containers/Login/Login';//components/Login';
import Orders from './../../containers/Orders/Orders';
import ErrorBoundry from '../../containers/ErrorBoundry/ErrorBoundry';
import OrdersDetails from '../../components/OrderDetails/OrderDetails';

//import Error
//import Footer from './../../components/Footer';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from './../../helpers/PrivateRoute';
import { UserProvider } from './../../context/UserContext';

import './App.css';


function App() {
	return (
		// {/* <div className="App"> */}

		<ErrorBoundry>
			<Router>
				<UserProvider>

					<Switch>
						<Route exact path="/login" component={Login} />
						<PrivateRoute path="/order" component={OrdersDetails} />
						<PrivateRoute exact path='/' component={Orders} />
						{/* <PrivateRoute exact path='/orders' component={Orders} /> */}
					</Switch>

				</UserProvider>
			</Router>
		</ErrorBoundry>

		//</div>
	);
}

export default App;
