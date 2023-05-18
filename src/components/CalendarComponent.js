import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

const calStyle={
    border: "solid 1px #777",
    width: 800,
    height: 600
}
class Calendar extends Component {

    constructor(props) {
        super(props);
    }
        render(){
        return(
            <div>
                <Row>
                    <Col>
                        <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&mode=WEEK&title=My%20Schedule&src=bGFuZWVib3lkQGdtYWlsLmNvbQ&src=OWU5OTQwNTgxMDhlNTc1NjNlZGU0MGFjYTIyZjc1YjQwNGUwYWRhMDI2OThlMjU1ZDc2ZTRlMjVhOTA1NzRkMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MTczN2E0MjU4ZmJlYmM5Mzc0ZTE1ZmVhNWMwNDBhZWZiYWI2ODAzNjk0ZDY1ZWVjZDM3OTllZDA3YWU1NTM2NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23F4511E&color=%230B8043"
                        style={calStyle}></iframe>
                    </Col>
                    <Col>
                        <h1>TODO ADD EVENT FORM</h1>
                    </Col>
                </Row>
            </div>

        )}
    }



export default Calendar;