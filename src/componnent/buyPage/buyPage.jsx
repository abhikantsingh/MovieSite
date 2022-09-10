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
            <h1>{location.state.name}</h1>
            <h10>{location.state.review}</h10>
            <button onClick={handelChange}>BUY TICKET</button>
             {show ? <Model handelChange={handelChange}></Model> : ""} 
         
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
