import React from 'react'
import '../App.css' 

const Hero = () => {
  return (
    <main className='hero-main'>
        <p className='top-level-head'> CRYPTRACK.IO FOR NFTs COMING SOON!!!</p>
        <article className='text-box'>
            <h1 className='heading-main'>
            Safe and Simple Crypto Tracking All in One Place
            </h1>
            <p className='heading-sub'>Our Crypto Price Tracker provides you with up to date information on all your favourite coins, tokens and many more.</p>
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