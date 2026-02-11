import React, {Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render(){
        return (
            <Navbar className='background' id='navbar'>
                <Container>
                    <Nav id="topbar" className='ms-auto'>
                        <Nav.Item>
                            <NavLink className='nav-link'
                                     to='/'>
                                <h5 className="nav-options">About</h5>
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                           <NavLink className='nav-link '
                                    to='/portfolio'>
                               <h5 className="nav-options">Portfolio</h5></NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className='nav-link'
                                     to='/contact'>
                                <h5 className="nav-options">Contact</h5>
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Header;
