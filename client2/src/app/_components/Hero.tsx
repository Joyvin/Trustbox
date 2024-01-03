import React from 'react'

const Hero = () => {
  return (
    <div>
        <video className='md:block hidden' src='./img/Hero.mp4' autoPlay muted loop/>
        <video className='md:hidden block' src='./img/Hero_mobile.mp4' autoPlay muted loop/>
    </div>
  )
}

export default Hero