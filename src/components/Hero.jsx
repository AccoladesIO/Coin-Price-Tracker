import React, { useEffect } from 'react';
import * as Fa from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Graph from './Graph';
import Reviews from './Reviews';
import Footer from './Footer';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      // once: true
    })
  }, []);

  return (
    <>
      <main className='hero-main' >
        <Fa.FaStar className='star star--2'/>
        <Fa.FaStar className='star star--3'/>
        <Fa.FaEthereum className='star star--1'/>
        <Fa.FaEthereum className='star star--4'/>
        <Fa.FaEthereum className='star star--5'/>

          {/* <p className='top-level-head'> CRYPTRACK.IO FOR NFTs COMING SOON!!!</p> */}
          <article className='text-box' data-aos="fade-up">
            {/* <img src="../src/assets/Crypto-trading.svg" alt="Exchange Image" className='img-small'/> */}
              <h1 className='heading-main'>
              Safe and <span className="color">Simple </span>Crypto Tracking All in One <span className="color">Place</span> 
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
          {/* <div className="img-wrapper">
          <img src="../src/assets/Exchange-currency.png" alt="Exchange Image" className='img-small'/>
          </div> */}
      </main>
          <section className="hero-section" data-aos="fade-up">
            <h1 className="search-heading" data-aos="fade-down">Our Trusted Partners</h1>
            <div className="img-box">
              <img src="../src/assets/1.svg" alt="" />
              <img src="../src/assets/2.svg" alt="" />
              <img src="../src/assets/3.svg" alt="" />
              <img src="../src/assets/5.svg" alt="" />
              <img src="../src/assets/6.svg" alt="" />
              <img src="../src/assets/4.png" alt="" />
          </div>
          </section>
          <article className="article-main">
            <Reviews />
          </article>
          <article className="graph-article">
            <Graph />
          </article>
          <Footer />
    </>
  );
};

export default Hero;
