// components/client/Pagination.tsx
'use client'

import React from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-6">
      <nav className="inline-flex rounded-md shadow-sm overflow-hidden border border-gray-300">
        {/* Previous */}
        <button
          className="px-3 py-2 bg-white text-gray-700 hover:bg-gray-100 border-r disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-3 py-2 ${
              currentPage === i + 1
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          className="px-3 py-2 bg-white text-gray-700 hover:bg-gray-100 border-l disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </nav>
    </div>
  );
}
