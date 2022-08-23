import { useState } from "react";
import "./navbar.css";



const English = () => {

    const [English, setEnglish] = useState([
        "The Invitation",
        "Three Thousand Year Of Longing",
        "Thai Massage",
        "Holy Cow",
      ]);
      
    return(
        <div>
        <h13>ENGLISH</h13>
        <br></br>
        {English.map((movies) => {
          return (
            <>
              <h16 style={{font :"12px Roboto,san-serif",margin:""}}>{movies}</h16>
              <br></br>
            </>
          );
        })}
      </div>
    )
}

export default English;