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

export function ChartExample({ product, dataSource }) {
  const sku = product?.sku || 'wishbone'
  const name = product?.name || 'wishbone'
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,

        text: name,
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
  const ordersBySku = useMemo(
    () =>
      dataSource?.orders
        ?.filter((item) => item.product.sku === sku)
        .map((item) => {
          const date = new Date(item.created_at)
          return {
            ...item,
            date,
            dateString: date.toLocaleDateString('en-US'),
          }
        })
        .sort((a, b) => a.date - b.date) || [],
    [dataSource, sku]
  )
  const labels = [...new Set(ordersBySku.map((item) => item.dateString))]
  if (dataSource) {
    return (
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="self-start tabs">
          <a href="#chart" className="tab tab-bordered active:tab-active">
            Chart
          </a>
          <a href="#data" className="tab tab-bordered active:tab-active">
            Data
          </a>
        </div>
        <div className="w-full carousel">
          <div id="chart" className="w-full carousel-item">
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
          </div>
          <div id="data" className="w-full carousel-item">
            <table className="table w-full table-compact">
              <thead>
                <tr>
                  <th />
                  <th>Name</th>
                  <th>sku</th>
                  <th>quantity</th>
                  <th>price</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody>
                {ordersBySku.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{item.product.name}</td>
                      <td>{item.product.sku}</td>
                      <td>{item.qty}</td>
                      <td>{item.price}</td>
                      <td>{item.dateString}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="self-start tabs">
        <a href="#chart" className="tab tab-bordered active:tab-active">
          Chart
        </a>
        <a href="#data" className="tab tab-bordered active:tab-active">
          Data
        </a>
      </div>
      <div className="w-full carousel">
        <div id="chart" className="w-full carousel-item">
          <Line options={options} data={data} />
        </div>
        <div id="data" className="w-full carousel-item">
          <table className="table w-full table-compact">
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th>sku</th>
                <th>quantity</th>
                <th>price</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default ChartExample
