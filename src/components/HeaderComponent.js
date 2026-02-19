import React, {Component, useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { ScrollContext } from '../ScrollContext';

const Header = () => {
    const { isScrolling } = useContext(ScrollContext);
    
    return (
        <Navbar className='sticky-top navbar header-navbar' expand="md">
            <Container className='w-100 mx-2 d-flex align-items-center'>
                <Navbar.Brand style={{ opacity: isScrolling ? 0 : 1, transition: 'opacity 0.2s ease-out' }}>
                    <img src={process.env.PUBLIC_URL + '/bee.png'} alt="bee" style={{ height: '50px', width: 'auto' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-5 flex-grow-1 justify-content-end">
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
