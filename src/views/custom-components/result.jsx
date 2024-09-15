import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();


  const name = sessionStorage.getItem("name")
  const email = sessionStorage.getItem("email")
  const height = sessionStorage.getItem("height")
  const weight = sessionStorage.getItem("weight")
  const age = sessionStorage.getItem("age")
  const sex = sessionStorage.getItem("sex")
  const fitnessLevel = sessionStorage.getItem("fitnessLevel")
  const diabetesType = sessionStorage.getItem("diabetesType")
  const dietaryRestrictions = sessionStorage.getItem("dietaryRestrictions")
  const cal = sessionStorage.getItem("cal")

  return (
    <div>
      <h1>Result Page</h1> 
      {name ? (
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Height:</strong> {height}</p>
          <p><strong>Weight:</strong> {weight}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Sex:</strong> {sex}</p>
          <p><strong>Fitness Level:</strong> {fitnessLevel}</p>
          <p><strong>Diabetes Type:</strong> {diabetesType}</p>
          <p><strong>Dietary Restrictions:</strong> {dietaryRestrictions}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ResultPage;
