import React from 'react';

import { Badge, Container, Row, Col } from 'reactstrap';


const Diabetes = () => {
    return (
        <div>
            <div className="spacer" id="label-component">
                
                        
                        <Container>
                        <Row >
                        <Col lg="6" md="7" className="align-self-center">
                            <h1 className="title font-bold">What is Diabetes?</h1>
                            
                            <p className="m-t-90 m-b-30">Diabetes is a condition where the body either doesn’t produce enough insulin or can’t effectively use the insulin it does make, leading to high blood sugar levels. This can affect daily life by requiring constant monitoring of food intake, exercise, and medication to keep blood sugar balanced. Left unmanaged, diabetes can lead to serious health complications, however, with the right approach—focusing on personalized nutrition and lifestyle choices—diabetes can be effectively managed, leading to a healthier and more fulfilling life.  </p>
                            </Col>
                            </Row>
                            </Container>
                        
                
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h1>Heading <Badge color="secondary">New</Badge></h1>
                            <h2>Heading <Badge color="secondary">New</Badge></h2>
                            <h3>Heading <Badge color="secondary">New</Badge></h3>
                            <h4>Heading <Badge color="secondary">New</Badge></h4>
                            <h5>Heading <Badge color="secondary">New</Badge></h5>
                            <h6>Heading <Badge color="secondary">New</Badge></h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h4 className="card-title">Colored Badges</h4>
                            <Badge color="primary">Primary</Badge>{' '}
                            <Badge color="secondary">Secondary</Badge>{' '}
                            <Badge color="success">Success</Badge>{' '}
                            <Badge color="danger">Danger</Badge>{' '}
                            <Badge color="warning">Warning</Badge>{' '}
                            <Badge color="info">Info</Badge>{' '}
                            <Badge color="light" className="text-dark">Light</Badge>{' '}
                            <Badge color="dark">Dark</Badge>
                        </div>
                        <div className="mt-5">
                            <h4 className="card-title">Pills</h4>
                            <Badge color="primary" pill>Primary</Badge>{' '}
                            <Badge color="secondary" pill>Secondary</Badge>{' '}
                            <Badge color="success" pill>Success</Badge>{' '}
                            <Badge color="danger" pill>Danger</Badge>{' '}
                            <Badge color="warning" pill>Warning</Badge>{' '}
                            <Badge color="info" pill>Info</Badge>{' '}
                            <Badge color="light" className="text-dark" pill>Light</Badge>{' '}
                            <Badge color="dark" pill>Dark</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Diabetes;
