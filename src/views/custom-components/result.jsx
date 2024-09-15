import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import BabyCarrotsAndHummus from '../../../assets/images/BabyCarrotsAndHummus.jpg'; // Adjust the path based on your project structure
import bluerryoats_almonds from '../../../assets/images/bluerryoats_almonds.jpg'; // Adjust the path based on your project structure
import lentil_penne_turkey from '../../../assets/images/lentil_penne_turkey.jpg'; // Adjust the path based on your project structure
import Tuna_Apple from '../../../assets/images/Tuna_Apple.jpg'; // Adjust the path based on your project structure

const ResultPage = () => {
  const location = useLocation();

  // Get stored data from sessionStorage
  const name = sessionStorage.getItem("name");
  const email = sessionStorage.getItem("email");
  const height = sessionStorage.getItem("height");
  const weight = sessionStorage.getItem("weight");
  const age = sessionStorage.getItem("age");
  const sex = sessionStorage.getItem("sex");
  const fitnessLevel = sessionStorage.getItem("fitnessLevel");
  const diabetesType = sessionStorage.getItem("diabetesType");
  const dietaryRestrictions = sessionStorage.getItem("dietaryRestrictions");
  const cal = sessionStorage.getItem("cal");

  return (
    <div>
      {/* User Info Section */}
      

      {/* Portfolio Section */}
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Our Recent Work</h2>
              <h6 className="subtitle">You can rely on our amazing features list and customer service.</h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            {/* First Row: 2 items */}
            <Col md="6">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img className="card-img-top" src={BabyCarrotsAndHummus} alt="Portfolio item 1" />
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
                  <img className="card-img-top" src={bluerryoats_almonds} alt="Portfolio item 2" />
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
                  <img className="card-img-top" src={lentil_penne_turkey} alt="Portfolio item 3" />
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
                  <img className="card-img-top" src={Tuna_Apple} alt="Portfolio item 4" />
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
};

export default ResultPage;
