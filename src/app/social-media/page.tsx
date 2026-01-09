// import Header from "@/app/_components/header";
// import Container from "@/app/_components/container";
// import Link from "next/link";

// export default function SocialMedia() {
//   const socials = [
//     { name: "Twitter", url: "https://twitter.com", icon: "𝕏" },
//     { name: "Instagram", url: "https://www.instagram.com/vessle02?igsh=aTZkYXkydmY5ZGlo&utm_source=qr", icon: "📷" },
//     { name: "Facebook", url: "https://facebook.com", icon: "f" },
//     { name: "LinkedIn", url: "https://linkedin.com", icon: "in" },
//     { name: "YouTube", url: "https://youtube.com", icon: "▶️" },
//   ];

//   return (
//     <main>
//       <Header />
//       <Container>
//         <div className="max-w-3xl mx-auto py-12">
//           <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
//             Connect With Us
//           </h1>
          
//           <div className="space-y-6">
//             <p className="text-lg text-slate-700 dark:text-slate-300">
//               Follow Vessle on social media to stay updated with the latest biblical insights and spiritual content.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
//               {socials.map((social) => (
//                 <Link
//                   key={social.name}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-4 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="text-2xl">{social.icon}</span>
//                     <span className="font-semibold text-slate-900 dark:text-white">
//                       {social.name}
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </main>
//   );
// }