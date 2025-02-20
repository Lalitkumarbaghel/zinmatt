import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import MarqueeAnimation from "./Marquee";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeSkills from "./HomeSkills/HomeSkills";
import HomeCommunity from "./HomeCommunity/HomeCommunity";
import ZinmattNumber from "./ZinmattNumber/ZinmattNumber";
import HomeCertify from "./Certify/HomeCertify";
import HomeReviews from "./HomeReviews/HomeReviews";
import ChooseHome from "./ChooseHome/ChooseHome";
import JourneryHome from "./JournerySHome/JourneryHome";
import FrequentlyHome from "./FrequentlyHome/FrequentlyHome";
import GeTouchHome from "./GetTouchHome/GeTouchHome";
function Homepage(){
    return(
        <div>
            <Slider/>
            <MarqueeAnimation/>
            <HomeAbout/>
            <HomeSkills/>
            <HomeCommunity/>
            <ZinmattNumber/>
            <HomeCertify/>
            <HomeReviews/>
            <ChooseHome/>
            <JourneryHome/>
            <FrequentlyHome/>
            <GeTouchHome/>
        </div>
    )
}
export default Homepage;