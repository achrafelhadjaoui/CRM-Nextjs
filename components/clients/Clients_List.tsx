// 'use client'
// import { useEffect, useState } from "react";
// import moment from "moment";
// import { Client } from "@/types/clients";
// import { MdModeEdit } from "react-icons/md";
// import { MdDelete  } from "react-icons/md";
// import Link from "next/link";

// export default function ClientsList() {
//     const [clients, setClients] = useState<Client[]>([])

//     const fetchClients = async () => {;
//     const fetchData = await fetch('/api/clients');

//     const dataResponse = await fetchData.json();

//     setClients(dataResponse.data);

//   };

//   useEffect(() => {
//     fetchClients();
    
//   }, []);



//     return(
//         <div className="p-4">
//             <h2 className="text-2xl font-semibold">Client List</h2>
//             <div>
//                 <div>filter</div>
//                 <div>search</div>
//                 <Link href='/dashboard/clients/ajouter-client' className="px-4 py-1.5 bg-blue-600 rounded cursor-pointer hover:bg-blue-700 text-white">Ajouter</Link>
//             </div>
//             <div className="mt-3 ">
//                 <table className="border w-full">           
//                     <thead>
//                         <tr className="bg-black text-white">
//                             <th className="py-2 ">Nom</th>
//                             <th className="py-2 ">Email</th>
//                             <th className="py-2 ">Telephone</th>
//                             <th className="py-2 ">date</th>
//                             <th className="py-2 ">Action</th>
//                         </tr>
//                     </thead>

//                     <tbody className="">
//                         {clients.map((el, index) => {
//                             return(
//                                 <tr key={index} className="p-3 mt-2 border">
//                                 <td className=" p-2 ">{el.nom}</td>
//                                 <td className=" p-2 ">{el.email}</td>
//                                 <td className=" p-2 ">{el.telephone}</td>
//                                 <td className=" p-2 ">{moment(el.date).format("LL")}</td>
//                                 <td className="px-2 py-4 flex justify-center items-center gap-1">
//                                     <div className="text-xl bg-blue-100 p-2 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white"><MdModeEdit/></div>
//                                     <div className="text-xl bg-red-100 p-2 rounded-full cursor-pointer hover:bg-red-500 hover:text-white"><MdDelete/></div>
//                                 </td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }







// 'use client'

// import { useEffect, useState } from "react";
// import moment from "moment";
// import { Client } from "@/types/clients";
// import { MdModeEdit, MdDelete } from "react-icons/md";
// import Link from "next/link";

// export default function ClientsList() {
//   const [clients, setClients] = useState<Client[]>([]);

//   useEffect(() => {
//     const fetchClients = async () => {
//       const response = await fetch('/api/clients');
//       const data = await response.json();
//       setClients(data.data);
//       console.log(data.data)
//     };
//     fetchClients();
//   }, []);

//   return (
//     <div className="w-full p-6 bg-white rounded-lg shadow-md space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Liste des Clients</h2>
//         <Link
//           href="/dashboard/clients/ajouter-client"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//         >
//           + Ajouter Client
//         </Link>
//       </div>

