import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import '../App.css'
const HeaderStyle = {
    maxwidth: "100%",
    height: "100vh",
     background: "#407395",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
     display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    
}


export default function SignInPage() {
    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto" >
        <p style={{fontSize: '5rem'}}>
            <span style={{fontWeight: 'bold'}}>Please Sign In</span>
      </p>
            
            <form action="/home" align="center" className="d-grid gap-2"
                style={{ margin: '0rem',backgroundColor:'black' }}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit"  variant="primary" >Login</button>
                </p>
            </form>
            <footer >
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
    )
    
}