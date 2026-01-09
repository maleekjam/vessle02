// "use client";

// import Link from "next/link";
// import HeaderContent from "./header-content";

// export function Cover() {
//   return (
//     <section id="cover" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
//       <div className="max-w-5xl w-full mx-auto px-4">
//         {/* large header content as hero (visual only) */}
//         <HeaderContent isLarge />

//         <div className="max-w-3xl mx-auto space-y-8 mt-8">
//           <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
//             Put in the Verse of the Days.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
//             <Link
//               href="/posts"
//               className="px-8 py-3 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity"
//             >
//               Read Posts
//             </Link>
//             <Link
//               href="/#about"
//               className="px-8 py-3 rounded-md border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }