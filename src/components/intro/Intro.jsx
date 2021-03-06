import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
export default function Intro() {
   const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Developer", "Designer", "Database Administrator"],
          });
    },[])

    return (
        <div className="Intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/user.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Sanjay Shrestha</h1>
                    <h3>Software Engineer  <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.gif" alt="" />
                </a>
            </div>
        </div>
    )
}
