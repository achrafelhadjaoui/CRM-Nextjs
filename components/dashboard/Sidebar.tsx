"use client"
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-white shadow-lg flex flex-col justify-between p-6 z-10">
      {/* Profile */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-20 h-20 bg-slate-200 rounded-full border" />
        <p className="text-lg font-semibold text-gray-800">Nom d'utilisateur</p>
        <p className="text-sm text-gray-500">Rôle</p>
      </div>

      {/* Navigation */}
      <nav className="mt-10 w-full">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/dashboard/clients"
              className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-100 transition text-gray-700 font-medium"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/clients/ajouter-client"
              className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-100 transition text-gray-700 font-medium"
            >
              Ajouter Client
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <Link
        href="/"
        className="mt-6 text-center border border-red-500 text-red-600 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
      >
        Déconnexion
      </Link>
    </aside>
  );
}

