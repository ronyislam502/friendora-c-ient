import { MoreHorizontal } from 'lucide-react';

export default function CheckInsSection() {
    const checkins = [
        { title: "কিসমত ময়মনসিংহ", location: "Kalayanpur, Dhaka, Bangladesh", date: "May 28, 2026", hasImage: false },
        { title: "কিসমত ময়মনসিংহ", location: "Kalayanpur, Dhaka, Bangladesh", date: "March 21, 2026", hasImage: false },
        { title: "Mohakhali DOHS", location: "", date: "September 8, 2025", hasImage: true },
        { title: "কিসমত ময়মনসিংহ", location: "Kalayanpur, Dhaka, Bangladesh", date: "April 11, 2024", hasImage: false },
        { title: "Asian University of Bangladesh - AUB", location: "Dhaka, Bangladesh", date: "March 22, 2024", hasImage: true },
        { title: "Mymensingh Division", location: "Mymensingh", date: "January 16, 2024", hasImage: false },
        { title: "ঈদুল আযহার শুভেচ্ছা", location: "Kalidas, Dhaka, Bangladesh", date: "June 29, 2023", hasImage: false },
        { title: "Jamuna Future Park", location: "Dhaka, Bangladesh", date: "June 15, 2023", hasImage: true, verified: true },
    ];

    return (
        <div className="bg-base-100 rounded-xl shadow-sm p-4 mt-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Check-ins</h2>
                <button className="btn btn-circle btn-sm btn-neutral">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>

            <div role="tablist" className="tabs tabs-bordered mb-4 overflow-x-auto w-full flex-nowrap">
                <a role="tab" className="tab tab-active text-primary border-primary font-semibold whitespace-nowrap">Recent</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {checkins.map((checkin, i) => (
                    <div key={i} className="flex items-center gap-4 p-2 hover:bg-base-200 rounded-lg transition-colors cursor-pointer">
                        <div className="avatar">
                            <div className="w-20 h-20 rounded-xl overflow-hidden bg-base-200 flex items-center justify-center">
                                {checkin.hasImage ? (
                                    <img src={`https://images.unsplash.com/photo-${1600000000000 + i}?q=80&w=200&auto=format&fit=crop`} alt={checkin.title} className="object-cover w-full h-full" />
                                ) : (
                                    <div className="w-full h-full bg-[#CDD0D4] flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold truncate text-base flex items-center gap-1">
                                {checkin.title}
                                {checkin.verified && (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#0866FF] flex-shrink-0"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                )}
                            </h3>
                            {checkin.location && (
                                <div className="text-sm text-base-content/70 mt-1 truncate">
                                    {checkin.location}
                                </div>
                            )}
                            <div className="text-sm text-base-content/70 truncate">
                                Visited on {checkin.date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="btn btn-block btn-neutral mt-2">
                See all
            </button>
        </div>
    )
}
