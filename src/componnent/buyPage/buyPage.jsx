import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import buypage from "../buyPage/buypage.css"
import { useSearchParams } from 'react-router-dom';
import Model from "./model";

const BuyPage = () => {
  const image = useSelector((state) => state.movieReducer.value);
  console.log(image);
   const [show,setShow]=useState(false);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("Id"));

  const handelChange = () =>{
    setShow(!show);
  }

  return (
    <>
      <div>
        <div className="bottomdiv">
          <div>
            <img src=""></img>
          </div>
          <div className="text">
            <h1>Movie Title.....</h1>
            <h10>About Movie</h10>
            <button onClick={handelChange}>BUY TICKET</button>
             {show ? <Model handelChange={handelChange}></Model> : ""} 
         
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
