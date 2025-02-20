import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import MarqueeAnimation from "./Marquee";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeSkills from "./HomeSkills/HomeSkills";
import HomeCommunity from "./HomeCommunity/HomeCommunity";
import ZinmattNumber from "./ZinmattNumber/ZinmattNumber";
function Homepage(){
    return(
        <div>
            <Slider/>
            <MarqueeAnimation/>
            <HomeAbout/>
            <HomeSkills/>
            <HomeCommunity/>
            <ZinmattNumber/>
        </div>
    )
}
export default Homepage;