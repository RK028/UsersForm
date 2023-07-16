import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/form.css";

  function Login() {

    const history =useNavigate();
    const [email,setEmail] =useState('')
    const [password, setPassword] = useState('')

     async function submit(e){
        e.preventDefault();

        try{
             await axios.post("http://localhost:8000/login",{
            email,password
           }) 
           .then(res=>{
            if(res.data.status == true){
                history('/home')
            }
             else if(res.data.status == false){
                alert("User have not Signin")
            }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
          
        }
        catch(e){
            console.log(e);

        }
    }
  return (
    <div>
            <div className="container">
                <div className="text">User Login</div>
                <form action="POST">
                    <div className="data">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="data">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div className="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="btn">
                    <button type="submit" onClick={submit}>LOGIN</button>
                    </div>
                    <div className="signup-link">
                        <div><Link to="/signin">SIGN IN</Link> </div>
                    </div>
                </form>
            </div>
        </div>
  );
}

export default Login;
