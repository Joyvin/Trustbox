"use client";
import React from "react";
import { assignRole } from "~/app/api/isUser";
import { useRouter } from "next/router";
import { CheckCircle, XCircle } from "lucide-react";

const ConfirmationDialog: React.FC = () => {
  const router = useRouter();

  const handleYesClick = async () => {
    await assignRole();
  };

  const handleNoClick = async () => {
    await router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="rounded-md bg-white p-8 shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-700">
          Do you want to proceed?
        </h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleYesClick}
            className="flex items-center rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            <CheckCircle className="mr-2" /> Yes
          </button>
          <button
            onClick={handleNoClick}
            className="flex items-center rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            <XCircle className="mr-2" /> No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
