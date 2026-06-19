import { MapPin, Home, Heart, Pen } from 'lucide-react';

const PersonalDetails = () => {
    return (
        <div className="bg-[#242526] rounded-xl w-full border border-[#3E4042] shadow-sm mb-4">
            {/* Personal Details Section */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[20px] font-bold text-[#E4E6EB]">Personal details</h2>
                    <button className="w-8 h-8 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center transition-colors">
                        <Pen className="w-5 h-5 text-[#A8ABAF]" />
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-[#A8ABAF]" />
                        <span className="text-[15px] text-[#E4E6EB]">
                            Lives in <span className="font-semibold cursor-pointer hover:underline">Dhaka, Bangladesh</span>
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Home className="w-6 h-6 text-[#A8ABAF]" />
                        <span className="text-[15px] text-[#E4E6EB]">
                            From <span className="font-semibold cursor-pointer hover:underline">Mymensingh, Dhaka, Bangladesh</span>
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Heart className="w-6 h-6 text-[#A8ABAF]" />
                        <span className="text-[15px] text-[#E4E6EB] font-semibold cursor-pointer hover:underline">
                            Single
                        </span>
                    </div>
                </div>

                <div className="mt-4">
                    <span className="text-[#A8ABAF] text-[15px] hover:underline cursor-pointer">
                        See more personal details
                    </span>
                </div>
            </div>

            {/* Education Section */}
            <div className="p-4 pt-0">
                <div className="flex items-center justify-between mb-4 mt-2">
                    <h2 className="text-[20px] font-bold text-[#E4E6EB]">Education</h2>
                    <button className="w-8 h-8 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center transition-colors">
                        <Pen className="w-5 h-5 text-[#A8ABAF]" />
                    </button>
                </div>

                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* AUB Placeholder Logo */}
                        <div className="w-full h-full flex items-center justify-center font-bold text-green-700 text-xs">
                            AUB
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[15px] text-[#E4E6EB] font-semibold cursor-pointer hover:underline">
                            Asian University of Bangladesh - AUB
                        </span>
                        <span className="text-[13px] text-[#A8ABAF]">
                            Class of 2021
                        </span>
                    </div>
                </div>

                <div className="mt-4">
                    <span className="text-[#A8ABAF] text-[15px] hover:underline cursor-pointer">
                        See more education
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
