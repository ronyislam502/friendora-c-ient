import { MoreHorizontal, Globe } from 'lucide-react';

export default function GroupsSection() {
    const groups = [
        { name: "قضايا التعليم برؤية خبير تربوي متخصص في العلوم التربوية", members: "76 members" },
        { name: "Ad/Home Real Estate Agency Group", members: "5.8K members" },
        { name: "EduSpark Students' Community", members: "6.7K members" },
        { name: "ট্রেনিং তথ্যভান্ডার Training Information Hub", members: "9.7K members" },
        { name: "প্রতিজ্ঞা (Protigya)", members: "75.5K members" },
        { name: "হজ ওমরা সহজ উপায়", members: "2.0K members" },
        { name: "ফিরে আসো রবের দিকে", members: "32 members" },
        { name: "Telecom Enthusiasts BD", members: "100.6K members" }
    ];

    return (
        <div className="bg-base-100 rounded-xl shadow-sm p-4 mt-4">
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <h2 className="text-xl font-bold">Groups</h2>
                <button className="btn btn-circle btn-sm btn-neutral">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>

            <div role="tablist" className="tabs tabs-bordered mb-4 overflow-x-auto w-full flex-nowrap">
                <a role="tab" className="tab tab-active text-primary border-primary font-semibold whitespace-nowrap">Public</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {groups.map((group, i) => (
                    <div key={i} className="flex items-center gap-4 p-2 hover:bg-base-200 rounded-lg transition-colors cursor-pointer">
                        <div className="avatar">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-base-300 overflow-hidden">
                                <img src={`https://images.unsplash.com/photo-${1700000000000 + i}?q=80&w=200&auto=format&fit=crop`} alt={group.name} className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold truncate text-sm sm:text-base">{group.name}</h3>
                            <div className="flex items-center gap-1 text-xs sm:text-sm text-base-content/70 mt-1">
                                <Globe className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">Public group · {group.members}</span>
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
