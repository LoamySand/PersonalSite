import React, {Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render(){
        return (
            <Navbar className='bg-light sticky-top navbar'>
                <Container>
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <NavLink className='nav-link text-secondary text-decoration-none' to='/'>About</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                           <NavLink className='nav-link text-secondary text-decoration-none' to='/portfolio'>Portfolio</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className='nav-link text-secondary text-decoration-none' to='/contact'>Contact</NavLink>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Header;
