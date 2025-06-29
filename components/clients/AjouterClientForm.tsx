"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';

type FormData = {
  nom: string;
  email: string;
  telephone: string;
};

export default function AjouterClientForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("📦 Form submitted:", data);
    await fetch("/api/clients/ajouter-client", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
    // onAdded(); // refetch or rerender list
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Ajouter un nouveau client
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nom */}
        <div className="flex flex-col gap-1">
          <label htmlFor="nom" className="text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            id="nom"
            type="text"
            placeholder="Entrez le nom"
            {...register("nom", { required: true })}
            className="px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {errors.nom && <span className="text-red-500 text-sm">Nom requis</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="exemple@email.com"
            {...register("email", { required: true })}
            className="px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {errors.email && <span className="text-red-500 text-sm">Email requis</span>}
        </div>

        {/* Téléphone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="telephone" className="text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            id="telephone"
            type="text"
            placeholder="06XXXXXXXX"
            {...register("telephone", { required: true })}
            className="px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {errors.telephone && (
            <span className="text-red-500 text-sm">Téléphone requis</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Ajouter Client
        </button>
        <DevTool control={control} placement="top-left" />
      </form>
    </div>
  );
}
