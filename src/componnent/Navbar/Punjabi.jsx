import { useState } from "react";
import "./navbar.css";

const Punjabi = () =>{

    const [Hindi, setHindi] = useState([
        "Laung Laachi 2"
      ]);
     
    return(
        <div>
        <h13>TAMIL</h13>
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

export default Punjabi;