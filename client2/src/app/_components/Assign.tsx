import { Scroll, UploadCloud } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Assign = () => {
  return (
    <div>
      <div className='md:w-[80%] mx-auto'>
        <div className='grid md:grid-cols-3 gap-3'>
          <Image src='/Cert.png' height={500} width={1000} alt='certificate' className='col-span-2 rounded-md shadow-md border-2 border-white' />
          <div>
            <h3 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3'>Add an Excel to Create certificates with different participants</h3>
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 my-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center py-10">
                <UploadCloud />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">XSX (MAX. 1GB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <button type="button" className="gap-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 "><Scroll/> Create Certificates</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assign