import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container, Form, FormGroup, Input, Button } from 'reactstrap';

const FormComponent = () => {
  const navigate = useNavigate();
  let name = '';
  let email= '';
  let height= '';
  let weight= '';
  let age='';
  let sex='';
  let fitnessLevel= '';
  let diabetesType= '';
  let dietaryRestrictions= '';
 

  // Handle change for each input field
  const handlename = (e) => {
    const { key, value } = e.target;
    name = value
    console.log(key)
    console.log(value)
    console.log(name)
    sessionStorage.setItem('name',value)
  };

    // Handle change for each input field
    const handleemail = (e) => {
      const { key, value } = e.target;
      email = value
      console.log(key)
      console.log(value)
      console.log(email)
      sessionStorage.setItem('email',value)
    };

     // Handle change for each input field
     const handleheight = (e) => {
      const { key, value } = e.target;
      height = value
      console.log(key)
      console.log(value)
      console.log(height)
      sessionStorage.setItem('height',value)
    };

     // Handle change for each input field
     const handleweight = (e) => {
      const { key, value } = e.target;
      weight = value
      console.log(key)
      console.log(value)
      console.log(weight)
      sessionStorage.setItem('weight',value)
    };

     // Handle change for each input field
     const handleage = (e) => {
      const { key, value } = e.target;
      age = value
      console.log(key)
      console.log(value)
      console.log(age)
      sessionStorage.setItem('age',value)
    };

     // Handle change for each input field
     const handlesex = (e) => {
      const { key, value } = e.target;
      sex = value
      console.log(key)
      console.log(value)
      console.log(sex)
      sessionStorage.setItem('sex',value)
    };

     // Handle change for each input field
     const handleCal = (e) => {
      const { key, value } = e.target;
      cal = value
      console.log(key)
      console.log(value)
      console.log(cal)
      sessionStorage.setItem('cal',value)
    };

     // Handle change for each input field
     const handlefitness = (e) => {
      const { key, value } = e.target;
      fitnessLevel = value
      console.log(key)
      console.log(value)
      console.log(fitnessLevel)
      sessionStorage.setItem('fitnessLevel',value)
    };

     // Handle change for each input field
     const handletype = (e) => {
      const { key, value } = e.target;
      diabetesType = value
      console.log(key)
      console.log(value)
      console.log(diabetesType)
      sessionStorage.setItem('diabetesType',value)
    };

     // Handle change for each input field
     const handlerestrictions = (e) => {
      const { key, value } = e.target;
      dietaryRestrictions = value
      console.log(key)
      console.log(value)
      console.log(dietaryRestrictions)
      sessionStorage.setItem('dietaryRestrictions',value)
    };
    



  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  
    navigate("/result"); 
  };

  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Take Our Assessment</h1>
              <h6 className="subtitle">A healthier life starts here</h6>
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
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="text"
                              name="name"
                              placeholder="Name"
                              
                              onChange={handlename}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="email"
                              name="email"
                              placeholder="Email"
                              
                              onChange={handleemail}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="text"
                              name="height"
                              placeholder="Height"
                              
                              onChange={handleheight}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="text"
                              name="weight"
                              placeholder="Weight"
                            
                              onChange={handleweight}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="text"
                              name="Current Caloric Intake"
                              placeholder="Current Caloric Intake"
                              
                              onChange={handleCal}
                            />
                          </FormGroup>
                        </Col>
                   
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="text"
                              name="age"
                              placeholder="age"
                              
                              onChange={handleage}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="select"
                              name="sex"
                            
                              onChange={handlesex}
                            >
                              <option value="">Sex</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="select"
                              name="fitnessLevel"
                              
                              onChange={handlefitness}
                            >
                              <option value="">Fitness Level</option>
                              <option value="Sedentary">Sedentary</option>
                              <option value="Lightly active">Lightly active</option>
                              <option value="Moderately active">Moderately active</option>
                              <option value="Very active">Very active</option>
                              <option value="Extra active">Extra active</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="select"
                              name="diabetesType"
                              
                              onChange={handletype}
                            >
                              <option value="">Diabetes Type</option>
                              <option value="Type 1">Type 1</option>
                              <option value="Type 2">Type 2</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="select"
                              name="dietaryRestrictions"
                              
                              onChange={handlerestrictions}
                            >
                              <option value="">Dietary Restrictions</option>
                              <option value="Vegetarian">Vegetarian</option>
                              <option value="Lactose Intolerant">Lactose Intolerant</option>
                              <option value="Gluten Intolerant">Gluten Intolerant</option>
                              <option value="Nut Allergy">Nut Allergy</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            className="btn btn-success-gradiant btn-md btn-arrow m-t-20"
                            type="submit"
                          >
                            <span>
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
                      We run your given information through a series of algorithms to help you determine the best way to holistically improve your well-being.
                      <br /><br />
                      Through this, we are able to give you the best personalized meal plan on the market to help you manage both your caloric intake and insulin resistance.
                      <br /><br />
                      We know having diabetes is tough... so we're here to help you ditch the needle and grab a fork!
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FormComponent;
