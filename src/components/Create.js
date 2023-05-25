import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

  
function Create() {
     
  
    // Making usestate for setting and
    // fetching a value in jsx
    const [first_name, setfirstname] = useState('');
    const [last_name, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('');
    const [DateOfBirth, setdateofbirth] = useState('');

    // Using useNavigation for redirecting to pages
    let history = useNavigate();
  
    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault();  // Prevent reload
  
        const ids = uuid() // Creating unique id
        let uni = ids.slice(0, 8) // Slicing unique id
  
        // Fetching a value from usestate and 
        // pushing to javascript object
        let i = first_name, b =last_name,c=email,d=gender,f=DateOfBirth
        array.push({ id: uni, First_name: i,  Last_name: b,email:c,gender:d,DateOfBirth:f })
  
        // Redirecting to home page after creation done
        history('/home')
    }
  
    return (
        
        <div class="text-bg-dark p-3">
            <h class="text-primary" style={{fontSize:50 ,textAlign:"center"}}>ENTER DETAILS
             <button onClick={() => history(-1) }  style={{float:'left'}}>Back</button>
            <Form className="d-grid gap-2" 
                style={{ margin: '10rem',backgroundColor:'black' }}>
  
                {/* Fetching a value from input textfirld 
                    in a setname using usestate*/}
                <Form.Group className="mb-3" 
                    controlId="formBasicName">
                    <Form.Control onChange=
                        {e => setfirstname(e.target.value)}
                        type="text"
                        placeholder="Enter first_name" required />
                </Form.Group>
  
                {/* Fetching a value from input textfirld in
                    a setage using usestate*/}
                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setlastname(e.target.value)}
                        type="text"
                        placeholder="Enter last_name" required />
                </Form.Group>

                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setemail(e.target.value)}
                        type="text"
                        placeholder="email" required />
                </Form.Group>

                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setgender(e.target.value)}
                        type="text"
                        placeholder="gender" required />
                </Form.Group>

                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setdateofbirth(e.target.value)}
                        type="text"
                        placeholder="DateOfBirth" required />
                </Form.Group>
  
  
  
  
                {/* handing a onclick event in button for
                    firing a function */}
                <Button
                    onClick={e => handelSubmit(e)}
                    variant="primary" type="submit">
                    Submit
                </Button>
  
                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to='/home'>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
            </h>
            
        </div>
    )
}
  
export default Create