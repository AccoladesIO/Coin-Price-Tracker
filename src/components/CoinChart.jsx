import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const CoinChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
      );
  
      if (response.data.length > 0 && response.data[0].sparkline_in_7d) {
        const labels = response.data[0].sparkline_in_7d.price.map(
          (item, index) => `Day ${index}`
        );
        const datasets = response.data.map((coin) => {
          return {
            label: coin.name,
            data: coin.sparkline_in_7d.price,
            fill: false,
            borderColor: coin.color,
          };
        });
  
        setChartData({
          labels,
          datasets,
        });
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default CoinChart;
