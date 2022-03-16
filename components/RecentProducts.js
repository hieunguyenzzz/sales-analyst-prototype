import { Context } from '@components/Provider'
import localforage from 'localforage'
import { useContext, useEffect, useState } from 'react'

const RecentProducts = () => {
  const { product, setProduct } = useContext(Context)
  const [recentsProducts, setRecentProducts] = useState([])
  useEffect(() => {
    if (product) {
      setRecentProducts((recentsProducts) => {
        if (recentsProducts.find((p) => p.sku === product.sku))
          return recentsProducts
        return [...recentsProducts, product]
      })
    }
  }, [product])
  useEffect(() => {
    localforage.getItem('recentsProducts', function (err, value) {
      if (value) {
        setRecentProducts(value)
      }
    })
  }, [])
  useEffect(() => {
    localforage.setItem('recentsProducts', recentsProducts)
  }, [recentsProducts])
  return (
    <ul className="flex flex-col p-0 px-4 menu menu-compact">
      {recentsProducts.map((product) => (
        <li key={product.sku}>
          <a
            href="#"
            onClick={() => setProduct(product)}
            className="flex justify-between w-full gap-4 p-0 pl-3 "
          >
            <span className="flex-1 truncate">{product.name}</span>
            <div
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setRecentProducts(
                  recentsProducts.filter((p) => p.sku !== product.sku)
                )
              }}
              className="icon btn btn-ghost btn-circle"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1={10} y1={11} x2={10} y2={17} />
                <line x1={14} y1={11} x2={14} y2={17} />
              </svg>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
export default RecentProducts
