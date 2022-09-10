import { useState } from "react";
import "./navbar.css";

const Tamil = () =>{

    const [Hindi, setHindi] = useState([
        "Linger",
        "Thiruchitrambalam"
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

export default Tamil;