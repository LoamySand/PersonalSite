import React from 'react';
import {Col, Image, Row, Stack, Table} from "react-bootstrap";
import Resume from './ResumeComponent';



function Home() {
    return(
        <div>
            <div className="background">
                <div>
                <Row className="text-center">
                    <Col className="float-left ">
                        <Row className='align-items-center justify-content-center pt-5'>
                            <Image className='profile-pic w-25' src='/profile.png'/>
                            <Image className='img-fluid w-50 h-50' src='/title.png'/>
                        </Row>
                        <Row className="mb-3 mt-5 intro-blurb">
                            <Stack>
                                <h6 className='display-6 fs-3'>Developer by day,</h6>
                                <h6 className='display-6 fs-4'>So very sleepy by night.</h6>
                                <a className="btn btn-lg btn-primary w-25 mx-auto my-5"  href="https://whatspoppingabq.streamlit.app/" target="_blank" rel="noreferrer">Latest Demos</a>
                            </Stack>
                        </Row>
                    </Col>
                    <Col className='honeyComb'>
                        <Image src='/honeycomb-placeholder.png' alt='profile'
                               width="100%"
                               height="auto"
                               className="d-inline-block align-top float-end rounded  "/>
                    </Col>
                </Row>
                </div>
            </div>
            <div className="mid text-center">
                <Row className="hr justify-content-center">
                    <Col md="auto" className="">
                        <h1 className='display-3 fs-1'>Skills at a Glance</h1>
                    </Col>
                </Row>
                <Row className='mb-lg-5'>
                    <h3 className='display-3 fs-1'>Design and Development</h3>
                    <blockquote className="blockquote fs-5 pt-3">“Absorb what is useful, Discard what is not, Add what is uniquely your own.”</blockquote>
                    <figcaption className='blockquote-footer fs-6'>Bruce Lee</figcaption>
                    <div className='align-items-center'>
                        {/*TODO Move to SkillsComponent*/}
                        <Table borderless className="skills-table d-inline-block m-4 ">
                            <thead className='text-start'>
                                <tr>
                                    <th className='skill-title'>Languages</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='skills-row'>
                                        <Table hover className="">
                                            <tbody>
                                            <tr className="skill">
                                                <td>T-SQL</td>
                                                <td>⭐⭐⭐⭐</td>
                                            </tr>
                                            <tr className="skill">
                                                <td>Javascript</td>
                                                <td>⭐⭐⭐⭐</td>
                                            </tr>
                                            <tr className="skill">
                                                <td>C++</td>
                                                <td>⭐⭐⭐</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </td>
                                    <td className='skills-row'>
                                        <Table hover className="">
                                            <tbody>
                                            <tr className="skill">
                                                <td>Python</td>
                                                <td>⭐⭐⭐</td>
                                            </tr>
                                            <tr className="skill">
                                                <td>Java</td>
                                                <td>⭐⭐</td>
                                            </tr>
                                            <tr className="skill">
                                                <td>C# .NET</td>
                                                <td>⭐⭐</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table borderless className="skills-table d-inline-block m-4">
                            <thead className='text-start'>
                                <tr>
                                    <th className='skill-title'>Frameworks</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='skills-row'>
                                        <Table hover className="">
                                            <tbody>
                                            <tr className="skill">
                                                <td>React JS</td>
                                                <td>⭐⭐⭐⭐</td>
                                            </tr>
                                            <tr className="skill">
                                                <td>ExpressJS</td>
                                                <td>⭐⭐⭐⭐</td>
                                            </tr>
                                            <tr className="skill">
                                                <td>Express</td>
                                                <td>⭐⭐⭐</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </td>
                                    <td className='skills-row'>
                                        <Table hover className="">
                                            <tbody>
                                            <tr className="skill">
                                                <td>jQuery</td>
                                                <td>⭐⭐</td>
                                            </tr>
                                            <tr className="skill">
                                                <td>MongoDB</td>
                                                <td>⭐⭐</td>
                                            </tr>
                                            <tr className="skill">
                                                <td>ASP.NET</td>
                                                <td>⭐⭐</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Row>
                <Row className="hr justify-content-center">
                    <Col md="auto" className="">
                        <h1 className='display-3 fs-1'>Previous Experience</h1>
                    </Col>
                </Row>
                <div className="mid">
                    <Resume />
                </div>

            </div>
        </div>
    )
}

export default Home;