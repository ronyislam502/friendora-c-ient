import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileTabs from '@/components/profile/ProfileTabs';
import PersonalDetails from '@/components/profile/PersonalDetails';
import Highlights from '@/components/profile/Highlights';
import FriendsCard from '@/components/profile/FriendsCard';
import PhotosCard from '@/components/profile/PhotosCard';
import ProfileFooter from '@/components/profile/ProfileFooter';
import PostsHeader from '@/components/profile/PostsHeader';
import CreatePostBox from '@/components/home/CreatePostBox';
import PostCard from '@/components/home/PostCard';

export default function ProfilePage() {
    return (
        <div className="flex flex-col flex-1 bg-[#18191A] min-h-screen">
            {/* Header Section (White/Dark background depending on theme, but Facebook uses #242526 for the top section on dark mode) */}
            <div className="bg-[#242526] w-full">
                <ProfileHeader />
                <ProfileTabs />
            </div>

            {/* Content Section */}
            <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-4">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Left Column - Details */}
                    <div className="w-full lg:w-[40%] flex-shrink-0 flex flex-col">
                        <PersonalDetails />
                        <Highlights />
                        <FriendsCard />
                        <PhotosCard />
                        <ProfileFooter />
                    </div>

                    {/* Right Column - Posts */}
                    <div className="w-full lg:w-[60%] flex flex-col gap-4">
                        <CreatePostBox />

                        {/* Posts Header */}
                        <PostsHeader />

                        {/* Posts List */}
                        <div className="flex flex-col gap-4">
                            <PostCard 
                                author="Rafsan Al Nahiyan Rony"
                                avatar="https://i.pravatar.cc/150?img=11"
                                time="2h"
                                content={
                                    <p>Just finished building the new profile page layout! Looking incredibly clean. 🔥🚀</p>
                                }
                            />
                            <PostCard 
                                author="Rafsan Al Nahiyan Rony"
                                avatar="https://i.pravatar.cc/150?img=11"
                                time="12h"
                                content={
                                    <p>Loving the new dark mode aesthetics.</p>
                                }
                                images={["https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
