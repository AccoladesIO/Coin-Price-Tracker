import React from 'react'
import '../App.css' 

const Hero = () => {
  return (
    <>
    <main className='hero-main'>
        {/* <p className='top-level-head'> CRYPTRACK.IO FOR NFTs COMING SOON!!!</p> */}
        <article className='text-box'>
          <img src="../src/assets/Exchange-currency.png" alt="Exchange Image" className='img-small'/>
          {/* <img src="../src/assets/Crypto-trading.svg" alt="Exchange Image" className='img-small'/> */}
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
        <section className="hero-section">
          <h1 className="search-heading">Our Trusted Partners</h1>
          <div className="img-box">
            <img src="../src/assets/1.svg" alt="" />
            <img src="../src/assets/2.svg" alt="" />
            <img src="../src/assets/3.svg" alt="" />
            <img src="../src/assets/5.svg" alt="" />
            <img src="../src/assets/6.svg" alt="" />
            <img src="../src/assets/4.png" alt="" />
        </div>
        </section>
        </>
  )
}

export default Hero