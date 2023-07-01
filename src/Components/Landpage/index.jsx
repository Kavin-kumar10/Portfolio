import React,{useRef,useEffect} from "react";
import { TweenMax,Power3, Elastic } from 'gsap';
import { Logo } from "../../Assets";
import gsap from "gsap";
import {AiFillInstagram,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import "./Landpage.scss"

const Landpage = () =>{
    let heading = useRef(null);
    useEffect(()=>{
        gsap.fromTo(heading,1,{y:-50},{
            opacity:1,
            y:0,
            ease:Power3.easeInOut,
            delay:.3
        })
        gsap.fromTo(".navs li",1,{y:-50,opacity:0},{
            opacity:1,
            y:0,
            ease:Power3.easeInOut(0.4),
            delay:.4,
            stagger:.3,
        })
        gsap.fromTo(".head_left h2",1,{y:-100,opacity:0},{
            opacity:1,
            y:0,
            ease:Elastic.easeInOut(0.5),
            delay:0.8
        })
        gsap.fromTo(".head_right p",1,{x:100,opacity:0},{
            opacity:1,
            x:0,
            ease:Elastic.easeInOut(0.5),
            delay:1
        })
        gsap.fromTo(".body_mid",1,{y:100,opacity:0},{
            opacity:1,
            y:0,
            ease:Elastic.easeInOut(0.5),
            delay:1.5
        })
        gsap.fromTo(".foot",1,{opacity:0,y:200},{
            opacity:1,
            y:0,
            // delay:1
        })
    },[])
    return(
        <div className="Landpage">
            <div className="Nav">
                <div className="logo">
                    <img
                    src={Logo}
                    ref={el=>{heading = el}}
                    />
                </div>
                <ul className="navs">
                    <li><AiFillInstagram size={20}/></li>
                    <li><AiFillLinkedin size={20}/></li>
                    <li><AiFillGithub size={20}/></li>
                </ul>
            </div>
            <div className="body">
                <div className="body_head">
                    <div className="head_left">
                        <h2>Let's move forward</h2>
                    </div>
                    <div className="head_right">
                        <p>Wanna know me?</p>
                    </div>
                </div>
                <div className="body_mid">
                    <h1>Mern <span>Dev</span></h1>
                </div>
                <div className="body_foot">

                </div>
            </div>
            <div className="foot">
                <h1>kavin_10</h1>
            </div>
        </div>
    )
}

export default Landpage