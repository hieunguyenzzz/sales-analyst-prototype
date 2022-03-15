import ChartExample from '@components/ChartExample'
import { useEffect, useState } from 'react'

export default function Home() {
  const [datasource, setDatasource] = useState()
  const [product, setProduct] = useState()
  useEffect(() => {
    fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((result) => setDatasource(result.data))
  }, [])
  return (
    <div className="h-screen drawer-mobile drawer bg-base-100">
      <input id="drawer" type="checkbox" className="drawer-toggle" />{' '}
      <div
        className="drawer-content"
        style={{ scrollBehavior: 'smooth', scrollPaddingTop: '5rem' }}
      >
        <div className="sticky top-0 z-30 flex justify-center w-full h-16 transition-all duration-100 bg-base-100 bg-opacity-90 text-base-content backdrop-blur">
          <nav className="w-full navbar">
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
            <ChartExample product={product} dataSource={datasource} />
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
          <div className="h-4" />{' '}
          <ul className="flex flex-col p-0 px-4 menu menu-compact">
            {(datasource ? datasource.products : []).map((product) => (
              <li key={product.sku}>
                <a
                  href="#"
                  onClick={() => setProduct(product)}
                  id
                  className="flex gap-4 "
                >
                  <span className="flex-1">{product.name}</span>{' '}
                </a>{' '}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col p-0 px-4 menu menu-compact"></ul>{' '}
          <div className="sticky bottom-0 flex h-20 pointer-events-none bg-gradient-to-t from-base-200 to-transparent" />
        </aside>
      </div>
      <input type="checkbox" id="drawer-search" className="modal-toggle" />
      <div className="justify-end modal">
        <div className="relative h-screen max-h-screen overflow-auto rounded-none modal-box">
          <label
            htmlFor="drawer-search"
            className="absolute btn btn-circle btn-sm right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            {`You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!`}
          </p>
        </div>
      </div>
    </div>
  )
}