//       {/* Filter & Search Bar */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <input
//           type="text"
//           placeholder="🔍 Rechercher un client..."
//           className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//         />
//         <select
//           className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//         >
//           <option value="">Trier par</option>
//           <option value="name">Nom</option>
//           <option value="date">Date de création</option>
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 text-sm">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="px-4 py-3 text-left">Nom</th>
//               <th className="px-4 py-3 text-left">Email</th>
//               <th className="px-4 py-3 text-left">Téléphone</th>
//               <th className="px-4 py-3 text-left">Date</th>
//               <th className="px-4 py-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50 transition">
//                 <td className="px-4 py-3">{client.nom}</td>
//                 <td className="px-4 py-3">{client.email}</td>
//                 <td className="px-4 py-3">{client.telephone}</td>
//                 <td className="px-4 py-3">{moment(client.date).format("LL")}</td>
//                 <td className="px-4 py-3 flex justify-center gap-2">
//                   <button
//                     className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
//                     aria-label="Modifier"
//                   >
//                     <MdModeEdit />
//                   </button>
//                   <button
//                     className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition"
//                     aria-label="Supprimer"
//                   >
//                     <MdDelete />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//             {/* Pagination */}
// <div className="flex justify-center mt-6">
//   <nav className="inline-flex rounded-md shadow-sm overflow-hidden border border-gray-300">
//     <button
//       className="px-3 py-2 bg-white text-gray-700 hover:bg-gray-100 border-r"
//       disabled
//     >
//       Précédent
//     </button>
//     <button className="px-3 py-2 bg-blue-600 text-white font-semibold">
//       1
//     </button>
//     <button className="px-3 py-2 bg-white text-gray-700 hover:bg-gray-100">
//       2
//     </button>
//     <button className="px-3 py-2 bg-white text-gray-700 hover:bg-gray-100">
//       3
//     </button>
//     <button className="px-3 py-2 bg-white text-gray-700 hover:bg-gray-100 border-l">
//       Suivant
//     </button>
//   </nav>
// </div>


//       </div>
//     </div>
//   );
// }






// 'use client'

// import { useEffect, useState } from "react";
// import moment from "moment";
// import { Client } from "@/types/clients";
// import { MdModeEdit, MdDelete } from "react-icons/md";
// import Link from "next/link";

// export default function ClientsList() {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [page, setPage] = useState(1);
//   const clientsPerPage = 5;

//   useEffect(() => {
//     const fetchClients = async () => {
//       const response = await fetch('/api/clients');
//       const data = await response.json();
//       setClients(data.data);
//     };
//     fetchClients();
//   }, []);

//   const totalPages = Math.ceil(clients.length / clientsPerPage);
//   const paginatedClients = clients.slice((page - 1) * clientsPerPage, page * clientsPerPage);

//   return (
//     <div className="w-full p-6 bg-white rounded-lg shadow-md space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Liste des Clients</h2>
//         <Link
//           href="/dashboard/clients/ajouter-client"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//         >
//           + Ajouter Client
//         </Link>
//       </div>

//       {/* Filter & Search Bar */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <input
//           type="text"
//           placeholder="🔍 Rechercher un client..."
//           className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//         />
//         <select
//           className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//         >
//           <option value="">Trier par</option>
//           <option value="name">Nom</option>
//           <option value="date">Date de création</option>
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 text-sm">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="px-4 py-3 text-left">Nom</th>
//               <th className="px-4 py-3 text-left">Email</th>
//               <th className="px-4 py-3 text-left">Téléphone</th>
//               <th className="px-4 py-3 text-left">Date</th>
//               <th className="px-4 py-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedClients.map((client, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50 transition">
//                 <td className="px-4 py-3">{client.nom}</td>
//                 <td className="px-4 py-3">{client.email}</td>
//                 <td className="px-4 py-3">{client.telephone}</td>
//                 <td className="px-4 py-3">{moment(client.date).format("LL")}</td>
//                 <td className="px-4 py-3 flex justify-center gap-2">
//                   <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
//                     <MdModeEdit />
//                   </button>
//                   <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition">
//                     <MdDelete />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6">
//         <nav className="inline-flex rounded-md shadow-sm overflow-hidden border border-gray-300">
//           <button
//             className="px-3 py-2 bg-white text-gray-700 hover:bg-gray-100 border-r disabled:opacity-50"
//             onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//             disabled={page === 1}
//           >
//             Précédent
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setPage(i + 1)}
//               className={`px-3 py-2 ${
//                 page === i + 1
//                   ? "bg-blue-600 text-white font-semibold"
//                   : "bg-white text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}

//           <button
//             className="px-3 py-2 bg-white text-gray-700 hover:bg-gray-100 border-l disabled:opacity-50"
//             onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
//             disabled={page === totalPages}
//           >
//             Suivant
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// }




// 'use client'

