export default function ReelsSection() {
    const reels = Array(8).fill({ views: '506' });

    return (
        <div className="bg-base-100 rounded-xl shadow-sm p-4 mt-4">
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <h2 className="text-xl font-bold">Reels</h2>
                <button className="btn btn-ghost btn-sm text-primary font-semibold">
                    Create reel
                </button>
            </div>
            
            <div role="tablist" className="tabs tabs-bordered mb-4 overflow-x-auto w-full flex-nowrap">
                <a role="tab" className="tab tab-active text-primary border-primary font-semibold whitespace-nowrap">Your Reels</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Saved reels</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4">
                {reels.map((_, i) => (
                    <div key={i} className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer bg-base-300">
                        <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=400&auto=format&fit=crop`} alt="Reel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-sm font-medium">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                            {Math.floor(Math.random() * 900) + 100}
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
