import React, { useContext } from "react";
import { FormContext } from "./App";

const MainInfo = (props)=>{
    const ctx = useContext(FormContext);
    return(
        <div>
            <input type="email" onChange={(ev)=>ctx.setEmail(ev.target.value)} value={ctx.email} />
            <input type="password" onChange={(ev)=>ctx.setPassword(ev.target.value)} value={ctx.password} />
        </div>
    )
}


export default MainInfo;