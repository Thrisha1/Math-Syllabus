"use client"
import React, { useState } from 'react';
import Image from "next/image";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" border-gray-200 ">
            <button
                className={`flex items-center justify-between w-full p-5  font-medium rtl:text-right text-black text-lg gap-y-3 ${isOpen ? '' : ''}`}
                onClick={toggleAccordion}
            >
                <div className="flex justify-center items-center gap-x-5">
                {/*icon image*/}
                <Image src="https://cdn.iconscout.com/icon/premium/png-256-thumb/math-23-338237.png" width={100} height={100} alt="Math icon" className="w-10"/>
                <span>{title}</span>
                </div>
                <svg
                    className={`w-3 h-3 rotate-180 shrink-0 ${isOpen ? 'transform rotate-0' : ''}`}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
            {/*div for a line*/}
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${isOpen ? 'block' : 'hidden'}`}>
                <p className="text-gray-500 dark:text-gray-400">{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
