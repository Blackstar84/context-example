import React, { useContext } from "react";
import { FormContext } from "./App";

const Skills = (props)=>{
    const context = useContext(FormContext);

    const addToList = (value)=>{
        console.log(":0");
        context.setLikes([value].concat(context.likes))
    }

    const removeFromList = (value)=>{
        context.setLikes(context.likes.filter(v => v !== value));
    }
    return(
        <div>
            <labe>
                <input type="checkbox" onChange={(ev)=> ev.target.checked ? addToList("Ruby") : removeFromList("Ruby") } name="likes[]" />
                Ruby
            </labe>
            <labe>
                <input type="checkbox" onChange={(ev)=> ev.target.checked ? addToList("JavaScript") : removeFromList("JavaScript") } name="likes[]" />
                JavaScript
            </labe>
        </div>
    )
}


export default Skills;