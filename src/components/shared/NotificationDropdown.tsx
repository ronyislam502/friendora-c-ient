// "use client";

// import { Bell, MoreHorizontal, Users, MessageCircle, Flag } from 'lucide-react';
// import { useState } from 'react';

// const NOTIFICATIONS_DATA = [
//     {
//         id: 1,
//         author: {
//             name: "লামিয়া আক্তার",
//             avatar: "https://i.pravatar.cc/150?img=1"
//         },
//         actionText: "invited you to follow",
//         targetText: "Lamiya Sarker.",
//         time: "4h",
//         iconType: "flag",
//         iconColor: "bg-[#F57C00]",
//         buttons: ["Accept", "Decline"],
//         isUnread: true
//     },
//     {
//         id: 2,
//         author: {
//             name: "Drahmed Abdel Monem Abdel Aal",
//             avatar: "https://i.pravatar.cc/150?img=2"
//         },
//         actionText: "invited you to join the public group",
//         targetText: "قضايا التعليم برؤية خبير...",
//         time: "7h",
//         iconType: "group",
//         iconColor: "bg-[#0866FF]",
//         buttons: ["Join", "Delete"],
//         isUnread: true
//     },
//     {
//         id: 3,
//         author: {
//             name: "تحفة مصممة جرافيك",
//             avatar: "https://i.pravatar.cc/150?img=3"
//         },
//         actionText: "invited you to follow",
//         targetText: ".المصممة ملاگ",
//         time: "9h",
//         iconType: "flag",
//         iconColor: "bg-[#F57C00]",
//         buttons: [],
//         isUnread: true
//     },
//     {
//         id: 4,
//         author: {
//             name: "طلال ابراهيم",
//             avatar: "https://i.pravatar.cc/150?img=4"
//         },
//         actionText: "mentioned you and other followers in a comment.",
//         targetText: "",
//         time: "18h",
//         iconType: "comment",
//         iconColor: "bg-[#31A24C]",
//         buttons: [],
//         isUnread: true
//     },
//     {
//         id: 5,
//         author: {
//             name: "Jalal Zrdb",
//             avatar: "https://i.pravatar.cc/150?img=5"
//         },
//         actionText: "invited you to follow",
//         targetText: ".بليق تب2",
//         time: "18h",
//         iconType: "flag",
//         iconColor: "bg-[#F57C00]",
//         buttons: ["Accept", "Decline"],
//         isUnread: true
//     },
//     {
//         id: 6,
//         author: {
//             name: "Julio Cesar Navegador",
//             avatar: "https://i.pravatar.cc/150?img=6"
//         },
//         actionText: "mentioned you and other followers in a post.",
//         targetText: "",
//         time: "1d",
//         iconType: "comment",
//         iconColor: "bg-[#31A24C]",
//         buttons: [],
//         isUnread: true
//     },
//     {
//         id: 7,
//         author: {
//             name: "Julio Cesar Navegador",
//             avatar: "https://i.pravatar.cc/150?img=6"
//         },
//         actionText: "mentioned you and other followers in a post.",
//         targetText: "",
//         time: "1d",
//         iconType: "comment",
//         iconColor: "bg-[#31A24C]",
//         buttons: [],
//         isUnread: true
//     },
//     {
//         id: 8,
//         author: {
//             name: "Julio Cesar Navegador",
//             avatar: "https://i.pravatar.cc/150?img=6"
//         },
//         actionText: "mentioned you and other followers in a post.",
//         targetText: "",
//         time: "1d",
//         reactions: "4 reactions · 2 comments",
//         iconType: "comment",
//         iconColor: "bg-[#31A24C]",
//         buttons: [],
//         isUnread: true
//     },
//     {
//         id: 9,
//         author: {
//             name: "Julio Cesar Navegador",
//             avatar: "https://i.pravatar.cc/150?img=6"
//         },
//         actionText: "mentioned you and other followers in a post.",
//         targetText: "",
//         time: "1d",
//         reactions: "4 reactions · 1 comment",
//         iconType: "comment",
//         iconColor: "bg-[#31A24C]",
//         buttons: [],
//         isUnread: true
//     }
// ];

// const NotificationDropdown = () => {
//     return (
//         <div className="dropdown dropdown-end ml-1">
//             <div tabIndex={0} role="button" className="h-10 w-10 bg-[#3A3B3C] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#4E4F50] transition-colors relative">
//                 <Bell className="text-[#E4E6EB] h-[22px] w-[22px]" strokeWidth={0} fill="currentColor" />
//                 <div className="absolute -top-[2px] -right-[2px] bg-[#E41E3F] text-white text-[12px] font-bold rounded-full h-[19px] min-w-[19px] flex items-center justify-center px-[4px] border-2 border-[#242526]">
//                     9+
//                 </div>
//             </div>

//             <div tabIndex={0} className="dropdown-content z-[1] shadow-xl bg-[#242526] rounded-xl w-[360px] top-12 border border-[#3E4042] overflow-hidden pt-3 flex flex-col max-h-[85vh]">

