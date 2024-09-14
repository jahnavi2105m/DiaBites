import React, { useState } from 'react';
import { Col, FormGroup, Input, Button } from 'reactstrap';

const ResultComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    setResult(`You entered: ${inputValue}`);
  };

  return (
    <div>
      <Col lg="6">
        <FormGroup className="m-t-15">
          <Input 
            type="text" 
            placeholder="Enter something" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
        </FormGroup>
      </Col>
      <Button color="primary" onClick={handleSubmit}>Submit</Button>
      
      {result && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          {result}
        </div>
      )}
    </div>
  );
};

export default ResultComponent;
