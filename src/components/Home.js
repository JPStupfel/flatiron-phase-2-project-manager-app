import React from "react";
import HomeCarousel from "./HomeCarousel";
import Clock from "./Clock";

export default function Home(){
    return(
        <h1>
            <HomeCarousel/>
            <Clock />
        </h1>
    )
}