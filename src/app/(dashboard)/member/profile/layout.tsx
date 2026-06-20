import React from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileTabs from '@/components/profile/ProfileTabs';

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col flex-1 bg-[#18191A] min-h-screen">
            {/* Header Section */}
            <div className="bg-[#242526] w-full">
                <ProfileHeader />
                <ProfileTabs />
            </div>

            {/* Content Section */}
            {children}
        </div>
    );
}
