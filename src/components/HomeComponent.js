import React from 'react';
import {Col, Image, Row, Stack, Table} from "react-bootstrap";
import Resume from './ResumeComponent';
import SkillsComponent from './SkillsComponent';



function Home() {
    const publicUrl = process.env.PUBLIC_URL;
    
    return(
        <div>
            <div className="background">
                <div>
                <Row className="text-center">
                    <Col className="float-left profile-section">
                        <Row className='align-items-center pt-5 flex-column'>
                            <Image className='profile-pic' src={publicUrl + '/profile.png'}/>
                            <Image className='img-fluid intro-blurb' src={publicUrl + '/title.png'}/>
                        </Row>
                        <Row className="mx-auto mb-3 mt-5 intro-blurb">
                            <Stack>
                                <h6 className='display-6 fs-3'>Developer by day,</h6>
                                <h6 className='display-6 fs-4'>So very sleepy by night.</h6>
                                <a className="btn btn-lg btn-primary demos-btn mx-auto my-5"  href="https://whatspoppingabq.streamlit.app/" target="_blank" rel="noreferrer">Latest Demos</a>
                            </Stack>
                        </Row>
                    </Col>
                    <Col className='honeyComb'>
                        <Image src={publicUrl + '/honeycomb-placeholder.png'} alt='profile'
                               width="100%"
                               height="auto"
                               className="d-inline-block align-top float-end rounded  "/>
                    </Col>
                </Row>
                </div>
            </div>
            <div className="skills">
                <Row className="hr  justify-content-center">
                    <Col md="auto" className="">
                        <h1 className='display-3 fs-1'>Skills at a Glance</h1>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <h3 className='display-3 fs-1'>Design and Development</h3>
                    <blockquote className="blockquote fs-5 pt-3">“"No observational problem will not be solved by more data.”</blockquote>
                    <figcaption className='blockquote-footer fs-6 mb-5'>Vera Rubin</figcaption>
                    <SkillsComponent />
                </Row>
                <Row className="hr justify-content-center">
                    <Col md="auto" className="">
                        <h1 className='display-3 fs-1'>Previous Experience</h1>
                    </Col>
                </Row>
                    <Resume />
            </div>

            </div>
        // </div>
    )
}

export default Home;