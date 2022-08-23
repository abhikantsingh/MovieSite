import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./componnent/Navbar/Navbar"
import Slider from "./componnent/Slider/Main"
import Movies from "./componnent/Movies/movies"
import Footer from "./componnent/Footer/footer";
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const data = useSelector((state) => state.navBar.value);
  console.log(data);
  return <div className="App">
    <Navbar></Navbar>
    {data ?  <Slider></Slider>: ""}
    {data ? <Movies></Movies> : ""}
    {data ? <Footer></Footer> : ""}
  </div>;
}

export default App;
