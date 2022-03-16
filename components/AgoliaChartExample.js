import algoliasearch from 'algoliasearch/lite'
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
import React, { useEffect, useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import { InstantSearch, useHits, useSearchBox } from 'react-instantsearch-hooks'

const searchClient = algoliasearch(
  '6BLKRGRMME',
  '6377d2745e6c648afb372085c7234e4c'
)

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

function ChartExample({ sku, dataSource, ...props }) {
  const { query, refine, isSearchStalled } = useSearchBox(props)
  const { hits } = useHits(props)
  console.log({ hits })
  const name = sku || 'wishbone'
  useEffect(() => {
    if (query !== sku) {
      refine(sku)
    }
  }, [query, sku, refine])
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
      hits
        ? hits
            .map((item) => {
              const date = new Date(item.updated_at)
              return {
                ...item,
                date,
                dateString: date.toLocaleDateString('en-US'),
              }
            })
            .sort((a, b) => a.date - b.date)
        : [],
    [hits]
  )
  const labels = [...new Set(ordersBySku.map((item) => item.dateString))]
  if (hits) {
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
const AgoliaChartExample = (props) => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="shopify_products_recently_ordered_count_desc"
    >
      <ChartExample {...props} />
    </InstantSearch>
  )
}
export default AgoliaChartExample
