import React from 'react';
import { UserConsumer } from './../../context/UserContext'
import { Navbar } from 'react-bootstrap';


const Header = (props) => {
    debugger;
    return (
        <UserConsumer>{({ loggedInUser }) =>
            <Navbar>
                <Navbar.Brand href="/">Firebase App {JSON.stringify(loggedInUser)}</Navbar.Brand>

            </Navbar>
        }
        </UserConsumer>
    );
};
export default Header;

