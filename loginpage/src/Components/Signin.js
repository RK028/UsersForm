import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import '../Styles/form.css';


function Signin() {

    const history =useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] =useState('')
    const [dob, setDOB] = useState('')

    async function submit(e){
        e.preventDefault();

        try{
           await axios.post("http://localhost:8000/signin",{
            name,dob,email,password
           }) 
           .then(res=>{
            if(res.data == "exist"){
                alert("User Alreadly exits")
            }
             else if(res.data =="notexist"){
                history("/home",{state:{id:email}})
            }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch{
            console.log(e);

        }
    }
  return (
    <div>
        <div className="container">
            <div className="text">Registration</div>
            <form action="POST">
                <div className="data">
                    <label htmlFor="name">Full Name</label>
                    <input type="name" name="username" id="username"  onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="data">
                        <label htmlFor="date">Date Of Brith</label>
                        <input type="date" name="dateofbirth" id="dateofbirth" onChange={(e)=>{setDOB(e.target.value)}} />
                    </div>
                <div className="data">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                <div className="data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"  onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="data">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" name="confirmpassword" id="confirmpassword" />
                </div>
                <div className="forgot-pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="btn">
                    <button type="submit" onClick={submit}>Register</button>
                </div>
                <div className="signup-link">
                <div><Link to="/">Login IN</Link> </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Signin;
