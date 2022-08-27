import "../SignIn/sign.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {signupUser ,loginUser} from "../../reducers/authReducer";
import { setData } from "../../reducers/authReducer";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const Signup = () =>{
    const navigate = useNavigate();
const selecter =useSelector((state) => state.authReducer.value);
const dispatch = useDispatch();

const [show,setShow] =useState(true);
const [data,setdata] = useState({
    username:'',
    email:'',
    password:''
});

const [loginData,setLoginData] = useState({
    email:'',
    password:''
})

const handelLchange = (event) =>{
    setLoginData ({...loginData,[event.target.name]:event.target.value})
}

const handelChange = (event) =>{
   console.log(event.target.value);
    setdata ({...data,[event.target.name]:event.target.value});
    
}



const submitLog = () =>{
    // localStorage.setItem('name',data.username);
    // console.log(loginData);
    localStorage.setItem('name',data.username);
 dispatch(loginUser(loginData)).then(
   unwrapResult
 ).then((res) => {
     console.log(res);
    navigate('/')
 }).catch((error) => {
     console.log(error);
 })   
}


const submit = () =>{
    localStorage.setItem('name',data.username);
       dispatch(setData(data))
    dispatch(signupUser(data)).then(
      unwrapResult
    ).then((res) => {
        console.log(res);
        localStorage.setItem("id",res.data.userId);
       navigate('/')
    }).catch((error) => {
        console.log(error);
    })   
}

    return(
       
        <div className="MainSign">
           <div className="maininput">
            {show ? 
            <><h1>SIGN IN</h1>
            <div className="inputField">
                <label>Name:</label>
                <input style={{padding:"10px 10px"}} name='username' onChange={handelChange} type="text" />
                <label>EmailID:</label>
                <input style={{padding:"10px 10px"}} name='email' onChange={handelChange} type="text" />
                <label>Password:</label>
                <input style={{padding:"10px 10px"}} name='password' onChange={handelChange} type="password" />
                <button onClick={() => {submit()}} style={{borderRadius:"5px",boxShadow:"initial",padding:"10px 10px"}}>SUBMIT</button>
                <p>Not a user... <button onClick={() => {setShow(!show)}}>SIGN UP</button></p>
            </div></> :
            <>
            <h1>SIGN UP</h1>
            <div className="inputField">
                <label>EmailID:</label>
                <input name='email' onChange={handelLchange} type="text" />
                <label>Password:</label>
                <input name='password' onChange={handelLchange} type="password" />
                <button onClick={() => {submitLog()}} style={{borderRadius:"5px",boxShadow:"initial"}}>SUBMIT</button>
                <p>Already a user... <button onClick={() => {setShow(!show)}}>SIGN IN</button></p>
            </div></>
            }
            
           </div>
           <div className="signimage">
            <img src={require("../../assets/images/19965538_6184215.jpg")} alt="" />
           </div>
           <div>

           </div>
        </div>
    
    )
}

export default Signup;