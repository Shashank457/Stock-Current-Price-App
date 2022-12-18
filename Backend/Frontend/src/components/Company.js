import './Company.css';
import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Company() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        cname:"", ccode:""
    });
  
    let name, value;
    const handleInputs = (event) => {
        name = event.target.name;
        value = event.target.value;
  
        setUser({...user, [name]:value});
    }
    const postData = async (event) => {
      event.preventDefault();
      const { cname, ccode } = user;
      console.log(user);
      const res = await fetch("/company", {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          cname, ccode
        })
      });
  
      const data = await res.json();
      const total = {data, user}
      navigate("/result",{state:total});
    }

  return (
    <div className='body'>
      <Form method = "POST">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Comapny Name</Form.Label>
        <Form.Control type="cname" name = "cname"
        value = {user.cname}
        onChange = {handleInputs}
        placeholder="Enter Company Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Company Code</Form.Label>
        <Form.Control type="ccode" name = "ccode"
        value = {user.ccode}
        onChange = {handleInputs}
        placeholder="Company Code" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick = {postData}>
        Check
      </Button>
    </Form>
    </div>
  );
}

export default Company;