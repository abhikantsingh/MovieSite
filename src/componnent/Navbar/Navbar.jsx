import React from "react";
import { useState } from "react";
import "../../componnent/Navbar/navbar.css";
import Searchs from "./Search.jsx"
import { useSelector , useDispatch} from 'react-redux'
import {changeBool} from "../../reducers/navState";

const Navbar = ({handelShow}) => {
  const data = useSelector((state) => state.navBar.value);
  const dispatch = useDispatch();
  const [Search, setSearch] = useState(true);
  const handelChange = () =>
  {
    setSearch(!Search);
  }
  const fuck = () =>{
    return <h1>hello</h1>
  }

  return (
    <>
      {Search ? (
        <div className="main">
          <img
            className="image_logo"
            src={require("../../assets/images/Book.jpeg")}
            alt="logo"
          ></img>
          <div className="Input">
            <input type="text" placeholder="Search..."></input>
            <button onClick={() => {handelChange() ; dispatch(changeBool())}}  style={{ height: "50px" }} >
              submit
            </button>
          </div>
          <div className="Option">
            <select>
              <option>Location...</option>
              <option>Delhi NCR</option>
              <option>Noida</option>
              <option>chennai</option>
            </select>
          </div>
          <button
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
        </div>
      ) : (
         <Searchs handelChange={handelChange}></Searchs>
      )}
    </>
  );
};

export default Navbar;
