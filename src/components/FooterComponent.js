import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {/*TODO RESPONSIVE*/}
                <div className="container ">
                    <div className='row p-4'>
                        <div className="col-md-6 col-12 ">
                                <Navbar className='justify-content-center'>
                                    <Nav id="bottom-nav">
                                        <Nav.Item>
                                            <NavLink className='nav-link' to='/'><h5 className="display-6 fs-4">Home</h5></NavLink>
                                        </Nav.Item>
                                        {/*<Nav.Item>*/}
                                        {/*    <NavLink className='nav-link' to='/portfolio'><h5 className="display-6 fs-4">Portfolio</h5></NavLink>*/}
                                        {/*</Nav.Item>*/}
                                        <Nav.Item>
                                            <NavLink className='nav-link' to='/Contact'><h5 className="display-6 fs-4">Contact</h5></NavLink>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar>
                        </div>
                        <div className="col-md-6 col-12 mx-auto">
                                <div className="text-center socials">
                                    <a className="btn"
                                       href="https://github.com/LoamySand" target='_blank'><i className="fa fa-github"></i></a>
                                    <a className="btn"
                                       href="https://www.linkedin.com/in/lane-boyd-48862715a/" target='_blank'><i className="fa fa-linkedin"></i></a>
                                    <a className="btn"
                                       href="mailto:laneeboyd@gmail.com" target='_blank'><i className="fa fa-envelope-o"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <p>© Copyright 2023 Lane Boyd</p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Footer;