import React,{useRef,useEffect} from "react";
import { TweenMax,Power3 } from "gsap/src/index";
import gsap from "gsap";
import { Elastic } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollMagic from 'scrollmagic';
import { Img1,Img2,Img3 } from "../../Assets";
import "./About.scss"



const About = () =>{
    gsap.registerPlugin(ScrollTrigger);
    let portfolio = useRef(null);
    let desc = useRef(null);
    let img = useRef(null);

    useEffect(()=>{

        

        var right = gsap.timeline();
        right.fromTo(".right",1.5,{x:"100%"},
        {
            x:0,
            scrollTrigger:{
                trigger:".right",
                scrub:true,
                end:"top center"
            },
        })
        .fromTo(".right img",5,{opacity:0,y:-200},
        {
            opacity:1,
            y:0,
            scrollTrigger:{
                trigger:".right",
                start:"top center",
                toggleActions:"restart none none none",
                scrub:true,
                end:"bottom bottom"
            }
        })


        
        gsap.fromTo(".img",1.5,{opacity:0,x:30},{
            stagger:0.5,
            opacity:1,
            x:0,
            ease:Elastic.easeInOut,
            delay:1
        })
        gsap.fromTo(portfolio,5,{opacity:0,y:-200},{
            opacity:1,
            y:0,
            // ease:Elastic.easeInOut,
            scrollTrigger:{
                trigger:".left",
                start:"top center",
                toggleActions:"restart none none none",
                scrub:true,
                end:"bottom bottom"
            },
            delay:1.5
        })
        gsap.fromTo(".left h5",2,{opacity:0,y:-20},{
            opacity:1,
            y:0,
            ease:Elastic.easeInOut,
            scrollTrigger:{
                trigger:".left",
                start:"top center",
                toggleActions:"restart none none none",
                scrub:true,
                end:"bottom bottom"
            },
            delay:0
        })
        gsap.fromTo(desc,2,{opacity:0,x:-20},{
            opacity:1,
            x:0,
            ease:Elastic.easeInOut,
            scrollTrigger:{
                trigger:".left",
                start:"top center",
                toggleActions:"restart none none none",
                scrub:true,
                end:"bottom bottom"
            },
            delay:0.8
        })
    },[])
    return(
        <div className="About">
            <div className="left">
                <h5>Wanna <span>Know</span> me</h5>
                <h1 ref={el => {portfolio = el}}>
                    Hey there...! <span>It'z kavin</span>..._
                </h1>
                <p ref={el => {desc = el}}>
                Are you looking for perfect the UI developer then you are in the right place . Get the professional result you are looking for. your work would be done on time as you require. just reach out and let me know your needs.
                </p>
            </div>
            <div className="right">
                <img src={Img3} alt="" />
            </div>
        </div>
    )
}

export default About

{/* <img src={Img1} alt="img1" className="img" ref={el=>{img = el}}/>
<img src={Img2} alt="img2" className="img" ref={el=>{img = el}}/>
<img src={Img3} alt="img3" className="img" ref={el=>{img = el}}/> */}

//Scroll magic
// const controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({
//     triggerElement:portfolio,
//     duration:'100%',
//     triggerHook:0.5
// })
// .setTween(
//     gsap.fromTo(portfolio,1,{opacity:0,y:-50},{
//         opacity:1,
//         y:0,
//         ease:Power3.easeInOut,
//         delay:.2
//     })
// )
// .addIndicators({ name: 'Scene 1' }) 
// .addTo(controller)