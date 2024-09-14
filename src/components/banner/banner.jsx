import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">DiaBite</h1>
                        <h4 className="subtitle font-light">insert<br /> words</h4>
                        <Link to="/forms" className="btn btn-md m-t-30 btn-info-gradiant font-14">Take our Quiz</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
