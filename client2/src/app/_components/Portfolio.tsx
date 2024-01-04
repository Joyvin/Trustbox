import { Pencil, PlusCircle, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="mx-auto w-[70%]">
      <div className="flex flex-row rounded-lg bg-white">
        <div className="flex flex-row gap-10 items-center pt-10">
          <Image
            className="mb-3 rounded-full shadow-lg"
            src="/userimg.jpg"
            height={180}
            width={180}
            alt="User image"
          />
          <div className="min-w-md w-full">
          <h5 className="mt-5 text-5xl w-full font-bold text-gray-900 dark:text-white">
            Jayden Colaco
          </h5>
          <span className="text-lg text-gray-500 dark:text-gray-400">
            Frontend Designer
          </span>
          <h4 className="mb-1 text-lg tracking-tight text-gray-500 dark:text-white">
          Bio :
        </h4>
        <p className="text-md  mb-3 tracking-tight text-gray-900 dark:text-white">
        I am Jayden Colaco, a first year engineering student. On my way to find an idea that would change the world. I have thoroughly enjoyed the participation in these hackathons during which I have worked on small projects to gain experience. I am always looking for new challenges and opportunities to learn and grow as a developer.

I am excited to share my work and experiences on Devfolio and to connect with other like-minded developers. Feel free to reach out to me if you have any questions or just want to chat about tech!
        </p>
          </div>
        </div>
      </div>

      {/* <Image src='/userimg.jpg' className='m-10 shadow-md rounded-full' width={350} height={350} alt='User_image'/> */}
      <div className="pb-10 ">
        <div className="mt-4 flex gap-3 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <Send />
            Send Portfolio
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/grp-cert/cert1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/grp-cert/cert2.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/grp-cert/cert3.jpeg"            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/grp-cert/cert4.jpeg"            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/grp-cert/cert5.jpeg"            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/grp-cert/cert6.jpeg"            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/grp-cert/cert7.jpeg"            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/grp-cert/cert8.jpeg"            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/grp-cert/cert9.png"            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
