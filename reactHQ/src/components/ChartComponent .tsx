import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.width);
        gradient.addColorStop(0, 'rgba(33, 119, 208, 0.6)');  
        gradient.addColorStop(1, 'rgba(33, 119, 208, 0)'); 

        chartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['22.04', '23.04', '24.04', '25.04', '26.04',' '],
            datasets: [{
              label: '+32.6%',
              data: [25, 27, 26, 28, 27, 29], 
              borderColor: 'rgba(33, 119, 208, 1)',
              backgroundColor: gradient,   
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            }],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
                x: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.2)', 
                    }
                  },
                  y: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.2)',
                    },
                    ticks:{
                        display: false
                    }
                }
            },
            layout: {
                padding: 0
            }
          },
        });
      }
    }
  }, []);

  return (
    <canvas className='mt-5' id="myChart"></canvas>
  );
};

export default ChartComponent;

