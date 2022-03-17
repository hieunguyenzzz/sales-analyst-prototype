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
import useSWR from 'swr'

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
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export function ChartExample({ product, dataSource }) {
  const sku = product?.sku || 'wishbone'
  const { data, error } = useSWR('/api/orders?sku=' + sku, fetcher)
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
        display: false,
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
      (data?.data?.orders || dataSource?.orders)
        ?.filter((item) => item?.product?.sku === sku)
        .map((item) => {
          const date = new Date(item.created_at)
          return {
            ...item,
            date,
            dateString: date.toLocaleDateString('en-US'),
          }
        })
        .sort((a, b) => a.date - b.date) || [],
    [data?.data?.orders, dataSource?.orders, sku]
  )
  const labels = [...new Set(ordersBySku.map((item) => item.dateString))]

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="justify-between w-full ">
        <div className="w-full px-6 text-sm border-b breadcrumbs">
          <ul>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>
                {product?.name || 'Wishbone chair'} ({sku})
              </a>
            </li>
          </ul>
        </div>
        <div className="px-2 mx-auto btn-group bg-base-200">
          <a href="#chart" className="btn btn-ghost btn-sm">
            Chart
          </a>
          <a href="#data" className="btn btn-ghost btn-sm">
            Data
          </a>
        </div>
      </div>

      <div className="w-full carousel">
        <div id="chart" className="w-full carousel-item">
          <div className="w-full p-6 overflow-auto">
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
        </div>
        <div id="data" className="w-full overflow-auto carousel-item">
          <div className="w-full p-6">
            <table className="table w-full table-zebra table-compact">
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
    </div>
  )
}
export default ChartExample
