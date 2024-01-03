import { FolderClosed } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Subhero = () => {
    return (
        <div className='w-[80%] mx-auto py-10'>

            {/* For User */}
            <div className=''>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3'>Create a Portfolio of all your Certificates</h1>
                    <FolderClosed />
                </div>
                <div className='grid md:grid-cols-5 grid-cols-2 pb-10 mb-5 gap-3'>
                    <Image src='/certificate.png' className='shadow-md' height={200} width={300} alt='certificates' />
                    <Image src='/certificate.png' className='shadow-md' height={200} width={300} alt='certificates' />
                    <Image src='/certificate.png' className='shadow-md' height={200} width={300} alt='certificates' />
                    <Image src='/certificate.png' className='shadow-md' height={200} width={300} alt='certificates' />
                    <Image src='/certificate.png' className='shadow-md' height={200} width={300} alt='certificates' />
                </div>
            </div>


            {/* For Organization */}
            <div>
                <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3'>Create Certificates for your Organization</h1>

                <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-10">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 1</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create / Upload a Certificate in our Editor</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Create Certificates<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 2</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Assign a List of Participants / Students to recieve the Certificate</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        <a href="/assign-certificates" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Assign Certificates<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 3</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Send the Mail of Certificates with Blockchain</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                    </li>
                </ol>


            </div>


            {/* For Both */}
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3'>Beat Forgers using High End Blockchain Security</h1>
            <div className='flex flex-row gap-3 overflow-x-auto'>

                <div className="block min-w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create Certificates with Trustbox Editor</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

                <div className="block min-w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add your own Blockchain QR</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

                <div className="block min-w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add your list of Participants / Students </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

                <div className="block min-w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Send the Certificates</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

                <div className="block min-w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Certificates are verified with your Organization Name</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

            </div>
        </div>
    )
}

export default Subhero