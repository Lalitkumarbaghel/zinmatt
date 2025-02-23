import React from "react";
import './style.css'
function MarqueeAnimation(){
    return (
        <marquee behavior="scroll" className="marq" scrolldelay="30" bgcolor="#ff7c02" direction="left" loop="">
            <span>"Welcome to Learn Growth, India's Most Active Digital Marketing Learning Platform."</span>
            <span>"Make your Career Bright with Learn Growth."</span>
            <span>"Now it's time to Grow your business 10x with Learn Growth."</span>
        </marquee>
    )
}

export default MarqueeAnimation;