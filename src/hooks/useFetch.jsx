import { useState, useEffect } from "react";


export const useFetch = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])


    const fetchData = async () => {


        setLoading(true)

        // waiting for response from Api Call
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1h');
        const result = await response.json();

        // console.log(result);

        // disable loading state once data is fetched
        setLoading(false)
        setData(result)

    }

    useEffect(() => {
        fetchData()
    }, [])

    return {loading, data, setData, fetchData}
}