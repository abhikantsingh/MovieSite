import "./movies.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { changeMovie } from "../../reducers/movieReducer";
import { useDispatch,useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { movieData } from "../../reducers/movieReducer";

const Movies = () => {
    const dispatch = useDispatch();
  const [premier, setPremier] = useState([
    {
      src: "assets/images/et00324012-xfmlzjczhq-portrait",
    },
    {
      src: "assets/images/et00335608-qfxfwktvxg-portrait",
    },
    {
      src: "assets/images/et00336140-bzdtrhftnw-portrait",
    },
    {
      src: "assets/images/et00336258-nlvtbhvcpf-portrait",
    },
    {
      src: "assets/images/et00337052-esnnsqzehb-portrait",
    },
  ]);

  const [fit, setFit] = useState([
    {
      src: "assets/images/fitness-collection-2020081150",
    },
    {
      src: "assets/images/kids-collection-202007220710",
    },
    {
      src: "assets/images/music-shows-collection-202007220710",
    },
    {
      src: "assets/images/workshops-collection-202007231330",
    },
  ]);

  
  const [movies,setMovies]=useState([]);
  const RenderData = () =>{
    dispatch(movieData()).then(
      unwrapResult
    ).then((res) =>{
         setMovies(res.data.data);
    }).catch((error) =>{
      console.log(error);
    })
  }

  return (
    <div className="Main" onLoad={RenderData}>
      <h13>Recommended Movies...</h13>
      <div className="movieData">
          {movies.map((movie,idx) => {
          return (
          <Link to={"/buy"} state={{url:movie.imgSrc,review:movie.review,name:movie.name}}>
          <div className="internal">
             <img src={require(`../../${movie.imgSrc}.avif`)} alt="" />
              <p>{movie.name}</p>
            </div>
          </Link>
         
          );
        })}  
        {/* <h1>{movies}</h1> */}
      </div>
      <div className="midware">
        <img
          src={require("../../assets/images/lead-in-v3-collection-202102040828.avif")}
          alt=""
        />
      </div>

      <div className="movieData">
        {fit.map((slot) => {
          return (
            <div className="fitstyle">
              <img src={require(`../../${slot.src}.avif`)} alt="" />
            </div>
          );
        })}
      </div>
      <div className="Premier">
        <img
          src={require("../../assets/images/premiere-banner-web-collection-202208191200.avif")}
          alt=""
        />
      </div>
      <div className="Main2">
        <div style={{ textAlign: "left", marginLeft: "400px" }}>
          <h13 style={{ color: "white" }}>Premieres</h13>
          <p>Brand New Release...</p>
        </div>
        <div className="primeTime">
          {premier.map((Prem) => {
            return (
              <div>
                <img src={require(`../../${Prem.src}.avif`)} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
