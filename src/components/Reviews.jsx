import React from 'react'
import * as Fa from 'react-icons/fa'

const Reviews = () => {
    return (
        <section className="review-grid">
            <Fa.FaEthereum className='star star--1' />
            <Fa.FaEthereum className='star star--2' />
            <Fa.FaEthereum className='star star--3' />

            <h2 className='review-heading'>What you enjoy from our data</h2>
            <article className="reviews-article">
                <div className="text-wrapper">
                    <p className='review-heading-sub'><Fa.FaCheckCircle className='shift' /> Safe and Accurate data reports</p>
                    <p className='main-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis odit rem, itaque vel nisi tempora voluptatem pariatur libero fugiat ad! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam recusandae non enim esse, quo excepturi rerum vitae ex aliquam.</p>
                </div>
                <div className="img-wrap">
                    <img src="../src/assets/crypto-trading.svg" alt="crypto trading" />
                </div>
                <div className="img-wrap">
                    <img src="../src/assets/exchange-currency.svg" alt="crypto trading" />
                </div>
                <div className="text-wrapper">
                    <p className='review-heading-sub'><Fa.FaChartLine className='shift' /> Clean data illustrations</p>
                    <p className='main-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis odit rem, itaque vel nisi tempora voluptatem pariatur libero fugiat ad! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam recusandae non enim esse, quo excepturi rerum vitae ex aliquam.</p>
                </div>

                <div className="text-wrapper">
                    <p className='review-heading-sub'><Fa.FaClipboardList className='shift' /> Everything as simple as possible!</p>
                    <p className='main-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis odit rem, itaque vel nisi tempora voluptatem pariatur libero fugiat ad! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam recusandae non enim esse, quo excepturi rerum vitae ex aliquam.</p>
                </div>
                <div className="img-wrap">
                    <img src="../src/assets/crypto-trading.svg" alt="crypto trading" />
                </div>
            </article>
        </section>
    )
}

export default Reviews