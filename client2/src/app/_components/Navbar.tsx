// "use client";
import { CheckCircle, Package, Phone, User2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { hasRole } from "../api/hasRole";

const Navbar = async () => {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  let role = null;
  if (session && typeof session.user.name === "string") {
    role = await hasRole(session.user.id);
  }

  // const [userType, setUserType] = useState(false);

  // const toggleUserType = () => {
  //   setUserType(!userType);
  // }

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 text-black rtl:space-x-reverse"
          >
            <Package />
            {/* <Image src='' height={25} width={25} alt="logo"/> */}
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-black">
              TrustBox
            </span>
          </a>
          <ul className="flex flex-row">
            {role === "unset" && (
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
              >
                Get Started
              </Link>
            )}
          </ul>
          <ul className="flex flex-row md:hidden">
            <li>
              <a
                href="/verify-now"
                className="block rounded px-1 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                <CheckCircle />
              </a>
            </li>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="block rounded px-3 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              {session ? (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
                >
                  <User2 />
                  Sign Out
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
                  >
                    <User2 />
                    Sign In
                  </button>

                  {/* {userType ? (

                  <ul className="w-48 absolute rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <li className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                      Sign In as a User
                    </li>
                    <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                      Sign In as an Organization
                    </li>
                  </ul>
                  ) : ''} */}
                </>
              )}
            </Link>
          </ul>
          <div
            className="hidden w-full text-white md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
              <li>
                <a
                  href="/verify-now"
                  className="my-2 block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Verify Certificates Now
                </a>
              </li>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="block rounded px-3 text-gray-900 hover:bg-gray-100 md:border-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                {session ? (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
                  >
                    <User2 />
                    Sign Out
                  </button>
                ) : (
                  <>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
                  >
                    <User2 />
                    Sign In
                  </button>
                   {/* {userType ? (

                    <ul className="w-48 absolute rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                      <li className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                        Sign In as a User
                      </li>
                      <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                        Sign In as an Organization
                      </li>
                    </ul>
                    ) : ''} */}
                    </>
                )}
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
