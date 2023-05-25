import React from 'react'
import { BrowserRouter as Router, Route, Routes }
    from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import ForgetPasswordPage from './components/ForgotPasswordPage';
import SignInPage from './components/LoginPage';
import SignUpPage from './components/RegisterPage';
import Dailogbox from './components/dailogbox';
  
function App() {
    return (
        <div className='App'>
  
            <Router>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <SignInPage/> } />
                    <Route path="/register" element={ <SignUpPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    {/* <Route path="/home" component={ HomePage } /> */}
                    <Route path='/home' 
                        element={<Home />} />
                    <Route path='/create' 
                        element={<Create />} />
                    <Route path='/edit' 
                        element={<Edit />} />
                     <Route path='/dialogbox' 
                        element={<Dailogbox />} />
                </Routes>
            </Router>
        </div>
    );
}
  
export default App;
