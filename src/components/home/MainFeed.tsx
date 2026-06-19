import StorySection from './StorySection';
import CreatePostBox from './CreatePostBox';
import PostCard from './PostCard';

const MainFeed = () => {
    return (
        <div className="flex-1 max-w-[680px] w-full mx-auto flex flex-col pt-4 px-2 sm:px-4 lg:px-8">
            <StorySection />
            <CreatePostBox />
            
            {/* Posts */}
            <PostCard 
                author="Shamima Akther Rita"
                avatar="https://i.pravatar.cc/150?img=46"
                time="6m"
                location="Dhaka"
                content={
                    <>
                        Some hide behind fake names, fake accounts, and fake stories. I choose to stand behind my real name, my real face, and my real character. Being genuine may not impress ... <span className="font-semibold cursor-pointer hover:underline text-[#E4E6EB]">See more</span>
                    </>
                }
                images={[
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ]}
            />

            <PostCard 
                author="Rafsan Al Nahiyan Rony"
                avatar="https://i.pravatar.cc/150?img=11"
                time="1h"
                content="Just enjoying a nice sunny day outside! 🌞"
                images={[
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ]}
            />
        </div>
    );
};

export default MainFeed;
