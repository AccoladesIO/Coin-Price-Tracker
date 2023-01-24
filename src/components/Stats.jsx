import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import { useFetch } from '../hooks/useFetch'

const Stats = () => {

    const { loading, data, setData, fetchData } = useFetch()

    const [querry, setQuerry] = useState("")


    const searchFilter = (e) => {
        e.preventDefault()
        const results = data.filter(post => {
            if (querry === "") return data
            return post.name.toLowerCase().includes(querry.toLowerCase())
        })
        setQuerry('')

        setData(results)
    }



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
                    <form onSubmit={searchFilter}>
                        <input type="text" name="coin" id="coin"
                            value={querry} onChange={e => setQuerry(e.target.value)}
                        />
                        <input type="submit" value="Search" />
                    </form>
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
                        <li className="indent">
                            Coin
                        </li>
                    </div>
                    <li className="indent">
                        Price
                    </li>
                    <li className="indent">
                        Mkt Capital
                    </li>
                    <li className="indent">
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
                                    <Link 
                                    to={`/stats/${i + item.id}/`} 
                                    state={{ item: item }}>
                                        {item.name}
                                    </Link>
                                </li>
                            </div>
                            <li className="indent">
                                ${item.current_price.toLocaleString()}
                            </li>
                            <li className="indent">
                                ${item.market_cap.toLocaleString()}
                            </li>
                            <li className="indent">
                                ${item.total_volume.toLocaleString()}
                            </li>
                        </div>
                    )
                })}
                <button className='btn margin' onClick={fetchData}>Back</button>
            </article>
        </main>
    )
}

export default Stats