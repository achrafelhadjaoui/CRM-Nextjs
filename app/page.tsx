// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="h-screen w-screen bg-slate-200 flex flex-col justify-center items-center border gap-4">
//       <div>
//         <div className="text-6xl ">
//         Bien Venu
//       </div>
//       <Link className=" w-fit py-1 px-6 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer rounded-full mt-3"
//       href='/login'>
//         Login
//       </Link>
//       </div>
//     </main>
//   );
// }



'use client';

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 px-4">
      <div className="text-center space-y-6 animate-fade">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
          Bienvenue 👋
        </h1>

        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Accédez à votre espace client ou commencez votre parcours avec nous.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-6 py-2 rounded-full shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Se connecter
          </Link>
          {/* <Link
            href="/register"
            className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 px-6 py-2 rounded-full shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
          >
            S’inscrire
          </Link> */}
        </div>
      </div>
    </main>
  );
}
