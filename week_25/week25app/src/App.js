import { useEffect, useState } from 'react';
import './App.css';
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
Chart.register(
  Tooltip, Title, ArcElement, Legend
);

function App() {
  const [data, setData] = useState({
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        'red',
        'blue',
        'yellow'
      ]
    },
    ],
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ],
  });

  useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for (let i of res) {
          label.push(i.name);
          data.push(i.id)
        }
        setData(
          {
            datasets: [{
              data: data,
              backgroundColor: [
                'rgba(254, 242, 0, 0.8)',
                'rgba(255, 190, 0, 0.8)',
                'rgba(255, 63, 0, 0.8)',
                'rgba(208, 7, 41, 0.8)',
                'rgba(160, 9, 78, 0.8)',
                'rgba(97, 13, 111, 0.8)',
                'rgba(0, 47, 115, 0.8)',
                'rgba(0, 140, 105, 0.8)',
                'rgba(22, 179, 26, 0.8)',
                'rgba(198, 225, 0, 0.8)'
              ],
              borderColor: [
                'rgba(254, 242, 0, 0.8)',
                'rgba(255, 190, 0, 0.8)',
                'rgba(255, 63, 0, 0.8)',
                'rgba(208, 7, 41, 0.8)',
                'rgba(160, 9, 78, 0.8)',
                'rgba(97, 13, 111, 0.8)',
                'rgba(0, 47, 115, 0.8)',
                'rgba(0, 140, 105, 0.8)',
                'rgba(22, 179, 26, 0.8)',
                'rgba(198, 225, 0, 0.8)'
              ]
            },
            ],
            labels: label,
          }
        )

      }).catch(e => {
        console.log("error", e)
      })
    }
    fetchData();
  }, [])

  return (
    <div className="wrapper">
      <div className="App">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default App;