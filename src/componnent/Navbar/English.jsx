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
        <p>ENGLISH</p>

        {English.map((movies) => {
          return (
            <>
              <p style={{font :"12px Roboto,san-serif",margin:"0"}}>{movies}</p>
         
            </>
          );
        })}
      </div>
    )
}

export default English;