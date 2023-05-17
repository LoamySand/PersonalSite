import React from 'react';
import {Col, Container, Image, Nav, Navbar, Row, Stack, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";


function Home() {
    return(
        <div>
            <div className="background">
                <Row className="text-center">
                    {/*TODO Make one column on small screen*/}
                    <Col className="float-left">
                        <Row className="intro-blurb">
                            <Stack>
                                <h1 className='display-3 fs-1'><strong>Hi! I'm Lane</strong></h1>
                                <h6 className='display-6 fs-4'>Developer by day,</h6>
                                <h6 className='display-6 fs-5'>So very sleepy by night.</h6>
                            </Stack>
                        </Row>
                    </Col>
                    <Col>
                        <Image src='/honeycomb-placeholder.png' alt='profile'
                               width="100%"
                               height="auto"
                               className="d-inline-block align-top float-end rounded"/>
                    </Col>
                </Row>
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
                    <figcaption class='blockquote-footer fs-6'>Bruce Lee</figcaption>
                    <div className='align-items-center '>
                        <Table className="skills-table d-inline-block m-4 ">
                            <thead className='text-start'>
                            <tr>
                                <th className='skill-title'>Languages</th>
                                <th></th>
                            </tr>
                            </thead>
                            <td className='fs-1'>
                                <Table hover className="">
                                    <tr className="skill">
                                        <td>C++</td>
                                        <td>⭐⭐⭐⭐</td>
                                    </tr>
                                    <tr className="skill">
                                        <td>Javascript</td>
                                        <td>⭐⭐⭐</td>
                                    </tr>
                                    <tr className="skill">
                                        <td>Java</td>
                                        <td>⭐⭐⭐</td>
                                    </tr>
                                </Table>
                            </td>
                            <td>
                                <Table hover className="">
                                    <tr className="skill">
                                        <td>SQL</td>
                                        <td>⭐⭐</td>
                                    </tr>
                                    <tr className="skill">
                                        <td>Python</td>
                                        <td>⭐⭐</td>
                                    </tr>
                                    <tr className="skill">
                                        <td>C# .NET</td>
                                        <td>⭐⭐</td>
                                    </tr>
                                </Table>
                            </td>
                        </Table>
                        <Table className="skills-table d-inline-block m-4">
                            <thead className='text-start'>
                            <tr>
                                <th className='skill-title'>Frameworks</th>
                                <th></th>
                            </tr>
                            </thead>
                            <td>
                                <Table hover className="">
                                    <tr className="skill">
                                        <td>Bootstrap</td>
                                        <td>⭐⭐⭐⭐</td>
                                    </tr>
                                    <tr className="skill">
                                        <td>React</td>
                                        <td>⭐⭐⭐</td>
                                    </tr>
                                    <tr className="skill">
                                        <td>Express</td>
                                        <td>⭐⭐⭐</td>
                                    </tr>
                                </Table>
                            </td>
                            <td>
                                <Table hover className="">
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
                                </Table>
                            </td>
                        </Table>
                    </div>
                </Row>
                <Row className="hr justify-content-center">
                    <Col md="auto" className="">
                        <h1 className='display-3 fs-1'>Previous Experience</h1>
                    </Col>
                </Row>
                <Row></Row>
                <Row>

                </Row>

            </div>
        </div>
    )
}

export default Home;