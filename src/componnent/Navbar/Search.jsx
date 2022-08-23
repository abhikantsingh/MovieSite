import { useState } from "react";
import "./navbar.css";
import Hindi from "./Hindi";
import English from "./English";
import Punjabi from "./Punjabi";
import Telugu from "./Telugu";
import Tamil from "./Tamil";
import { useSelector, useDispatch } from "react-redux";
import { changeBool } from "../../reducers/navState";

const Search = ({ handelChange }) => {
  const data = useSelector((state) => state.navBar.value);
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([
    {
      Id: "Hindi",
      movies: ["Linger", "Laal Singh Chaddha", "Raksha Bandhan"],
    },
    {
      Id: "English",
      movies: ["Linger", "Laal Singh Chaddha", "Raksha Bandhan"],
    },
    {
      Id: "Tamil",
      movies: ["Linger", "Laal Singh Chaddha", "Raksha Bandhan"],
    },
    {
      Id: "Telugu",
      movies: ["Linger", "Laal Singh Chaddha", "Raksha Bandhan"],
    },
  ]);

  // const [data,setData] = useState([]);

  const [hindi, setHindi] = useState(false);
  const [english, setEnglish] = useState(false);
  const [tamil, setTamil] = useState(false);
  const [telugu, setTelugu] = useState(false);
  const [punjabi, setPunjabi] = useState(false);
  return (
    <div className="Search">
      <div className="main2">
        <input placeholder="Search for movie,Events,Plays and Activities"></input>
        <button
          onClick={() => {
            handelChange();
            dispatch(changeBool());
          }}
        >
          Return..
        </button>
      </div>
      <div className="filter">
        <p>Filter :</p>
        <button onClick={() => setHindi(!hindi)}>Hindi</button>
        <button onClick={() => setEnglish(!english)}>English</button>
        <button onClick={() => setTamil(!tamil)}>Tamil</button>
        <button onClick={() => setTelugu(!telugu)}>Telugu</button>
        <button onClick={() => setPunjabi(!punjabi)}>Punjabi</button>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        Select the language of the movie you want to watch.......
      </div>
      <div className="content">
        {hindi ? <Hindi></Hindi> : ""}
        {english ? <English></English> : ""}
        {tamil ? <Tamil></Tamil> : ""}
        {telugu ? <Telugu></Telugu> : ""}
        {punjabi ? <Punjabi></Punjabi> : ""}
        {}
      </div>
    </div>
  );
};

export default Search;
