import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Syllabus from '../components/Syllabus';
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Syllabus />
        </div>
    );
}

export default HomePage;