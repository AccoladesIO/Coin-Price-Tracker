import React from 'react'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Loader from './Loader'

const Stats = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [querry, setQuerry] = useState("")


    const searchFilter = (e) => {
        const results = data.filter(post => {
            if (querry === "") return data
            return post.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setQuerry(e.target.value)
        setData(results)
    }

    const fetchData = async () => {


        setLoading(true)

        // waiting for response from Api Call
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=24h');
        const result = await response.json();

        // console.log(result);

        // disable loading state once data is fetched
        setLoading(false)
        setData(result)

    }

    useEffect(() => {
        fetchData()
    }, [])


    if (loading) {
        return <Loader />
    }


    return (
        <main className='stats-page'>
            <div className='search-field'>
                <span className='search-heading'>
                    Looking For Something ?
                </span>
                <div className="input-wrapper">
                    <input type="text" name="coin" id="coin" value={querry} onChange={searchFilter} />
                </div>
                {(data.length === 0 && <span className='search-heading'>
                    No results Found
                </span>)}
            </div>
            <article className="stats-article">
                <div className="stats-header">
                    <div className="indent">
                        <li className="index">
                            #
                        </li>
                        <li className="coin">
                            Coin
                        </li>
                    </div>
                    <li className="price">
                        Price
                    </li>
                    <li className="mkt_cap">
                        Mkt Capital
                    </li>
                    <li className="volume">
                        Total Suppply
                    </li>
                </div>
                {data.map((item, i) => {
                    console.log(item)
                    return (
                        <div className="stats-header light" key={i}>
                            <div className="indent">
                                <li className="index">
                                    {i + 1}
                                </li>
                                    <li className="coin">
                                        <Link to={`/stats/${i + item.id}/`} state={{item: item}}>
                                        {item.name}
                                        </Link>
                                    </li>
                            </div>
                            <li className="price">
                                ${item.current_price.toLocaleString()}
                            </li>
                            <li className="mkt_cap">
                                ${item.market_cap.toLocaleString()}
                            </li>
                            <li className="volume">
                                ${item.total_volume.toLocaleString()}
                            </li>
                        </div>

                    )
                })}
            </article>
        </main>
    )
}

export default Stats