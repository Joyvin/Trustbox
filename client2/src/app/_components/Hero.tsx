import React from 'react'

const Hero = () => {
  return (
    <div className='cover'>
        <video className='md:block hidden w-full' src='./Hero.mp4' autoPlay muted loop/>
        <video className='md:hidden block' src='./Hero_mobile.mp4' autoPlay muted loop/>
    </div>
  )
}

export default Hero