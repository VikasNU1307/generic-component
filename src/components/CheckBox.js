import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
function CheckApiExample(props) {
    const label = props.value;
    const [checkboxValid, setCheckboxValid] = useState(false);

  const handleCheckboxChange = (event) => {
    const check = event.target.checked;
   if(check == true){
    console.log(check);
   }
   else{
    console.log(check);
   }
    
    setCheckboxValid(check);
  };
  return (
    
    <Form style={{paddingLeft:"45%", width:'fit-content', alignItems:'center'}}>
      {['checkbox'].map((type) => (
        <div style={{}} key={type} className="mb-3">
          <Form.Check
          type="checkbox"
          id="check-api-checkbox"
          isValid={checkboxValid}
        >
          <Form.Check.Input style={{height:"15px", width:"30px"}}
            type="checkbox"
            onChange={handleCheckboxChange}
          />
            <Form.Check.Label style={{fontSize:"20px"}}>{`${label}`}</Form.Check.Label>
            {/* <Form.Control.Feedback type="valid">
             
            </Form.Control.Feedback> */}
          </Form.Check>
        </div>
      ))}
    </Form>
   
  );
}

export default CheckApiExample;