import { Star, Share2 } from 'lucide-react';

export default function EventsSection() {
    const events = [
        { title: "আওয়ামী লীগকে নিষিদ্ধ করতে গণভোট", date: "Wed, Aug 5 at 10 AM", location: "Bangladesh · ঢাকা", host: "লাবণ্য মৌরি" },
        { title: "We Stand With Hasnat 💚", date: "Sat, Aug 15 at 6:10 PM", location: "বর্তমান বাংলাদেশ · ঢাকা", host: "মতামত ডটকম" },
        { title: "আমি আপাতত ভোটের অধিকার চাইনা, আমি...", date: "Sun, Mar 28, 2027 at 3 AM", location: "", host: "MD Nezam" },
    ];

    return (
        <div className="bg-base-100 rounded-xl shadow-sm p-4 mt-4">
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <h2 className="text-xl font-bold">Events</h2>
                <button className="btn btn-sm bg-primary/10 text-primary hover:bg-primary/20 border-none font-semibold">
                    Create event
                </button>
            </div>

            <div role="tablist" className="tabs tabs-bordered mb-4 overflow-x-auto w-full flex-nowrap">
                <a role="tab" className="tab tab-active text-primary border-primary font-semibold whitespace-nowrap">Upcoming</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Past</a>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4">
                {events.map((evt, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-base-100 hover:bg-base-200 rounded-lg transition-colors cursor-pointer border border-base-300">
                        <div className="w-full sm:w-28 h-40 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-base-300">
                            <img src={`https://images.unsplash.com/photo-${1800000000000 + i}?q=80&w=300&auto=format&fit=crop`} alt={evt.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <div className="text-error font-medium text-sm mb-1">{evt.date}</div>
                            <h3 className="font-semibold text-base truncate mb-1">{evt.title}</h3>
                            {evt.location && <div className="text-sm text-base-content/70 mb-1">{evt.location}</div>}
                            <div className="text-sm text-base-content/70">Event by <span className="text-base-content font-medium">{evt.host}</span></div>
                        </div>
                        <div className="flex items-center gap-2 mt-3 sm:mt-0">
                            <button className="btn btn-sm flex-1 sm:flex-none bg-primary/10 text-primary hover:bg-primary/20 border-none">
                                <Star className="w-4 h-4 fill-current" />
                                Interested
                            </button>
                            <button className="btn btn-square btn-sm btn-neutral flex-shrink-0">
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
