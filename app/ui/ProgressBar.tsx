'use client'

import React, {useState, useEffect } from 'react';





export default function ProgressBar(){
    const [scrollPercentage, setScrollPercentage] = useState(0);


    {/* useEffect Hook to handle scrolling from the user */}
    useEffect(()=>{
        const handleScroll = ()=>{
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            
            const scrollPercent = (scrollY / (documentHeight - windowHeight))*100 

            setScrollPercentage(scrollPercent)
            console.log(scrollPercent)
        }

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }

    },[])

    return (
        <div
            id="progress-container"
            style={{
                height: "4px",
                width: "100%",
                backgroundColor: "#FFFFFF",
                position: "fixed",
                opacity: "90%",
            }}
        >
            <div
                className="progress-fill"
                style={{
                height: "100%",
                backgroundColor: "#4ba351",
                width: `${scrollPercentage}%`,
                opacity: "90%",
                }}
            >
            </div>
        </div>
    );
};