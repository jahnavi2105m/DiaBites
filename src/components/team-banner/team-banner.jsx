import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBannerTeam = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">The Team</h1>
                        <h4 className="subtitle font-light">meet us fr<br /> words</h4>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBannerTeam;
