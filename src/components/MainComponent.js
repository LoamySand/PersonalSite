import React, { Component } from 'react';
import {Container, Nav, Navbar, Image, Col, Row, Stack} from "react-bootstrap";
import {NavLink, Route, Routes, Redirect} from 'react-router-dom';
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Calendar from "./CalendarComponent";
//import {Col, Row} from "reactstrap";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <Routes>
                    <Route exact path='/' element={Home()}/>
                    <Route exact path='/portfolio'/>
                    <Route exact path='/contact' element={ <Contact />}/>
                    <Route exact path='/calendar' element={<Calendar/>}/>
                </Routes>
                <Footer/>

            </div>
        )
    }
}

export default Main;