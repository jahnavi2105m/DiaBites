/*page for clients to enter */ 

/* eslint-disable */
import React from 'react';
import { Row, Col, Container,Form, FormGroup, Input, Button, } from 'reactstrap';

const form = () => {
    return (
      <div>
        <div className="spacer bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Take Our Assesment</h1>
                <h6 className="subtitle">
                  Here you can check Demos we created based on WrapKit. Its quite
                  easy to Create your own dream website &amp; dashboard in
                  No-time.
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact1">
          <Container>
            <Row>
              <div className="spacer">
                <Row className="m-0">
                  <Col lg="8">
                    <div className="contact-box p-r-40">
                      <h4 className="title">Personal Information</h4>
                      <Form>
                        <Row>
                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="text" placeholder="name" />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="text" placeholder="email" />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup className="m-t-15">
                              <Input
                                type="textarea"
                                name="text"
                                placeholder="message"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <Button
                              type="submit"
                              className="btn btn-danger-gradiant m-t-20 btn-arrow"
                            >
                              <span>
                                {" "}
                                SUBMIT <i className="ti-arrow-right"></i>
                              </span>
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="detail-box p-40 bg-info">
                      <h2 className="text-white">How it Works</h2>
                      <p className="text-white m-t-30 op-8">
                        251 546 9442
                        <br /> info@wrappixel.com
                      </p>
                      <p className="text-white op-8">
                        601 Sherwood Ave.
                        <br /> San Bernandino, CA 92404
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
          </Container>

    
            <div className="static-slider3">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" className="align-self-center text-center">
                            <h1 className="title">I’m Johanthan Doe, an <b className="font-bold">Entreprenuer, Designer & Front-end Developer</b>, Making <span className="text-success-gradiant font-bold typewrite" data-period="2000" data-type='[ "Photoshop", "Web Application", "Web Designing", "Web Development" ]'></span></h1>
                            <a className="btn btn-success-gradiant btn-md btn-arrow m-t-20" data-toggle="collapse" href=""><span>Checkout My Work <i className="ti-arrow-right"></i></span></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </div>
    );
};

export default form;