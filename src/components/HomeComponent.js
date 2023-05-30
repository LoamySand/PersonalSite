import React from 'react';
import {Col, Image, Row, Stack, Table} from "react-bootstrap";



function Home() {
    return(
        <div>
            <div className="background">
                <div>
                <Row className="text-center">
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
                {/*TODO move to ExperienceComponent*/}
                {/*TODO fill out experience blocks*/}
                <Row className='text-start'>
                    <Row className='justify-content-start pb-5 my-4'>
                        <Col className="col-md-2 col-2 offset-1 text-center my-auto">
                            <span className='fa-stack fa-5x'>
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-graduation-cap fa-stack-1x experience-icon"></i>
                            </span>
                            {/*<Image className="experience-icon" roundedCircle src='/profile.png'/>*/}
                        </Col>
                        <Col className=" col-md-6 offset-2 p-4">
                            <h6 className='display-6 fs-4'>B.S in Computer Science | Minor in Mathematics</h6>
                            <h6 className='display-6 fs-6'>University of Arkansas at Little Rock - Donaghey Scholar Full ride Recipient</h6>
                            <blockquote className="blockquote fs-6">
                                <p className="mb-0">I spent four years deep diving into the state of the art, industry standard technologies that are used to build the world we see today. I designed and engineered software, hardware, operating systems, and databases. I gained insight into the fundamentals of information transfer and computation theory.</p>
                            </blockquote>
                        </Col>
                    </Row>
                    <Row className='justify-content-start'>
                        <Col className=" col-md-6 offset-1 p-4">
                            <h6 className='display-6 fs-4'>Barista</h6>
                            <h6 className='display-6 fs-6'>Starbucks</h6>
                            <blockquote className="blockquote fs-6">
                                <p className="mb-0">Through this humble beginning, I learned essential teamwork skills. Constantly pushing the team to perform better and better. We worked tirelessly to provide the best possible experience for each guest and create a sacred and friendly 'Third Place', strengthening our empathy and communication skills in the process.</p>
                            </blockquote>
                        </Col>
                        <Col className="col-md-2 col-2 offset-2 text-center my-auto">
                            <span className='fa-stack fa-5x'>
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-coffee fa-stack-1x experience-icon"></i>
                            </span>
                        </Col>
                    </Row>
                    <Row className='justify-content-start py-5 my-4'>
                        <Col className="col-md-2 col-2 offset-1 text-center my-auto">
                            <span className='fa-stack fa-5x'>
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-database fa-stack-1x experience-icon"></i>
                            </span>
                        </Col>
                        <Col className=" col-md-6 offset-2 p-4">
                            <h6 className='display-6 fs-4'>Records Management Intern</h6>
                            <h6 className='display-6 fs-6'>Arkansas Department of Energy and Environment</h6>
                            <blockquote className="blockquote fs-6">
                                <p className="mb-0">As a part of the Records Management team, I worked directly with each division under AE&E. We maintained the document database to ensure all historical and compliance documentation was preserved.</p>
                            </blockquote>
                        </Col>
                    </Row>
                    <Row className='justify-content-start'>
                        <Col className=" col-md-6 offset-1 p-4">
                            <h6 className='display-6 fs-4'>Customer Service Representative</h6>
                            <h6 className='display-6 fs-6'>Bank of America through Teletech</h6>
                            <blockquote className="blockquote fs-6">
                                <p className="mb-0">As a reprentative for Bank of America CashPay customers, I worked directly with customers to provide solutions to their problems. Additionally, I created and distributed educational material to the customer service team to ensure consistency in our care. </p>
                            </blockquote>
                        </Col>
                        <Col className="col-md-2 col-2 offset-2 text-center my-auto">
                            <span className='fa-stack fa-5x'>
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-comments fa-stack-1x experience-icon"></i>
                            </span>
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