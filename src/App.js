import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componnent/Navbar/Navbar"
import Slider from "./componnent/Slider/Main"
import Movies from "./componnent/Movies/movies"
import Footer from "./componnent/Footer/footer";
import Signup from "./componnent/SignIn/signup";
import BuyPage from "./componnent/buyPage/buyPage";
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const data = useSelector((state) => state.navBar.value);
  console.log(data);
  return <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <>
      <Navbar></Navbar>
      {data ?  <Slider></Slider>: ""}
    {data ? <Movies></Movies> : ""}
    {data ? <Footer></Footer> : ""}
      </>
    }>
   
    </Route>
    <Route path="/auth" element={
   <Signup></Signup>
    }>
    </Route>
    <Route path="/buy"  element={
      <>
      <Navbar></Navbar>
      {data ? <BuyPage></BuyPage> : ""}
      {data ? <Footer></Footer>: ""}
      </>
           
    }>
   
    </Route>
    </Routes>
    </BrowserRouter>
   
  </div>;
}

export default App;
