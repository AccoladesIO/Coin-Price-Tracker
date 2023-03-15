import React from 'react'
import * as Fa from 'react-icons/fa'
import CoinChart from './CoinChart'

const Graph = () => {

 
  return (
    <section className="graph-section-main" >
  
      <Fa.FaEthereum className='star star--1' />
      <Fa.FaEthereum className='star star--2' />
      <Fa.FaEthereum className='star star--3' />

      <h2 className="review-heading">
        Check Out The Latest Coin Market Curve.
      </h2>
      <article className="graph-section">
        <CoinChart />
      </article>
    </section>
  )
}

export default Graph