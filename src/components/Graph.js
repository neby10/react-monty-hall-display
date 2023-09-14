import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 

function Graph({ stats }) {
    Chart.register(CategoryScale);

    const [stayGraphDataArray, setStayGraphDataArray] = useState([0]);
    const [switchGraphDataArray, setSwitchGraphDataArray] = useState([0]);


    const options = {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "#fff",
                }
            },
            title: {
              display: true,
              text: 'The Monty Hall Problem',
              color: "#fff",
            },
          },
        scales: {
          x: {
              id: 'x-axis-1', // Define the x-axis ID
              type: 'category', // Set the scale type to 'category' for categorical data
              title: {
                display: true,
                text: "Total Games",
                color: "#fff", 
              },
              ticks: {
                color: "#fff",
              }
          },
          y: {
              id: "y-axis-1",
              type: 'linear',
              ticks: {
                  min: 0,
                  max: 1,
                  color: "#fff",
              },
              title: {
                display: true,
                text: "Win %",
                color: "#fff",
              },
              beginAtZero: true,
          }
        },
    };

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'STAY',
                data: stayGraphDataArray,
                borderColor: '#9f6815', // rgba(75, 192, 192, 1)
                borderWidth: 2,
                fill: false,
                xAxisID: 'x-axis-1', // Specify the x-axis ID
            },
            {
                label: 'SWITCH',
                data: switchGraphDataArray,
                borderColor: '#80b109', // rgba(255, 99, 132, 1)
                borderWidth: 2,
                fill: false,
                xAxisID: 'x-axis-1', // Specify the x-axis ID
            },
        ],
    });

    useEffect(() => {
        if (stats.stay.totalGames > 0) {
            setStayGraphDataArray((prevArray) => [...prevArray, (stats.stay.wins / stats.stay.totalGames)]);
        }
    }, [stats.stay.wins, stats.stay.totalGames]);

    useEffect(() => {
        if (stats.switch.totalGames > 0) {
            setSwitchGraphDataArray((prevArray) => [...prevArray, (stats.switch.wins > 0 ? stats.switch.wins / stats.switch.totalGames : 0)]);
        }
    }, [stats.switch.wins, stats.switch.totalGames]);

    useEffect(() => {
        const MAX = stats.stay.totalGames > stats.switch.totalGames ? stats.stay.totalGames : stats.switch.totalGames;

        setData((prevData) => ({
            ...prevData,
            labels: [...Array(MAX + 1).keys()],
            datasets: [
                {
                    label: 'STAY',
                    data: stayGraphDataArray,
                    borderColor: '#9f6815', // rgba(75, 192, 192, 1)
                    borderWidth: 2,
                    fill: false,
                    xAxisID: 'x-axis-1', // Specify the x-axis ID
                }, 
                {
                    label: 'SWITCH',
                    data: switchGraphDataArray,
                    borderColor: '#80b109', // rgba(255, 99, 132, 1)
                    borderWidth: 2,
                    fill: false,
                    xAxisID: 'x-axis-1', // Specify the x-axis ID
                }
            ]
        }));

    }, [stayGraphDataArray, switchGraphDataArray]);

    return (
        <div className='Graph'>
            <Line data={data} options={options} />
            {/* {
                Object.entries(stats.stay).map((item, index) => (
                    <p key={index}>{item[0]}, {item[1]}</p>
                ))
            } */}
        </div>
    )
}

export default Graph;