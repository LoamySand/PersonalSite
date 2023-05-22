import React from 'react';
import {Col, Image, Row, Stack, Table} from "react-bootstrap";



function Home() {
    return(
        <div>
            <div className="background">
                <div>
                <Row className="text-center">
                    {/*TODO Make one column on small screen*/}
                    <Col className="float-left ">
                        <Row className='justify-content-center'>
                            <Image className='w-75' src='/title.png'/>
                            <Image roundedCircle className='profile-pic w-50' src='/profile.png'/>
                        </Row>
                        <Row className="mb-3 mt-3 intro-blurb">
                            <Stack>
                                <h6 className='display-6 fs-3'>Developer by day,</h6>
                                <h6 className='display-6 fs-4'>So very sleepy by night.</h6>
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
                                            </tbody>
                                        </Table>
                                    </td>
                                    <td className='skills-row'>
                                        <Table hover className="">
                                            <tbody>
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
                {/*<Row className='mb-lg-5'>*/}
                {/*    <h3 className='display-3 fs-1'>Team Work</h3>*/}
                {/*    <blockquote className="blockquote fs-5 pt-3">“Absorb what is useful, Discard what is not, Add what is uniquely your own.”</blockquote>*/}
                {/*    <figcaption class='blockquote-footer fs-6'>Bruce Lee</figcaption>*/}
                {/*    <div className='align-items-center'>*/}
                {/*        Content*/}
                {/*    </div>*/}
                {/*</Row>*/}
                <Row className="hr justify-content-center">
                    <Col md="auto" className="">
                        <h1 className='display-3 fs-1'>Previous Experience</h1>
                    </Col>
                </Row>
                <Row className='text-start'>
                    <Row className='justify-content-start py-5 my-4'>
                        <Col className="col-md-2 col-2 offset-1 text-center my-auto">
                            <Image className="experience-icon" roundedCircle src='/profile.png'/>
                        </Col>
                        <Col className=" col-md-6 offset-2 p-4">
                            <h6 className='display-6 fs-4'>B.S in Computer Science | Minor in Mathematics</h6>
                            <h6 className='display-6 fs-6'>University of Arkansas at Little Rock - Donaghey Scholar Full ride Recipient</h6>
                            <blockquote className="blockquote fs-6">
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.consectetur adipiscing elit.
                                    Integer posuere erat a ante. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </blockquote>
                        </Col>
                    </Row>
                    <Row className='justify-content-start'>
                        <Col className=" col-md-6 offset-1 p-4">
                            <h6 className='display-6 fs-4'>B.S in Computer Science | Minor in Mathematics</h6>
                            <h6 className='display-6 fs-6'>University of Arkansas at Little Rock - Donaghey Scholar Full ride Recipient</h6>
                            <blockquote className="blockquote fs-6">
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.consectetur adipiscing elit.
                                    Integer posuere erat a ante. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </blockquote>
                        </Col>
                        <Col className="col-md-2 col-2 offset-2 text-center my-auto">
                            <Image className="experience-icon" roundedCircle src='/profile.png'/>
                        </Col>
                    </Row>
                    <Row className='justify-content-start py-5 my-4'>
                        <Col className="col-md-2 col-2 offset-1 text-center my-auto">
                            <Image className="experience-icon" roundedCircle src='/profile.png'/>
                        </Col>
                        <Col className=" col-md-6 offset-2 p-4">
                            <h6 className='display-6 fs-4'>B.S in Computer Science | Minor in Mathematics</h6>
                            <h6 className='display-6 fs-6'>University of Arkansas at Little Rock - Donaghey Scholar Full ride Recipient</h6>
                            <blockquote className="blockquote fs-6">
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.consectetur adipiscing elit.
                                    Integer posuere erat a ante. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </blockquote>
                        </Col>
                    </Row>
                    <Row className='justify-content-start'>
                        <Col className=" col-md-6 offset-1 p-4">
                            <h6 className='display-6 fs-4'>B.S in Computer Science | Minor in Mathematics</h6>
                            <h6 className='display-6 fs-6'>University of Arkansas at Little Rock - Donaghey Scholar Full ride Recipient</h6>
                            <blockquote className="blockquote fs-6">
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.consectetur adipiscing elit.
                                    Integer posuere erat a ante. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </blockquote>
                        </Col>
                        <Col className="col-md-2 col-2 offset-2 text-center my-auto">
                            <Image className="experience-icon" roundedCircle src='/profile.png'/>
                        </Col>
                    </Row>

                </Row>
                <Row>

                </Row>

            </div>
        </div>
    )
}

export default Home;