import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./componnent/Navbar/Navbar"
import Slider from "./componnent/Slider/Main"
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const data = useSelector((state) => state.navBar.value);
  console.log(data);
  return <div className="App">
    <Navbar></Navbar>
    {data ?  <Slider></Slider>: ""}
  </div>;
}

export default App;
