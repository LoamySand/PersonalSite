import React, { Component } from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Calendar from "./MeetingComponent";
import Portfolio from "./PortfolioComponent";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="main-content">
                <Header/>
                <Routes>
                    <Route exact path='/' element={Home()}/>
                    <Route exact path='/portfolio' element={<Portfolio/>}/>
                    <Route exact path='/contact' element={ <Contact />}/>
                    <Route exact path='/calendar' element={<Calendar/>}/>
                </Routes>
                <Footer/>
            </div>
        )
    }
}

export default Main;