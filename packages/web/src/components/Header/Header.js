import React from 'react';
import { UserConsumer } from './../../context/UserContext'
import { Navbar } from 'react-bootstrap';


const Header = (props) => {
    return (
        <UserConsumer>{({ loggedInUser }) =>
            <Navbar>
                <Navbar.Brand href="/">Firebase App </Navbar.Brand>

            </Navbar>
        }
        </UserConsumer>
    );
};
export default Header;

