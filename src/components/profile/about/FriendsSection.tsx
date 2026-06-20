import { MoreHorizontal } from 'lucide-react';

export default function FriendsSection() {
    const friends = [
        { name: "Md Shafiqul Islam Shuvo", mutual: "0" },
        { name: "JAMIA TAHZEEB UI ISLAM", mutual: "174" },
        { name: "Muhammad Mahadi Hasan", mutual: "37" },
        { name: "Hms Hms", mutual: "182" },
        { name: "Al Amin Akanda Labin", mutual: "136" },
        { name: "Md Al Mamun Nova", mutual: "80" },
        { name: "Al Amin Hossen Goni", mutual: "42" },
        { name: "Asraful Islam", mutual: "24" }
    ];

    return (
        <div className="bg-base-100 rounded-xl shadow-sm p-4 mt-4">
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <h2 className="text-xl font-bold">Friends</h2>
                <div className="flex items-center gap-2">
                    <button className="btn btn-ghost btn-sm text-primary font-semibold">
                        Friend requests
                    </button>
                    <button className="btn btn-ghost btn-sm text-primary font-semibold">
                        Find Friends
                    </button>
                    <button className="btn btn-circle btn-sm btn-neutral">
                        <MoreHorizontal className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-bordered mb-4 overflow-x-auto w-full flex-nowrap">
                <a role="tab" className="tab tab-active text-primary border-primary font-semibold whitespace-nowrap">Friends</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Recently Added</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Birthdays</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Current city</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Hometown</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Followers</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Following</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {friends.map((friend, i) => (
                    <div key={i} className="flex items-center gap-4 p-2 hover:bg-base-200 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-base-300">
                        <div className="avatar">
                            <div className="w-20 h-20 rounded-xl bg-base-300 overflow-hidden">
                                {i === 0 ? (
                                    <div className="w-full h-full flex items-center justify-center bg-base-300">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-base-content/30"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                    </div>
                                ) : (
                                    <img src={`https://images.unsplash.com/photo-${1550000000000 + i}?q=80&w=200&auto=format&fit=crop`} alt={friend.name} className="object-cover w-full h-full" />
                                )}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold truncate text-base">{friend.name}</h3>
                            {friend.mutual !== "0" && (
                                <div className="text-sm text-base-content/70 mt-1">
                                    {friend.mutual} mutual friends
                                </div>
                            )}
                        </div>
                        <button className="btn btn-ghost btn-circle btn-sm flex-shrink-0">
                            <MoreHorizontal className="w-5 h-5 text-base-content/70" />
                        </button>
                    </div>
                ))}
            </div>

            <button className="btn btn-block btn-neutral mt-2">
                See all
            </button>
        </div>
    )
}
