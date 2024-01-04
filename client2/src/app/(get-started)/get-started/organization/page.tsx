"use client";
import React, { useState } from "react";
import type { FormEvent } from "react";
import { createOrganization } from "~/app/api/isOrganizer";
import { uid } from "~/app/api/auths";
import { useRouter } from "next/navigation";
// Define the type for the result of the createOrganization function
type CreateOrganizationResult = string | null;

const OrganizationForm: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    // Call uid and await its result
    const userId = await uid();

    if (userId) {
      const result = (await createOrganization(
        userId,
        name,
        email,
      )) as CreateOrganizationResult;
    router.push("/")
      console.log(result);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-5 w-[50%]">
      <h2 className="py-10  mb-3 text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">To Register yourself as a Organization on Trustbox</h2>
        <div className="mb-5">
          <label
            htmlFor="grid-name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Organization Name
          </label>
          <input
            id="grid-name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="grid-email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            id="grid-email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Organization
        </button>
    </form>
  );
};

export default OrganizationForm;
