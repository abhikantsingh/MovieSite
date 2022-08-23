import { useState } from "react";
import "./navbar.css";

const Telugu = () =>{

    const [Hindi, setHindi] = useState([
       "Karthikeya 2",
       "Linger"
      ]);
     
    return(
        <div>
        <h13>TELUGU</h13>
        <br></br>
        {Hindi.map((movies) => {
          return (
            <>
              <h16 style={{font :"12px Roboto,san-serif"}}>{movies}</h16>
              <br></br>
            </>
          );
        })}
      </div>
    )
}

export default Telugu;