//                 {/* Header */}
//                 <div className="flex items-center justify-between px-4 pb-2">
//                     <h2 className="text-[24px] font-bold text-[#E4E6EB]">Notifications</h2>
//                     <div className="w-8 h-8 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
//                         <MoreHorizontal className="text-[#A8ABAF] w-5 h-5" />
//                     </div>
//                 </div>

//                 {/* Tabs */}
//                 <div className="flex items-center gap-2 px-4 pb-2">
//                     <button className="bg-[#2D88FF] bg-opacity-20 text-[#2D88FF] px-3 py-1.5 rounded-full font-semibold text-[15px]">All</button>
//                     <button className="hover:bg-[#3A3B3C] text-[#E4E6EB] px-3 py-1.5 rounded-full font-semibold text-[15px] transition-colors">Unread</button>
//                 </div>

//                 {/* 'Earlier' and 'See all' Section */}
//                 <div className="flex items-center justify-between px-4 py-2 mt-1">
//                     <h3 className="text-[17px] font-semibold text-[#E4E6EB]">Earlier</h3>
//                     <span className="text-[#0866FF] hover:bg-[#3A3B3C] px-2 py-1 rounded-md cursor-pointer text-[15px] transition-colors">See all</span>
//                 </div>

//                 {/* Notifications List */}
//                 <div className="overflow-y-auto flex-1 pb-2 scrollbar-thin scrollbar-thumb-[#4E4F50] scrollbar-track-transparent">
//                     {NOTIFICATIONS_DATA.map((notif) => (
//                         <div key={notif.id} className="flex items-start gap-3 px-2 py-2 hover:bg-[#3A3B3C] cursor-pointer rounded-lg mx-2 transition-colors relative group">

//                             {/* Avatar & Icon Overlay */}
//                             <div className="relative flex-shrink-0 mt-1">
//                                 <div className="w-14 h-14 rounded-full overflow-hidden">
//                                     <img src={notif.author.avatar} alt="Avatar" className="w-full h-full object-cover" />
//                                 </div>
//                                 <div className={`absolute -bottom-1 -right-1 w-[28px] h-[28px] rounded-full ${notif.iconColor} flex items-center justify-center border-[3px] border-[#242526]`}>
//                                     {notif.iconType === 'flag' && <Flag className="w-[14px] h-[14px] text-white" fill="currentColor" strokeWidth={0} />}
//                                     {notif.iconType === 'group' && <Users className="w-[14px] h-[14px] text-white" fill="currentColor" strokeWidth={0} />}
//                                     {notif.iconType === 'comment' && <MessageCircle className="w-[14px] h-[14px] text-white" fill="currentColor" strokeWidth={0} />}
//                                 </div>
//                             </div>

//                             {/* Main Content */}
//                             <div className="flex flex-col flex-1">
//                                 <p className="text-[15px] leading-snug text-[#E4E6EB]">
//                                     <span className="font-semibold">{notif.author.name}</span> {notif.actionText} {notif.targetText && <span className="font-semibold">{notif.targetText}</span>}
//                                 </p>
//                                 <div className="flex items-center text-[#A8ABAF] text-[13px] mt-0.5 font-medium gap-1">
//                                     <span className={`font-semibold ${notif.isUnread ? 'text-[#0866FF]' : ''}`}>{notif.time}</span>
//                                     {notif.reactions && (
//                                         <>
//                                             <span className="font-normal text-[15px] leading-none mb-1">·</span>
//                                             <span>{notif.reactions}</span>
//                                         </>
//                                     )}
//                                 </div>

//                                 {/* Accept/Decline Buttons */}
//                                 {notif.buttons.length > 0 && (
//                                     <div className="flex items-center gap-2 mt-2">
//                                         <button
//                                             className="flex-1 bg-[#0866FF] hover:bg-[#1877F2] text-white font-semibold py-1.5 rounded-lg transition-colors text-[15px]"
//                                             onMouseDown={(e) => e.preventDefault()}
//                                         >
//                                             {notif.buttons[0]}
//                                         </button>
//                                         <button
//                                             className="flex-1 bg-[#3A3B3C] hover:bg-[#4E4F50] text-[#E4E6EB] font-semibold py-1.5 rounded-lg transition-colors text-[15px]"
//                                             onMouseDown={(e) => e.preventDefault()}
//                                         >
//                                             {notif.buttons[1]}
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Unread Blue Dot */}
//                             {notif.isUnread && (
//                                 <div className="w-3 h-3 rounded-full bg-[#0866FF] mt-4 mr-1 flex-shrink-0"></div>
//                             )}

//                             {/* 'More' Options Hover Button */}
//                             <div className="absolute top-1/2 -translate-y-1/2 right-6 w-8 h-8 rounded-full bg-[#242526] border border-[#3E4042] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#3A3B3C] shadow-md z-10 hidden sm:flex">
//                                 <MoreHorizontal className="w-5 h-5 text-[#A8ABAF]" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NotificationDropdown;
