import Image from 'next/image'
import React from 'react'

const Subhero = () => {
    return (
        <div className='w-[80%] mx-auto py-10'>
            <div className=''>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3'>Create a Portfolio of all your Certificates</h1>
            <div className='grid md:grid-cols-5 grid-cols-2 pb-10 mb-5 '>
                <Image src='/certificate.png' className='shadow-md' height={200} width={200} alt='certificates'/>
                <Image src='/certificate.png' className='shadow-md' height={200} width={200} alt='certificates'/>
                <Image src='/certificate.png' className='shadow-md' height={200} width={200} alt='certificates'/>
                <Image src='/certificate.png' className='shadow-md' height={200} width={200} alt='certificates'/>
                <Image src='/certificate.png' className='shadow-md' height={200} width={200} alt='certificates'/>
            </div>
            </div>

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