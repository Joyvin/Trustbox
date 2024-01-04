import { Pencil, PlusCircle, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="mx-auto w-[70%]">
      <div className="flex max-w-sm flex-row rounded-lg bg-white">
        <div className="flex flex-col items-center py-10">
          <Image
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src="/userimg.jpg"
            height={24}
            width={24}
            alt="User image"
          />
          <h5 className="mt-5 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
        </div>
      </div>

      {/* <Image src='/userimg.jpg' className='m-10 shadow-md rounded-full' width={350} height={350} alt='User_image'/> */}
      <div className="pb-10 ">
        <h4 className="mb-1 text-lg tracking-tight text-gray-500 dark:text-white">
          Bio :
        </h4>
        <p className="text-md  mb-3 tracking-tight text-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          provident nostrum architecto quod pariatur harum odit? Minus
          consequatur aliquid, saepe accusantium eveniet, dolore laborum
          perspiciatis ea ullam, debitis magni rem?
        </p>
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
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
