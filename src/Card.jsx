import React, { useContext } from "react";
import { ThemeContext } from "./App";

const Card = (props)=>{
    const context = useContext(ThemeContext);
    return(
        <div style={
        {
            backgroundColor: context.backgroundColor,
            color: context.color
        }    
        }>
        <p>Hola Mundo</p>
        </div>
    )
}

export default Card;