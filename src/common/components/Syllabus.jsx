import React from 'react';
import Accordion from './Accordion';
const Syllabus = () => {
    return (
        <div className="m-4 bg-gray-100 p-4">
            <Accordion
                title="Math (NCERT)"
                content="Math is the study of numbers."
            />
            <Accordion
                title="Math Foundadtions"
                content="Math is the study of numbers."
            />
            <Accordion
                title="Math (Maharashra)"
                content="Math is the study of numbers."
            /><Accordion
                title="PACE (SOE Punjab)"
                content="Math is the study of numbers."
            />
        </div>
    );
}

export default Syllabus;