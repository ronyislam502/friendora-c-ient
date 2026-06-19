import StorySection from './StorySection';
import CreatePostBox from './CreatePostBox';
import PostCard from './PostCard';
import ReelsSection from './ReelsSection';

const MainFeed = () => {
    return (
        <div className="flex-1 max-w-[680px] w-full mx-auto flex flex-col pt-4 px-2 sm:px-4 lg:px-8 pb-10">
            <StorySection />
            <CreatePostBox />
            
            {/* First Post */}
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

            {/* Reels Section Injected into Feed */}
            <ReelsSection />

            {/* Second Post */}
            <PostCard 
                author="Rafsan Al Nahiyan Rony"
                avatar="https://i.pravatar.cc/150?img=11"
                time="1h"
                content="Just enjoying a nice sunny day outside! 🌞"
                images={[
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ]}
            />

            {/* Third Post */}
            <PostCard 
                author="Amanullah Aman"
                avatar="https://i.pravatar.cc/150?img=60"
                time="3h"
                content="Anyone up for a game of football this weekend? Let me know! ⚽️"
            />
            
            {/* Fourth Post */}
            <PostCard 
                author="Sarah Jenkins"
                avatar="https://i.pravatar.cc/150?img=47"
                time="5h"
                location="Cox's Bazar"
                content="The sunset here is absolutely breathtaking. Highly recommend visiting this time of year! 🌊🌅"
                images={[
                    "https://images.unsplash.com/photo-1590130541767-f6551b9d4b00?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ]}
            />
            
            {/* Fifth Post */}
            <PostCard 
                author="John Doe"
                avatar="https://i.pravatar.cc/150?img=12"
                time="1d"
                content="Just published my latest article on React performance optimization. Check it out on my blog! 💻🚀"
            />
        </div>
    );
};

export default MainFeed;
