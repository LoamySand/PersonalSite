import React, {Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render(){
        return (
            <Navbar className='sticky-top navbar header-navbar'>
                <Container>
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <NavLink className='nav-link text-decoration-none mx-4' to='/'>About</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                           <NavLink className='nav-link text-decoration-none mx-4' to='/portfolio'>Portfolio</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className='nav-link text-decoration-none mx-4' to='/contact'>Contact</NavLink>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Header;
