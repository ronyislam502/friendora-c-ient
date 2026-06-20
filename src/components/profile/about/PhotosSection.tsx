import { MoreHorizontal } from 'lucide-react';

export default function PhotosSection() {
    return (
        <div className="bg-base-100 rounded-xl shadow-sm p-4 mt-4">
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <h2 className="text-xl font-bold">Photos</h2>
                <div className="flex items-center gap-2">
                    <button className="btn btn-ghost btn-sm text-primary font-semibold">
                        Add photos/video
                    </button>
                    <button className="btn btn-circle btn-sm btn-neutral">
                        <MoreHorizontal className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-bordered mb-4 overflow-x-auto w-full flex-nowrap">
                <a role="tab" className="tab tab-active text-primary border-primary font-semibold whitespace-nowrap">Your photos</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Photos of you</a>
                <a role="tab" className="tab font-semibold whitespace-nowrap">Albums</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4">
                {Array(6).fill(0).map((_, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer bg-base-300">
                        <img src={`https://images.unsplash.com/photo-${1600000000000 + i}?q=80&w=400&auto=format&fit=crop`} alt="Photo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
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
