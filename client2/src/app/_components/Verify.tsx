import { UploadCloud } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Verify = () => {
    return (
        <div>
            <Image src='/Cert.png' width={2000} height={1000} alt='certificate'/>
            <div className='w-[80%] mx-auto'>
                <h1 className='text-2xl pt-5 font-bold tracking-tight text-gray-900 dark:text-white mb-3'>Verify Your Certificates</h1>
                <div className="flex items-center justify-center">
                    <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3'>Verify by Upload</h1>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 my-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center py-10">
                            <UploadCloud />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>

                <div className="flex items-center gap-3 justify-center">
                    <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-2'>Verify by Link</h1>
                    <input type="email" name="email" id="email" className="mx-3 w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Scan the QR on a certificate and put the link here" required />
                </div>
            </div>
        </div>
    )
}

export default Verify