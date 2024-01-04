"use client";
import { Check, Scroll, Send, UploadCloud } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FileBarChart2, MailCheck } from "lucide-react";
import axios from "axios";

const Assign = () => {
  const [cert, setCert] = useState(false)
  const [status, setStatus] = useState(false)

  const togglecert = () => {
    setCert(!cert);
  }

  const fileChange = ()=>{
    setStatus(true)
  }

  const submit = async () => {
		const id = toast.loading("Please wait...", {
			theme: "dark",
		});
		const res = await axios.post("/api/sendMail", {
      name: "",
      email: "",
      message: "",
    }).then((e) => {
			toast.update(id, {
				render: "Certificate Assigned",
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				isLoading: false,
				icon: ({ theme, type }) => (
					<MailCheck className="text-[#bb86fc]" />
				),
			})
		}).catch((e) => {
      toast.update(id, {
        render: "Certificate Assigned",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        isLoading: false,
        icon: ({ theme, type }) => (
          <MailCheck className="text-[#bb86fc]" />
        ),
      })});
	};

  return (
    <div>
      <ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
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
            {!status ? <label
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
              <input onChange={fileChange} id="dropzone-file" type="file" className="hidden" />
            </label> : <div className="card shadow p-3 my-5 flex items center"><span className="text-success mr-2"><FileBarChart2 /></span> File Added!</div> }
            {status ? <button
              type="button"
              onClick={submit}
              className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
            >
              <Scroll /> Create Certificates
            </button> : <button
              type="button"
              onClick={togglecert}
              className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
            >
              <Scroll /> Upload Excel
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assign;
