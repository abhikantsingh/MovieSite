import { useState } from "react";
import "./navbar.css";

const Hindi = () =>{

    const [Hindi, setHindi] = useState([
        "Linger",
        "Laal Singh Chaddha",
        "Raksha Bandhan",
      ]);
     
    return(
        <div>
        <h13>HINDI</h13>
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

export default Hindi;