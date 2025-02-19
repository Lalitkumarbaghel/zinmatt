import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import MarqueeAnimation from "./Marquee";
// import AboutSec from "./aboutsection/AboutSec";
import HomeAbout from "./HomeAbout/HomeAbout";
function Homepage(){
    return(
        <div>
            <Slider/>
            <MarqueeAnimation/>
            <HomeAbout/>
        </div>
    )
}
export default Homepage;