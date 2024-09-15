import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import bluerryoats_almonds from '../../assets/images/bluerryoats_almonds.jpg'; // Adjust the path based on your project structure
import Tuna_Apple from '../../assets/images/Tuna_Apple.jpg'; // Adjust the path based on your project structure
import BabyCarrotsAndHummus from '../../assets/images/BabyCarrotsAndHummus.jpg'; // Adjust the path based on your project structure
import lentil_penne_turkey from '../../assets/images/lentil_penne_turkey.jpg'; // Adjust the path based on your project structure


import Groq from "groq-sdk";


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
              <h2 className="title">Your Personalized Meals</h2>
              <h6 className="subtitle">Healthy, nutritious and satisfying meals, 4 times a day!</h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            {/* First Row: 2 items */}
            <Col md="6">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img className="card-img-top" src={bluerryoats_almonds} alt="Portfolio item 1" />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Blueberry And Almond Oats</h5>
                </CardBody>
              </Card>
              <p>For a delicious breakfast! <br></br> Ingredients: 3/4 cup blueberries, 1 cup oatmeal, 1 oz almonds, 1 tsp chia seeds
               <br></br>How to cook: Cook oatmeal and stir in blueberries, almonds, chia. 
               <br></br>A delicious meal with 300 calories and 75g of carbs!
              </p>
            </Col>
            <Col md="6">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img className="card-img-top" src={Tuna_Apple} alt="Portfolio item 2" />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Tuna and Apple Sandwich</h5>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="m-t-40">
            {/* Second Row: 2 items */}
            <Col md="6">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img className="card-img-top" src={BabyCarrotsAndHummus} alt="Portfolio item 3" />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Baby Carrots and Hummus</h5>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <img className="card-img-top" src={lentil_penne_turkey} alt="Portfolio item 4" />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Lentil Penne with Turkey</h5>
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
