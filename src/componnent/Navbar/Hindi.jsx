import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { movieData } from "../../reducers/movieReducer";
import { changeBool } from "../../reducers/navState";

const Hindi = ({data , handelChange}) =>{
  const dispatch = useDispatch();
  console.log(data);
    const [Hindi, setHindi] = useState(data);
     
    return(
        <div>
        <p>HINDI</p>
        {Hindi.map((movie) => {
          return (
            <>
               <Link style={{textDecoration:"none",color:"black"}} to={"/buy"}  onClick={() => {
            handelChange();
             dispatch(changeBool());
          }} state={{url:movie.imgSrc,review:movie.review,name:movie.name}}>
              <p style={{font :"12px Roboto,san-serif",margin:"0",color:"black"}}>{movie.name}</p>
              </Link>
            </>
          );
        })}
      </div>
    )
}

export default Hindi;