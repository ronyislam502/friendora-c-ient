import React from 'react';
import AboutSection from '@/components/profile/about/AboutSection';
import ReelsSection from '@/components/profile/about/ReelsSection';
import PhotosSection from '@/components/profile/about/PhotosSection';
import GroupsSection from '@/components/profile/about/GroupsSection';
import EventsSection from '@/components/profile/about/EventsSection';
import FriendsSection from '@/components/profile/about/FriendsSection';
import CheckInsSection from '@/components/profile/about/CheckInsSection';

const AboutPage = () => {
    return (
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-4 space-y-4">
            <AboutSection />
            <ReelsSection />
            <PhotosSection />
            <GroupsSection />
            <EventsSection />
            <FriendsSection />
            <CheckInsSection />
        </div>
    );
};

export default AboutPage;
