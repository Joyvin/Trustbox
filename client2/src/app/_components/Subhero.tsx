import { FolderClosed } from "lucide-react";
import Image from "next/image";
import React from "react";
import { getServerAuthSession } from "~/server/auth";
import { hasRole } from "../api/hasRole";

const Subhero = async() => {
    const session = await getServerAuthSession();

    let role = null;
    if (session && typeof session.user.name === "string") {
      role = await hasRole(session.user.id);
    }   
  return (
    <>
      <div className="mx-auto w-[80%] py-10">
        {/* For User */}
        <div className="">
          <div className="flex justify-between">
            <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Create a Portfolio of all your Certificates
            </h1>
            <a href="/portfolio">
              <FolderClosed />
            </a>
          </div>
          <div className="mb-10 grid grid-cols-2 gap-4 pb-5 md:grid-cols-3">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* For Organization */}
      <div className="mx-auto w-[80%] py-10">
        <div className="mb-10 pb-5">
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create Certificates for your Organization
          </h1>

          <ol className="relative mb-10 border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Step 1
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create / Upload a Certificate in our Editor
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Create Certificates
                <svg
                  className="ms-2 h-3 w-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-5 ms-4">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Step 2
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Assign a List of Participants / Students to recieve the
                Certificate
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
              <a
                href="/assign-certificates"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Assign Certificates
                <svg
                  className="ms-2 h-3 w-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
            <li className="ms-4">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Step 3
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Send the Mail of Certificates with Blockchain
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: "url(/wave1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-auto w-[80%]">
            <h1 className="md:mb-3 mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Why your Organization should create certificates with Blockchain
            </h1>
            <div className="mx-auto grid w-[60%] gap-3 py-4 md:grid-cols-3">
              <div className="md:border-r border-gray-200 ">
                <h2 className="text-4xl font-extrabold">1</h2>
                <h3 className="mb-3 text-xl tracking-tight text-gray-900 dark:text-white">
                  Gains Credibility
                </h3>
              </div>
              <div className="md:ml-5 md:text-black text-white">
                <h2 className="text-4xl font-extrabold">2</h2>
                <h3 className="mb-3 text-xl tracking-tight">
                  Gains Credibility
                </h3>
              </div>
              <div className="md:border-l border-gray-200 md:pl-7 md:text-black text-white">
                <h2 className="text-4xl font-extrabold">3</h2>
                <h3 className="mb-3 text-xl tracking-tigh">
                  Gains Credibility
                </h3>
              </div>
            </div>
            <div className="mx-auto w-[50%]">
              <Image
                src="/certbg.png"
                className="md:w-[80%] container"
                height={300}
                width={300}
                alt="design"
              />
            </div>
          </div>
        </div>
      </div>

      {/* For Both */}
      <div className="dark bg-black">
        <div className="mx-auto w-[80%] py-10">
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Beat Forgers using High End Blockchain Security
          </h1>
          <div className="flex flex-row gap-3 overflow-x-auto">
            <div className="block md:min-w-[400px] min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Create Certificates with Trustbox Editor
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>

            <div className="block md:min-w-[400px] min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Add your own Blockchain QR
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>

            <div className="block md:min-w-[400px] min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Add your list of Participants / Students
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>

            <div className="block md:min-w-[400px] min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Send the Certificates
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>

            <div className="block md:min-w-[400px] min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Certificates are verified with your Organization Name
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subhero;
