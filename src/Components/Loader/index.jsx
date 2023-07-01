import React, { useEffect } from "react";
import "./Loader.scss"
import {skillImg} from "../../Assets/index"
import gsap from "gsap";


const Loader = () =>{
    useEffect(()=>{
        gsap.fromTo(".Loader img",1,{scale:0.8},{scale:1,repeat:-1,yoyo:true});
    })
    return(
    <div className="Loader">
            <img src={skillImg} alt="skill" />
            <p>Loading ...</p>
    </div>
    )
}

export default Loader