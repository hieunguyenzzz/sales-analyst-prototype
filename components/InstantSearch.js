import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { debounce } from 'react-instantsearch-dom/dist/cjs/lib/debounce'
import useSWR from 'swr'
import { Consumer } from './Provider'
import RecentProducts from './RecentProducts'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const InstantSearch = () => {
  const [s, setS] = useState()
  const { data, error } = useSWR(s && s.length && '/api/search?s=' + s, fetcher)
  const handleInputChange = useCallback(
    debounce((e) => {
      console.log(e.target.value)
      setS(e.target.value)
    }, 300),
    []
  )
  return (
    <>
      <div className="sticky top-0 z-10 shadow navbar bg-base-100 opacity-90 focus-within:opacity-100">
        <form data-svelte-search="true" className="flex-1 w-full">
          <div className="w-full form-control">
            <div className="flex-1 w-full rounded input-group">
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Search…"
                className="flex-1 input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      {data?.data?.products.length === 0 && (
        <p className="p-6 text-center">
          {`No results for "`}
          <strong>{s}</strong>
          {`"`}
        </p>
      )}
      {s?.length === 0 && (
        <div className="py-6">
          <RecentProducts />
        </div>
      )}
      <ul
        className={classNames(
          'menu w-full divide-y bg-base-100 text-base-content',
          {
            'pointer-events-none opacity-50': !data && s && s.length,
          }
        )}
      >
        <Consumer>
          {({ products, setProduct } = {}) => {
            return data?.data?.products?.slice(0, 10).map((p) => (
              <li key={p.sku}>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    setProduct(p)
                  }}
                  href={'/product?sku=' + p.sku}
                  className="flex w-full gap-3 "
                >
                  <figure className="max-h-[80px] min-h-[80px] w-1/3 max-w-[80px] bg-base-200"></figure>
                  <div className="flex-1 p-3">
                    <h2 className="font-bold">{p.name}</h2>
                    <div className="text-sm text-base-content text-opacity-70">
                      {p.sku}
                    </div>
                  </div>
                </a>
              </li>
            ))
          }}
        </Consumer>
      </ul>
    </>
  )
}
export default InstantSearch
