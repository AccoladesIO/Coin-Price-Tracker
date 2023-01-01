import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const DisplayBoard = () => {
  
  const navigate = useNavigate()
  const handleClick = ()=> {
    navigate('/stats')
  }


  const location = useLocation();
    let { item } = location.state
    console.log(item)
    const price = item.price_change_percentage_24h >= 1 ? 'green': 'red'

  return (
    <main className='display-section'>
      <Navbar />
      <section className='coin-display'>
        <aside>
          <div className="image-box">
            <img src={item.image} alt={item.name} />
          </div>
          <h2 className="search-heading">
            {'$' + item.symbol + " " + item.name}
          </h2>
        </aside>
        <article> 
        <p className='indent'>Coin: {item.name}</p>
        <p>Market Cap Rank: {item.market_cap_rank.toLocaleString()}</p>
        <p>Current Price: ${item.current_price.toLocaleString()}</p>
        <p>High (24h): ${item.high_24h.toLocaleString()}</p>
        <p>Low (24h): ${item.low_24h.toLocaleString()}</p>
        <p>Market Capital: ${item.market_cap.toLocaleString()}</p>
        <p>Maximum Supply: ${item.max_supply}</p>
        <p>Circulating Supply: ${item.circulating_supply.toLocaleString()}</p>
        <p>Price Change (%): <span className={price}> {item.price_change_percentage_24h.toFixed(2)}%
          </span></p>
        <p>ROI: ({item.roi?.currency }) {item.roi?.percentage.toFixed(3)}%</p>
        <p>Total Supply: ${item.total_supply.toLocaleString()}</p>
        <p>Total Volume: ${item.total_volume.toLocaleString()}</p>
        <button className='btn' onClick={handleClick}>Back</button>
        </article>
      </section>
    </main>
  )
}

export default DisplayBoard