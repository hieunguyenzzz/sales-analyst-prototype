import ChartExample from '@components/ChartExample'
import InstantSearch from '@components/InstantSearch'
import Provider, { Consumer, Context } from '@components/Provider'
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
            className="flex justify-between w-full gap-4 p-0 pl-3"
          >
            <span className="flex-1">{product.name}</span>{' '}
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
          </a>{' '}
        </li>
      ))}
    </ul>
  )
}
export default function Home() {
  return (
    <Provider>
      <div className="h-screen drawer-mobile drawer bg-base-100">
        <input id="drawer" type="checkbox" className="drawer-toggle" />{' '}
        <div
          className="drawer-content"
          style={{ scrollBehavior: 'smooth', scrollPaddingTop: '5rem' }}
        >
          <div className="sticky top-0 z-30 flex justify-center w-full h-16 transition-all duration-100 bg-base-100 bg-opacity-90 text-base-content backdrop-blur">
            <nav className="w-full shadow navbar">
              <div className="flex flex-1 md:gap-1 lg:gap-2">
                <span
                  className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
                  data-tip="Menu"
                >
                  <label
                    htmlFor="drawer"
                    className="btn btn-square btn-ghost drawer-button lg:hidden"
                  >
                    <svg
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current md:h-6 md:w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </label>
                </span>{' '}
                <div className="flex items-center gap-2 lg:hidden">
                  <a
                    href="#"
                    aria-current="page"
                    aria-label="Homepage"
                    className="px-2 flex-0 btn btn-ghost "
                  >
                    <div className="inline-flex text-lg transition-all duration-200 font-title text-primary md:text-3xl">
                      <span className="lowercase text-primary">Store</span>{' '}
                      <span className="uppercase text-base-content">APP</span>
                    </div>
                  </a>{' '}
                </div>{' '}
                <div className="hidden w-full max-w-sm lg:flex">
                  <label
                    htmlFor="drawer-search"
                    className="relative w-full mx-3 searchbox"
                  >
                    <form data-svelte-search className="pointer-events-none">
                      <div className="form-control">
                        <div className="input-group">
                          <input
                            type="text"
                            placeholder="Search…"
                            className="input input-bordered"
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
                    </form>{' '}
                  </label>
                </div>
              </div>{' '}
              <div className="flex-0"></div>
            </nav>
          </div>{' '}
          <div className="p-6 pb-16">
            <div className="flex flex-col items-center justify-center gap-6">
              <Consumer>
                {(props) => (
                  <ChartExample product={props.product} dataSource={props} />
                )}
              </Consumer>
            </div>
          </div>
        </div>
        <div
          className="drawer-side"
          style={{ scrollBehavior: 'smooth', scrollPaddingTop: '5rem' }}
        >
          <label htmlFor="drawer" className="drawer-overlay" />{' '}
          <aside className="w-80 bg-base-200">
            <div className="sticky top-0 z-20 items-center hidden gap-2 px-4 py-2 bg-base-200 bg-opacity-90 backdrop-blur lg:flex ">
              <a
                href="#"
                aria-current="page"
                aria-label="Homepage"
                className="px-2 flex-0 btn btn-ghost"
              >
                <div className="inline-flex text-lg transition-all duration-200 font-title text-primary md:text-3xl">
                  <span className="lowercase">Store</span>{' '}
                  <span className="uppercase text-base-content">APP</span>
                </div>
              </a>{' '}
            </div>{' '}
            <div className="sticky top-0 z-10 grid w-full px-2 py-3 grid-row-2 gap-y-2 bg-base-200 bg-opacity-90 backdrop-blur lg:hidden ">
              <div className="flex w-full">
                <label
                  htmlFor="drawer-search"
                  className="relative w-full mx-3 searchbox"
                >
                  <form data-svelte-search>
                    <div className="form-control">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Search…"
                          className="input input-bordered"
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
                </label>
              </div>
            </div>{' '}
            <div className="h-4" /> <RecentProducts />
            <ul className="flex flex-col p-0 px-4 menu menu-compact"></ul>{' '}
            <div className="sticky bottom-0 flex h-20 pointer-events-none bg-gradient-to-t from-base-200 to-transparent" />
          </aside>
        </div>
        <input type="checkbox" id="drawer-search" className="modal-toggle" />
        <div className="justify-end modal">
          <div className="modal-box relative  h-screen max-h-screen w-[calc(100vw-54px)] overflow-visible rounded-none p-0">
            <label
              htmlFor="drawer-search"
              className="absolute mr-3 btn btn-circle btn-sm right-full top-2"
            >
              ✕
            </label>
            <div className="w-full h-screen max-h-screen overflow-auto">
              <InstantSearch />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  )
}
