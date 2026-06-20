import { Globe, Pencil } from 'lucide-react';

export default function AboutSection() {
    return (
        <div className="bg-base-100 rounded-xl shadow-sm flex flex-col md:flex-row min-h-[500px]">
            {/* Sidebar */}
            <div className="w-full md:w-[300px] border-b md:border-b-0 md:border-r border-base-300 p-4">
                <h2 className="text-xl font-bold mb-4 px-2">About</h2>
                <ul className="menu bg-base-100 rounded-box p-0 w-full">
                    <li><a className="active text-primary bg-primary/10 font-medium">Intro</a></li>
                    {['Category', 'Personal details', 'Links', 'Communities', 'Offers', 'Work', 'Education', 'Hobbies', 'Interests', 'Travel', 'Contact info', 'Privacy and legal info', 'Names'].map(item => (
                        <li key={item}><a className="font-medium text-base-content/80 hover:bg-base-200">{item}</a></li>
                    ))}
                </ul>
            </div>
            
            {/* Content */}
            <div className="flex-1 p-6 space-y-8">
                {/* Bio */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Bio</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between group gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 flex items-center justify-center text-xl">
                                👋
                            </div>
                            <span className="font-medium">Full Stack Web Developer</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-base-content/60" />
                            <button className="btn btn-circle btn-sm btn-ghost bg-base-200">
                                <Pencil className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pinned details */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Pinned details</h3>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between group gap-4">
                        <div className="flex flex-wrap items-center gap-2 font-medium text-sm text-base-content/80">
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/></svg>
                                <span>Digital creator</span>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                <span>Dhaka, Bangladesh</span>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
                                <span>Asian University of Bangladesh - AUB</span>
                            </div>
                        </div>
                        <button className="btn btn-circle btn-sm btn-ghost bg-base-200 flex-shrink-0 self-start">
                            <Pencil className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
