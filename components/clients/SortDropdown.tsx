'use client'

type SortOption = 'name' | 'date' | '';
type SortDropdownProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
      className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    >
      <option value="">Trier par</option>
      <option value="name">Nom</option>
      <option value="date">Date de création</option>
    </select>
  );
}
