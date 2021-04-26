import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import { firebase } from './../../firebase';
import { UserConsumer } from '../../context/UserContext'
import './Login.css';

class Login extends Component {
	state = {
		email: '',
		password: '',
		error: null,
	};
	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = (event, login) => {
		event.preventDefault();
		const { email, password } = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				login(user)
				this.props.history.push('/');
			})
			.catch((error) => {
				this.setState({ error: error });
			});
	};
	render() {
		if (this.state.error) {
			throw new Error(this.state.error);
		}
		const { email, password } = this.state;
		return (

			<UserConsumer>{({ login }) =>

				<div className="auth-wrapper">
					<div className="auth-inner">

						<form className="login-form" onSubmit={(event) => this.handleSubmit(event, login)}>

							<h3>Log in</h3>

							<div className="form-group">
								<label>Email</label>
								<input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={this.handleInputChange} />
							</div>

							<div className="form-group">
								<label>Password</label>
								<input type="password" name="password" value={password} onChange={this.handleInputChange} className="form-control" placeholder="Enter password" />
							</div>

							<button type="submit" className="btn btn-dark btn-lg btn-block log-in">Log in</button>
						</form>

					</div>
				</div>
			}
			</UserConsumer>
		);
	}
}
export default Login;//withRouter(Login);