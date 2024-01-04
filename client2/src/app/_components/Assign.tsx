"use client";
import { Check, Scroll, Send, UploadCloud } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Assign = () => {
  const [cert, setCert] = useState(false)

  const togglecert = () => {
    setCert(!cert);
  }
  return (
    <div>
      <div className="mx-auto md:w-[80%]">
        <div className="grid gap-3 md:grid-cols-3">
          <Image
            src="/Download.png"
            height={500}
            width={1000}
            alt="certificate"
            className="col-span-2 rounded-md border-2 border-white shadow-md"
          />
          <div>
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Add an Excel to Create certificates with different participants
            </h3>
            <label
              htmlFor="dropzone-file"
              className="dark:hover:bg-bray-800 my-2 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center py-10">
                <UploadCloud />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  XSX (MAX. 1GB)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <button
              type="button"
              onClick={togglecert}
              className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
            >
              <Scroll /> Create Certificates
            </button>
            {cert ? <>
            <div
              id="toast-top-right"
              className="space-x fixed right-5 top-5 flex w-full max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-lg bg-white p-4 text-gray-500 shadow rtl:divide-x-reverse dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
              role="alert"
            >
              <Check/>
              <div className="ps-4 text-sm font-normal">
                Certificates Created successfully.
              </div>
            </div>
            </> : ''
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assign;
