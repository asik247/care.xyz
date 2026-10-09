import Banner from '@/Components/Banner';
import AboutSection from '@/Components/HomePagesRelative/AboutSection';
import ServicesOverview from '@/Components/HomePagesRelative/ServicesOverview';
import Testimonials from '@/Components/HomePagesRelative/Testimonials';
import React from 'react';

const HomePage = () => {
    return (
        <div className='border-2 border-red-500 w-full max-w-7xl p-4 mx-auto'>
            {/* Banner */}
            <Banner></Banner>
            {/* About section explaining platform mission */}
            <AboutSection></AboutSection>
            {/* Services overview: Baby Care, Elderly Service, Sick People Service */}
            <ServicesOverview></ServicesOverview>
            {/* Testimonials / Success metrics */}
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;