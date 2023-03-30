import { useContext } from "react";
import {ThemeContext} from "./App";

const Button = (props)=>{
    const context = useContext(ThemeContext);
    console.log(context);
    return(
        <button
            style={{
                backgroundColor: context.backgroundColor,
                color: context.color
            }}
        >
        Click me!
        </button>
    )

}

export default Button;