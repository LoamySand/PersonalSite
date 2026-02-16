import React, {Component} from 'react';
import { Col, Row} from 'react-bootstrap';
import MapSection from './map/Map';
import FormCode from './ContactFormComponent';

const location = {
    address: '',
    lat: 34.7445,
    lng: -92.2880,
}

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tel: '',
            email: '',
            preferredContact: 'Phone',
            message: '',
            touched: {
                name: false,
                telnum: false,
                email: false
            }
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }
    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked :
    //         target.value;
    //     const name = target.name;
    //
    //     this.setState({
    //         [name]: value
    //     });
    // }
    // handleSubmit(values) {
    //     console.log('Current State is: ' + JSON.stringify(values));
    //     alert('Thank You for your Feedback! ' + JSON.stringify(values));
    //     this.props.resetFeedbackForm();
    //     this.props.postFeedback(values);
    //     // event.preventDefault();
    // }
    // validate(firstname, lastname, telnum, email) {
    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     };
    //     if (this.state.touched.firstname && firstname.length < 3)
    //         errors.firstname = 'First Name should be >= 3 characters';
    //     else if (this.state.touched.firstname && firstname.length > 10)
    //         errors.firstname = 'First Name should be <= 10 characters';
    //     if (this.state.touched.lastname && lastname.length < 3)
    //         errors.lastname = 'Last Name should be >= 3 characters';
    //     else if (this.state.touched.lastname && lastname.length > 10)
    //         errors.lastname = 'Last Name should be <= 10 characters';
    //     const reg = /^\d+$/;
    //     if (this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum = 'Tel. Number should contain only numbers';
    //     if(this.state.touched.email && email.split('').filter(x => x ===
    //         '@').length !== 1)
    //         errors.email = 'Email should contain a @';
    //     return errors;
    // }

    render(){
        // const errors = this.validate(this.state.firstname,
        //     this.state.lastname, this.state.telnum, this.state.email);

        return(
            <div className="container mid">
                <Row className="hr justify-content-center text-center">
                    <Col md="auto" className="">
                        <h1 className='display-3 fs-1'>Get in Touch!</h1>
                    </Col>
                </Row>
                {/* 
                <div className="row row-content  text-center">
                    <div className="col-md-6 col-12 mb-0 p-5">
                        <h3 className='display-3 fs-1 mb-5'>Ways to Reach Me</h3>
                        <address className='text-start '>
                            <i className="fa fa-phone fa-2x me-2 mb-5"></i><span className='fs-4 mb-2 pe-1'>(501) 444-2664</span><a role="button" className="btn btn-md btn-outline-primary p-2 px-3  w-25 float-end" href="tel:+5014442664"><i className="fa fa-phone"></i> Call</a> <br />
                            <i className="fa fa-envelope fa-2x me-2 mb-1"></i><a className=' fs-4 pe-1' href="mailto:confusion@food.net">laneeboyd@gmail.com</a> <a role="button" className="btn btn-outline-success p-2 px-2 w-25 ms-4 float-end my-auto" href="mailto:laneeboyd@gmail.com"><i className="fa fa-envelope-o"></i>  Email</a>
                        </address>
                    </div>
                    <div className="col-md-6 col-12 mb-0 p-5">
                        <h3 className='display-3 fs-1 mb-3 text-center'>Y'all Live 'Round Here?</h3>
                        <MapSection location={location} zoomLevel={11}/>
                        <p className='fs-3 mt-4'>Let's get coffee!</p>
                         <a className="btn btn-outline-info " href="/calendar"><i className="fa fa-coffee"></i> Calendar</a>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1 ">

                    </div>
                </div>
                 */}
                <div className="row message-form mb-4 w-100">
                    <div className="col-12 text-center">
                        <h3 className="display-3 fs-1 mb-5 ">Leave a message</h3>
                    </div>
                    <div className="col-md-6 col-12 mx-auto">
                        <FormCode onSubmit={this.submit}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;