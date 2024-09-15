/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import img1 from '../../../assets/images/portfolio/img1.jpg';
import img2 from '../../../assets/images/portfolio/img2.jpg';
import img3 from '../../../assets/images/portfolio/img3.jpg';
import img4 from '../../../assets/images/portfolio/img4.jpg';

const PortfolioComponent = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Portfolio</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. It's quite easy to create your own dream website &amp; dashboard in no time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Our Recent Work</h2>
                            <h6 className="subtitle">You can rely on our amazing features list, and our customer service will be a great experience for you without a doubt and in no time.</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        {/* First Row: 2 items */}
                        <Col md="6">
                            <Card className="card-shadow">
                                <a href="#" className="img-ho">
                                    <img className="card-img-top" src={img1} alt="wrappixel kit" />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Branding for Theme Designer</h5>
                                    <p className="m-b-0 font-14">Digital Marketing</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="card-shadow">
                                <a href="#" className="img-ho">
                                    <img className="card-img-top" src={img2} alt="wrappixel kit" />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Button Designs Free</h5>
                                    <p className="m-b-0 font-14">Search Engine</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        {/* Second Row: 2 items */}
                        <Col md="6">
                            <Card className="card-shadow">
                                <a href="#" className="img-ho">
                                    <img className="card-img-top" src={img3} alt="wrappixel kit" />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Sionage Mockup</h5>
                                    <p className="m-b-0 font-14">Wall Mockup</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="card-shadow">
                                <a href="#" className="img-ho">
                                    <img className="card-img-top" src={img4} alt="wrappixel kit" />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Hard Cover Book Mock</h5>
                                    <p className="m-b-0 font-14">Book Covers</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PortfolioComponent;
