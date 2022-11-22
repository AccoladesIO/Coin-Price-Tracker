import React from 'react'
import '../App.css' 

const Hero = () => {
  return (
    <main className='hero-main'>
        <article className='text-box'>
            <h1 className='heading-main'>
            Safe and Simple Crypto Tracking All in One Place
            </h1>
            <p className='heading-sub'>Setup your account in a few clicks and manage all your crypto, DeFi, and NFTs directly from CoinStats.</p>
            <div className='flex-r'>
            <div className="line"></div> 
            <div className="line"></div> 
            <div className="line"></div> 
            </div>
            <div className='flex'>
                <button className='btn'>ReadMe</button>
                <button className='btn'>Get Started</button>
            </div>
        </article>
    </main>
  )
}

export default Hero