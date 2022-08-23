import { useState } from "react";
import "./navbar.css";

const Tamil = () =>{

    const [Hindi, setHindi] = useState([
        "Linger",
        "Thiruchitrambalam"
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

export default Tamil;