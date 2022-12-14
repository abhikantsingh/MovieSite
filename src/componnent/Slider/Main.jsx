import { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
   var slideIndex = 0;

   useEffect(() => {
    showSlides();
  }, []);

  const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
     slideIndex++;
     if(slideIndex==1)
      slides[(slides.length-1)%slides.length].style.display = "block";
      else
      slides[(slideIndex-2)%slides.length].style.display = "block";

       slides[(slideIndex-1)%slides.length].style.display ="inline-block";

         if(slideIndex==slides.length)
         slides[1].style.display = "block";
         else
          slides[(slideIndex+1)%slides.length].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 2 seconds
  };

  return (
    <div  className="slider">
      <div className="mySlides fade">
        <img
          src={require("../../assets/images/1658744889327_movie_web.avif")}
        ></img>
      </div>
      <div className="mySlides fade">
        <img src={require("../../assets/images/1658829190282_web.avif")}></img>
      </div>
      <div className="mySlides fade">
        <img src={require("../../assets/images/1659530909175_wfdv.avif")}></img>
      </div>
      <div className="mySlides fade">
        <img
          src={require("../../assets/images/1660641919728_macmerise_web.avif")}
        ></img>
      </div>
      <div className="mySlides fade">
        <img src={require("../../assets/images/1660802650488_bas.avif")}></img>
      </div>
    </div>
  );
};

export default Slider;
