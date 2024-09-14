import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import banner from '../../../assets/images/form-banners/banner1/banner-img.png';
import {motion} from 'framer-motion';




const AboutUs = () => {
    return (
        <div id="element">
            <div className="spacer" id="reactstrap-components">
                <Container>
                    <Row >
                        <Col lg="6" md="7" className="align-self-center">
                        
                            <motion.h1 initial={{ opacity: 0, y:50 }} whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5} }} viewport={{once:false, amount: 0.5}} className="title font-bold">About Us</motion.h1>
                            
                            <motion.p initial={{ opacity: 0, y:50 }} whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5} }} viewport={{once:false, amount: 0.5}} className="m-t-90 m-b-30">At Diabite, we are dedicated to transforming how people with diabetes manage their health. Our mission is to promote a more holistic approach to diabetes care, focusing on the power of personalized nutrition rather than relying solely on medications and needles. </motion.p>
                               
                           
                            <motion.p initial={{ opacity: 0, y:50 }} whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5} }} viewport={{once:false, amount: 0.5}} className="m-t-70 m-b-30"> By understanding each individual’s unique dietary needs, our platform generates customized meal plans designed to support balanced blood sugar levels and overall well-being.


To make it easier to stick to these plans, we also offer the convenience of purchasing recommended foods directly from our website. </motion.p>
                        </Col>
                        <Col lg="6" md="5" className="align-self-center ms-auto">
                                    <motion.img initial={{ opacity: 0, y:50 }} whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5} }} viewport={{once:false, amount: 0.5}} src={banner} alt="We are Digital Agency" className="img-fluid" />
                                </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div>
                            <Button color="primary">primary</Button>{' '}
                            <Button color="secondary">secondary</Button>{' '}
                            <Button color="success">success</Button>{' '}
                            <Button color="info">info</Button>{' '}
                            <Button color="warning">warning</Button>{' '}
                            <Button color="danger">danger</Button>{' '}
                            <Button color="link">link</Button>
                        </div>
                        <div className="mt-4">
                            <Button outline color="primary">primary</Button>{' '}
                            <Button outline color="secondary">secondary</Button>{' '}
                            <Button outline color="success">success</Button>{' '}
                            <Button outline color="info">info</Button>{' '}
                            <Button outline color="warning">warning</Button>{' '}
                            <Button outline color="danger">danger</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default AboutUs;



