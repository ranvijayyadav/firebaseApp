import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserConsumer } from '../context/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <UserConsumer>
        {({ isAuth }) => {
            return (
                <Route
                    {...rest}
                    render={props => isAuth ?
                        (<Component {...props} />) :
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location }
                            }}
                        />
                    }
                />
            )
        }}
    </UserConsumer>
);
export default PrivateRoute;