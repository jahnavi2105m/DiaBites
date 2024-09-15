import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import {motion} from 'framer-motion';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <motion.h1 initial={{ opacity: 0, y:50 }} whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5} }} viewport={{once:false, amount: 0.5}} className="title">DiaBite</motion.h1>
                        <motion.h4 initial={{ opacity: 0, y:50 }} whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5} }} viewport={{once:false, amount: 0.5}} className="subtitle font-light">Ditch the Needle, Grab the Fork<br /> </motion.h4>
                        <motion.Link initial={{ opacity: 0, y:50 }} whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5} }} viewport={{once:false, amount: 0.5}} to="/forms" className="btn btn-md m-t-10 btn-info-gradiant font-14">Take our Quiz</motion.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
