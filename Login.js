import React,{useState} from 'react'
import './Login.css';
import {FaFacebook} from 'react-icons/fa';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Registration from './Registration.js'
import {Button,Form,FormGroup,Input} from 'reactstrap';
function Login() {

     const[email,setEmail]=useState('');
     const[password,setPassword]=useState('');


    <BrowserRouter>
    <Route path="/Registration" component={Registration}/>
     </BrowserRouter>

    const signinHandler=(event)=>{
           event.preventDefault();
           setEmail('');
           setPassword('');
    }

    const emailHandler=(event)=>{
        setEmail(event.target.value);
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }

    return (
        <Form>
        <div className="login" >
             <div className="inner_box">
             
            <h1 className="text-center"><FaFacebook className="logo"/><br/>SIGN IN</h1><br/>
           
                
             
               
                    {/* <label>First Name</label> */}
                   
                    <FormGroup>
             <Input className="mt-3" type="text" value={email} onChange={emailHandler} placeholder="Enter email address"/>
            </FormGroup>
               

               
                    {/* <label>Password</label> */}
                   
                    <FormGroup>
             <Input className="mt-3" type="password" value={password} onChange={passwordHandler} placeholder="Enter password"/>
            </FormGroup>
               
              
               

                 
            <Button  onClick={signinHandler}className="btn btn-primary p-2 mt-3" type="submit">SIGN IN</Button><br/>
            <br/>
            <div className="text">Don't have an account? Please
            <BrowserRouter>
             <Link to="Registration">sign up...</Link>
             </BrowserRouter>
            {/* <Link to="Registration">Here</Link> */}
           </div>
           


            </div>
        </div>
        </Form>
    )
}

export default Login
