import {Button, Col, Form, Row} from "react-bootstrap";
import React from "react";
import {Field, reduxForm, reset} from 'redux-form';

const validate = values => {
    const errors={}
    if (!values.name) {
        errors.name='Required'
    } else if (values.name.length < 4) {
        errors.name='Minimum 4 letters'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if(!values.tel) {
        errors.tel = 'Required'
    } else if (values.tel.match(/^\d{10}$/)) {
        errors.tel = 'Invalid phone number'
    }
    return errors
}
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <div>
            {touched && ((error && <span className="text-danger row ms-1">{error}</span>) || (warning && <span>{warning}</span>))}

            <label className="control-label ms-1">{label}</label>
            <div>
                <input {...input} type={type} className="form-control mt-2 mb-3" />
            </div>
        </div>
    )

const renderRadio = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        {touched && ((error && <span className="text-danger row ms-1">{error}</span>) || (warning && <span>{warning}</span>))}

    </div>
)

const renderTextField = ({ textarea, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label ms-1">{label}</label>
        <div>
            <span>{textarea}</span>
            <textarea {...textarea} rows="5"  className='form-control textarea mt-2 mb-3'/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

let FormCode = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (

            <Form onSubmit={ handleSubmit } className='rounded border border-3 p-4'>
{/*<span className='border border-5'></span>*/}
                <Form.Group>
                <Field name='name' component={renderField} label='Your Name'/>
                </Form.Group>
                <Form.Group>
                    <Field name='email' component={renderField} label='Your Email'/>
                </Form.Group>
                <Form.Group>
                    <Field name='tel' component={renderField} label='Your Phone Number'/>
                </Form.Group>
                <Form.Group>
                    <label>Preferred Contact Method</label>
                    <Row className="ms-1 mb-3 mt-2">
                        <Col className='col-2'>
                            <Field name="preferredContact" className="form-check" component={"input"} type='radio' value='email' id='email' checked/>
                            <label htmlFor="email" className="form-check-label">Email</label>
                        </Col>
                        <Col className='col-2'>
                            <Field name="preferredContact" className="form-check" component={"input"} type='radio' value='text' label='text'/>
                            <label htmlFor="email" className="form-check-label">Text</label>
                        </Col>
                        <Col className='col-2'>
                            <Field name="preferredContact" className="form-check" component={"input"} type='radio' value='phone' label='phone'/>
                            <label htmlFor="email" className="form-check-label">Phone</label>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Field name='message' component={renderTextField} label='Message'/>
                </Form.Group>
                <Button type='submit' disabled={pristine || submitting}  className='ms-3 btn-lg'>Submit</Button>

</Form>

    )
}
FormCode = reduxForm({
    form: 'contact',
    validate,
})(FormCode);

export default FormCode;
