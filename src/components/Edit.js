// Filename - Edit.js
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../assets/images/loginimage.png';




function Edit() {

	// Here usestate has been used in order
	// to set and get values from the jsx
	const [first_name, setfirstname] = useState('');
	const [last_name, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('');
    const [DateOfBirth, setdateofbirth] = useState('');
	const [id, setid] = useState('');

	
	let history = useNavigate()

	
	 var index = array.map(function (e) {
	 	return e.id; }).indexOf(id);

	const handelSubmit = (e) => {

		e.preventDefault();
		
		let a = array[index]

		
		a.First_name= first_name
		a.Last_name= last_name
        a.email=email
        a.gender=gender
        a.DateOfBirth=DateOfBirth

		// Redirecting to main page
		history('/home')
	}


	// Useeffect take care that page will
	// be rendered only once
	useEffect(() => {
		setfirstname(localStorage.getItem('First_name'))
		setlastname(localStorage.getItem('Last_name'))
        setemail(localStorage.getItem('email'))
        setgender(localStorage.getItem('gender'))
        setdateofbirth(localStorage.getItem('DateOfBirth'))
		setid(localStorage.getItem('id'))
	}, [])

	return (
		<div class="p-3 mb-2 bg-secondary text-white">
			
			<button onClick={() => history(-1) }  style={{float:'left'}}>Back</button>
			<h class="text-dark" style={{fontSize:50 ,textAlign:"center"}}>UPDATE DETAILS
			<Form className="d-grid gap-2" class="border border-success"
				style={{ margin: '10rem',alignItems:'center',padding:'rem',backgroundColor:'black' }}>

				{/* setting a name from the
					input textfiled */}
				<Form.Group className="mb-3"
					controlId="formBasicEmail">
					<Form.Control value={first_name}
						onChange={e => setfirstname(e.target.value)}
						type="text" placeholder="Enter first_name" />
				</Form.Group>

				{/* setting a age from the input textfiled */}
				<Form.Group className="mb-3"
					controlId="formBasicPassword">
					<Form.Control value={last_name}
						onChange={e => setlastname(e.target.value)}
						type="text" placeholder="last_name" />
				</Form.Group>

                <Form.Group className="mb-3"
					controlId="formBasicPassword">
					<Form.Control value={email}
						onChange={e => setemail(e.target.value)}
						type="text" placeholder="email" />
				</Form.Group>

                <Form.Group className="mb-3"
					controlId="formBasicPassword">
					<Form.Control value={gender}
						onChange={e => setgender(e.target.value)}
						type="text" placeholder="gender" />
				</Form.Group>

                <Form.Group className="mb-3"
					controlId="formBasicPassword">
					<Form.Control value={DateOfBirth}
						onChange={e => setdateofbirth(e.target.value)}
						type="text" placeholder="dateofbirth" />
				</Form.Group>




				{/* Hadinling an onclick event
					running an edit logic */}
				<Button
					onClick={e => handelSubmit(e)}
					variant="primary" type="submit" size="lg">
					Update
				</Button>

				{/* Redirecting to main page after editing */}
				<Link className="d-grid gap-2" to='/home'>
					<Button variant="warning"
						size="lg">
						Home
					</Button>
				</Link>
			</Form>
			</h>
		</div>
	)
}

export default Edit
