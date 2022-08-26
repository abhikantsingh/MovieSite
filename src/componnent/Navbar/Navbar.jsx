import React, { useEffect } from "react";
import { useState } from "react";
import "../../componnent/Navbar/navbar.css";
import Searchs from "./Search.jsx"
import { useSelector , useDispatch} from 'react-redux'
import {changeBool} from "../../reducers/navState";
import { Outlet, Link } from "react-router-dom";

const Navbar = ({handelShow}) => {
  const data = useSelector((state) => state.navBar.value);
  const dispatch = useDispatch();
  const [Search, setSearch] = useState(true);
  const [show,setShow] = useState(true);
  const [isLog,setIsLog] =useState(true);
  const handelChange = () =>
  {
    setSearch(!Search);
  }
  const fuck = () =>{
    return <h1>hello</h1>
  }

  const handelLocal = () =>{
    console.log("i am here");
    localStorage.setItem('name',"");
    // console.log(localStorage.getItem('name'));
     setIsLog(!isLog);
  }

   useEffect(() =>{
      if(localStorage.getItem('name')!==null)
      setIsLog(false)
      else
      setIsLog(true)
   },[]);

  

  return (
    <>
      {Search ? (
        <div className="main">
         <Link to={"/"}>
         <img
            className="image_logo"
            src={require("../../assets/images/Book.jpeg")}
            alt="logo"
          ></img>
         </Link>
          <div className="Input">
            <input onClick={() => {handelChange() ; dispatch(changeBool())}} readonly="readonly" type="text" placeholder="Search..."></input>
           
          </div>
          <div className="Option">
            <select>
              <option>Location...</option>
              <option>Delhi NCR</option>
              <option>Noida</option>
              <option>chennai</option>
            </select>
          </div>
          {isLog ? (<Link to="/auth">
          <button
          onClick={() => {setShow(!show)}}
            style={{
              width: "100px",
              height: "50px",
              marginTop: "20px",
              color: "white",
              backgroundColor: "#F84464",
              borderRadius:"10px",
            }}
          >
            Sign In
          </button>
          </Link>) :
          (
          <>
          <button
          onClick={handelLocal}
           style={{
            width: "100px",
            height: "50px",
            marginTop: "20px",
            color: "white",
            backgroundColor: "#F84464",
            borderRadius:"10px",
          }}
          >logout</button>
          </>
          )}
        </div>
      ) : (
         <Searchs handelChange={handelChange}></Searchs>
      )}
    </>
  );
};

export default Navbar;
