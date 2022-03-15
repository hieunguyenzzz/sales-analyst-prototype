import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import React, { useMemo } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,

      text: 'Wishbone chair',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        // forces step size to be 50 units
        stepSize: 1,
      },
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
export const data = {
  labels,
  datasets: [
    {
      label: 'Price',
      data: labels.map(() => {
        return 1000 - Math.floor(Math.random() * 1000)
      }),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Amount',
      data: labels.map(() => {
        return Math.floor(20 - Math.floor(Math.random() * 10))
      }),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
}

export default function ChartExample({ sku = 'wishbone', dataSource }) {
  const ordersBySku = useMemo(
    () =>
      dataSource
        ? dataSource.orders
            .filter((item) => item.product.sku === sku)
            .map((item) => {
              const date = new Date(item.created_at)
              return {
                ...item,
                date,
                dateString: date.toLocaleDateString('en-US'),
              }
            })
            .sort((a, b) => a.date - b.date)
        : [],
    [dataSource, sku]
  )
  const labels = [...new Set(ordersBySku.map((item) => item.dateString))]
  if (dataSource) {
    return (
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: 'Price',
              data: labels.map((date) => {
                const prices = ordersBySku.filter(
                  (item) => item.dateString === date
                )
                return prices[0]?.price
              }),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              yAxisID: 'y',
            },
            {
              label: 'Amount',
              data: labels.map((date) => {
                const qty = ordersBySku
                  .filter((item) => item.dateString === date)
                  .reduce((result, item) => {
                    return result + item.qty
                  }, 0)
                return qty
              }),
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
              yAxisID: 'y1',
            },
          ],
        }}
      />
    )
  }
  return <Line options={options} data={data} />
}
