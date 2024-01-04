"use client";
import React, { useState } from "react";
import type { FormEvent } from "react";
import { createOrganization } from "~/app/api/isOrganizer";
import { uid } from "~/app/api/auths";
// Define the type for the result of the createOrganization function
type CreateOrganizationResult = string | null;

const OrganizationForm: React.FC = () => {
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
      console.log(result);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-5 w-full max-w-lg">
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-name"
          >
            Organization Name
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="grid-name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-6 w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="grid-email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-6 w-full px-3">
          <button
            type="submit"
            className="focus:shadow-outline w-full rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
          >
            Create Organization
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrganizationForm;
