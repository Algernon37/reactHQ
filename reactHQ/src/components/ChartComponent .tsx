import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import {ChartComponentProps} from '../interfaces/interfaces'


const customLabelPlugin = {
  id: 'customLabelPlugin',
  beforeDraw: (chart: Chart) => {
    const ctx = chart.ctx;
    const { top, left, width, height } = chart.chartArea;

    ctx.save();
    ctx.fillStyle = 'rgb(116, 161, 88)';
    ctx.font = '20px Roboto';
    ctx.textAlign = 'center';
    ctx.fillText('+32.6%', left + width / 2, top + height / 1.5);
    ctx.restore();
  }
};
Chart.register(customLabelPlugin);

const ChartComponent: React.FC<ChartComponentProps> = ({selectedButton, dataValues}) => {
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
        gradient.addColorStop(0, 'rgba(33, 124, 218, 0.6)');
        gradient.addColorStop(0.5, 'rgba(33, 124, 218, 0)');

        chartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [' ', '22.04', '23.04', '24.04', '25.04', '26.04',' '],
            datasets: [
              {
                label: '+32.6%',
                data: dataValues,
                borderColor: 'rgba(33, 124, 218, 1)',
                backgroundColor: gradient,
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0
              }
            ]
          },
          options: {
            plugins: {
              legend: { display: false }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255, 255, 255, 0.2)' }
              },
              y: {
                grid: { color: 'rgba(255, 255, 255, 0.2)' },
                ticks: { display: false }
              }
            }
          }
        });
      }
    }
  }, [selectedButton, dataValues]);

  return (
    <canvas id="myChart" className="absolute left-1/2 -translate-x-1/2 !w-[120vw] !h-auto md:!w-full md:!h-auto"></canvas>
  );
};

export default ChartComponent;

