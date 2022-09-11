import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import buypage from "./buypage.css"
import { useSearchParams } from 'react-router-dom';
import Model from "./model";
import {useLocation} from 'react-router-dom';

const BuyPage = () => {
  const image = useSelector((state) => state.movieReducer.value);
  console.log(image);
   const [show,setShow]=useState(false);
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("url"));
  const location = useLocation()

  console.log(location.state.url);

  const handelChange = () =>{
    setShow(!show);
  }

  return (
    <>
      <div>
        <div className="bottomdiv">
          <div>
            <img src={require(`../../${location.state.url}.avif`)}></img>
          </div>
          <div className="text">
            <h1 style={{color:"white"}}>{location.state.name}</h1>
            <p style={{color:"white"}}>{location.state.review}</p>
            <button onClick={handelChange}>BUY TICKET</button>
             {show ? <Model handelChange={handelChange}></Model> : ""} 
         
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
