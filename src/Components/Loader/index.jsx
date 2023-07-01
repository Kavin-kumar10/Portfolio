import React from "react";
import "./Loader.scss"
import {skillImg} from "../../Assets/index"


const Loader = () =>{
    return(
    <div className="Loader">
            <img src={skillImg} alt="skill" />
            <p>Hone your skills</p>
    </div>
    )
}

export default Loader