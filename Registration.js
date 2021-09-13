import React,{useState} from 'react'
import './Registration.css';
import {Button,Label,Form,FormGroup,Input} from 'reactstrap';
function Registration() {

const[fname,setFname]=useState('');
const[lname,setLname]=useState('');
const[email,setEmail]=useState('');
const[dob,setDob]=useState('');
const[password,setPassword]=useState('');
const[cpassword,setCpassword]=useState('');

const fnameHadler=(event)=>{
    setFname(event.target.value);
}
const lnameHadler=(event)=>{
    setLname(event.target.value);
}
const emailHadler=(event)=>{
    setEmail(event.target.value);
}
const dobHadler=(event)=>{
    setDob(event.target.value);
}
const passwordHadler=(event)=>{
    setPassword(event.target.value);
}
const cpasswordHadler=(event)=>{
    setCpassword(event.target.value);
}
const submitHandler=(event)=>{
    event.preventDefault();
    setFname('');
    setLname('');
    setEmail('');
    setDob('');
    setPassword('');
    setCpassword('');

}

    return (
        <Form className="signup">
            <h1 className="heading  text-center">SIGN UP</h1>
            <h4 className="text-center">Please fill this form to create an account!</h4>
            <FormGroup>
             
             <Input className="mt-3" type="type" value={fname} onChange={fnameHadler} placeholder="Enter first name"/>
            </FormGroup>

            <FormGroup>
             <Input className="mt-3" type="type" value={lname} onChange={lnameHadler} placeholder="Enter last name"/>
            </FormGroup>

            <FormGroup> 
             <Input className="mt-3" type="email" value={email}  onChange={emailHadler}placeholder="Enter email address"/>
            </FormGroup>
            <FormGroup>
         
             <Input className="mt-3" type="int"  value={dob} onChange={dobHadler} placeholder="Enter your date of birth"/>
            </FormGroup>
            <FormGroup>
             <Label className="mt-3">Gender:</Label>
             <Input  className="mt-4 "type="radio" value="Male" name="gender" /> Male
        <Input className="mt-4" type="radio" value="Female" name="gender" /> Female
        <Input className="mt-4" type="radio" value="Other" name="gender" /> Other
            </FormGroup>
          
            <FormGroup>
             
             <Input className="mt-3" type="password" value={password} onChange={passwordHadler} placeholder="Enter password"/>
            </FormGroup>
            <FormGroup>
             
             <Input className="mt-3" type="password" value={cpassword} onChange={cpasswordHadler} placeholder="Enter password again"/>
            </FormGroup>

            <Button onClick={submitHandler} className="btn mt-3">Sign up</Button>
            </Form>
    )
}

export default Registration
