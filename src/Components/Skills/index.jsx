import React,{useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Skills.scss"
import Loader from "../Loader";

const Skills = () =>{
    gsap.registerPlugin(ScrollTrigger);
    
    // ScrollTrigger.create({
    //     trigger:".Skills",
    //     start:"top top",
    //     end:"bottom bottom",
    //     pin:"main_right img"
    // })

    useEffect(()=>{
        gsap.fromTo(".Loader",1,{scale:0},{
            scale:1,
            scrollTrigger:{
                trigger:'.Skills',
                // markers:true,
                end:"top top",
                scrub:true
            }
        })
    })

    return(
        <div className="Skills">
                <Loader/>
                <div className="Skills_Main">

                </div>
        </div>
    )
}

export default Skills