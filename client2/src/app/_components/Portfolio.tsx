import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
        <div className='grid md:grid-cols-3 gap-3'>
            <Image src='certificate.png' className='rounded-full' width={100} height={100} alt='User_image'/>
            <div className='col-span-2'>
                <h4>Name :</h4>
                <h3>Alvin Dsouza</h3>
                <h4>Bio :</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident nostrum architecto quod pariatur harum odit? Minus consequatur aliquid, saepe accusantium eveniet, dolore laborum perspiciatis ea ullam, debitis magni rem?</p>
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio