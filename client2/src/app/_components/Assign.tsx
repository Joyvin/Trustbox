import { Scroll, Send, UploadCloud } from "lucide-react";
import Image from "next/image";
import React from "react";

const Assign = () => {
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
              className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
            >
              <Scroll /> Create Certificates
            </button>
            <button
              className="inline-flex items-center gap-2 ml-3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <Send />
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assign;
