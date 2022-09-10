import { useState } from "react";
import "./navbar.css";

const Punjabi = () =>{

    const [Hindi, setHindi] = useState([
        "Laung Laachi 2"
      ]);
     
    return(
        <div>
        <p>TAMIL</p>
      
        {Hindi.map((movies) => {
          return (
            <>
              <p style={{font :"12px Roboto,san-serif",margin:"0"}}>{movies}</p>
             
            </>
          );
        })}
      </div>
    )
}

export default Punjabi;