import { useState } from "react";
import "./navbar.css";

const Telugu = () =>{

    const [Hindi, setHindi] = useState([
       "Karthikeya 2",
       "Linger"
      ]);
     
    return(
        <div>
        <p>TELUGU</p>
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

export default Telugu;