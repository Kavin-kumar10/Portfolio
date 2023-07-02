import React,{useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {skillImg} from "../../Assets/index"
import "./Skills.scss"

const Skills = () =>{
    gsap.registerPlugin(ScrollTrigger);
    
    // ScrollTrigger.create({
    //     trigger:".Skills",
    //     start:"top top",
    //     end:"bottom bottom",
    //     pin:"main_right img"
    // })

    useEffect(()=>{
        gsap.fromTo(".Skills_Logo",1,{scale:0},{
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
                <div className="Skills_Logo">
                        <img src={skillImg} alt="skill" />
                        <p>Hone your skills</p>
                </div>
                {/* <div className="Skills_Main">

                </div> */}
              
        </div>
    )
}

export default Skills