import LeftSidebar from "@/components/home/LeftSidebar";
import RightSidebar from "@/components/home/RightSidebar";
import MainFeed from "@/components/home/MainFeed";

export default function Home() {
  return (
    <div className="flex justify-between bg-[#18191A] min-h-screen pt-14 text-[#E4E6EB]">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Feed */}
      <MainFeed />

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
