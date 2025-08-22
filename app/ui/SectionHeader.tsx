import React from 'react';
import LineSeperator from "../ui/LineSeperator";

type propsType = {
    pTitle: string;
    pLineSpan: string;
    pTitleSpan: string;
}

export default function SectionHeader({ pTitle, pLineSpan, pTitleSpan}: propsType){
    const title = pTitle;
    const lineSpan = pLineSpan;
    const titleSpan = pTitleSpan;


    return (
        <div className="grid grid-cols-100 items-center"> 
      
            {/* Left Line */}
            <div className={`col-span-${lineSpan}`}>
                <LineSeperator />
            </div>

            {/* Center Text */}
            <p className={`col-span-${titleSpan} text-center text-white font-bold text-4xl sm:text-5xl lg:text-6xl`}>
                {title}
            </p>

            {/* Right Line */}
            <div className={`col-span-${lineSpan}`}>
                <LineSeperator />
            </div>

        </div>
    );
};

