import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <footer className="footer w-100 mt-auto py-4">
                <div className="container">
                    <div className='row'>
                        <div className="col-md-6 col-12">
                            <Navbar className='justify-content-center'>
                                <Nav className="nav">
                                    <Nav.Item>
                                        <NavLink className='nav-link footer-link text-decoration-none mx-4' to='/'>Home</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink className='nav-link footer-link text-decoration-none mx-4' to='/Portfolio'>Portfolio</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink className='nav-link footer-link text-decoration-none mx-4' to='/Contact'>Contact</NavLink>
                                    </Nav.Item>
                                </Nav>
                            </Navbar>
                        </div>
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="d-flex justify-content-center gap-3">
                                <a className="btn footer-social-btn" href="https://github.com/LoamySand" target='_blank' rel="noreferrer"><i className="fa fa-github"></i></a>
                                <a className="btn footer-social-btn" href="https://www.linkedin.com/in/lane-boyd-48862715a/" target='_blank' rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                                <a className="btn footer-social-btn" href="mailto:laneeboyd@gmail.com" target='_blank' rel="noreferrer"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2026 Lane Boyd</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;