// import { useEffect, useState } from "react";
// import moment from "moment";
// import { Client } from "@/types/clients";
// import { MdModeEdit, MdDelete } from "react-icons/md";
// import Link from "next/link";
// import Pagination from "@/components/clients/Pagination";
// import SearchBar from "@/components/clients/SearchBar"; // ✅ add this

// export default function ClientsList() {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [page, setPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const clientsPerPage = 5;

//   useEffect(() => {
//     const fetchClients = async () => {
//       const response = await fetch('/api/clients');
//       const data = await response.json();
//       setClients(data.data);
//     };
//     fetchClients();
//   }, []);

//   const filteredClients = clients.filter(client =>
//     client.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     client.telephone.includes(searchTerm)
//   );

//   const totalPages = Math.ceil(filteredClients.length / clientsPerPage);
//   const paginatedClients = filteredClients.slice((page - 1) * clientsPerPage, page * clientsPerPage);

//   return (
//     <div className="w-full p-6 bg-white rounded-lg shadow-md space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Liste des Clients</h2>
//         <Link
//           href="/dashboard/clients/ajouter-client"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//         >
//           + Ajouter Client
//         </Link>
//       </div>

//       {/* Search and Sort */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <SearchBar
//           value={searchTerm}
//           onChange={(val) => {
//             setSearchTerm(val);
//             setPage(1); // Reset page on search
//           }}
//         />
//         <select
//           className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//         >
//           <option value="">Trier par</option>
//           <option value="name">Nom</option>
//           <option value="date">Date de création</option>
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto rounded">
//         <table className="min-w-full border border-gray-200 text-sm">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="px-4 py-3 text-left">Nom</th>
//               <th className="px-4 py-3 text-left">Email</th>
//               <th className="px-4 py-3 text-left">Téléphone</th>
//               <th className="px-4 py-3 text-left">Date</th>
//               <th className="px-4 py-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedClients.map((client, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50 transition">
//                 <td className="px-4 py-3">{client.nom}</td>
//                 <td className="px-4 py-3">{client.email}</td>
//                 <td className="px-4 py-3">{client.telephone}</td>
//                 <td className="px-4 py-3">{moment(client.date).format("LL")}</td>
//                 <td className="px-4 py-3 flex justify-center gap-2">
//                   <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
//                     <MdModeEdit />
//                   </button>
//                   <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition">
//                     <MdDelete />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Pagination
//         currentPage={page}
//         totalPages={totalPages}
//         onPageChange={(page) => setPage(page)}
//       />
//     </div>
//   );
// }



'use client'

import { useEffect, useState } from "react";
import moment from "moment";
import { Client } from "@/types/clients";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Link from "next/link";
import Pagination from "@/components/clients/Pagination";
import SearchBar from "@/components/clients/SearchBar";
import SortDropdown from "@/components/clients/SortDropdown"; 

export default function ClientsList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<'' | 'name' | 'date'>('');
  const clientsPerPage = 5;

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('/api/clients');
      const data = await response.json();
      setClients(data.data);
    };
    fetchClients();
  }, []);

  const filteredClients = clients
    .filter(client =>
      client.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.telephone.includes(searchTerm)
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.nom.localeCompare(b.nom);
      if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });

  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);
  const paginatedClients = filteredClients.slice((page - 1) * clientsPerPage, page * clientsPerPage);

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Liste des Clients</h2>
        <Link
          href="/dashboard/clients/ajouter-client"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          + Ajouter Client
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <SearchBar
          value={searchTerm}
          onChange={(val) => {
            setSearchTerm(val);
            setPage(1); // reset page on search
          }}
        />
        <SortDropdown value={sortBy} onChange={(val) => setSortBy(val)} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Nom</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Téléphone</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedClients.map((client, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-3">{client.nom}</td>
                <td className="px-4 py-3">{client.email}</td>
                <td className="px-4 py-3">{client.telephone}</td>
                <td className="px-4 py-3">{moment(client.date).format("LL")}</td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                    <MdModeEdit />
                  </button>
                  <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(page) => setPage(page)}
      />
    </div>
  );
}
