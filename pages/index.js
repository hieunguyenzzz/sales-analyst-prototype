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
    <div className="drawer-mobile drawer h-screen bg-base-100">
      <input id="drawer" type="checkbox" className="drawer-toggle" />{' '}
      <div
        className="drawer-content"
        style={{ scrollBehavior: 'smooth', scrollPaddingTop: '5rem' }}
      >
        <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-base-100 bg-opacity-90 text-base-content backdrop-blur transition-all duration-100">
          <nav className="navbar w-full">
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
                    className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
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
                  href="/"
                  aria-current="page"
                  aria-label="Homepage"
                  className="flex-0 btn btn-ghost px-2 "
                >
                  <div className="font-title inline-flex text-lg text-primary transition-all duration-200 md:text-3xl">
                    <span className="lowercase text-primary">Store</span>{' '}
                    <span className="uppercase text-base-content">APP</span>
                  </div>
                </a>{' '}
              </div>{' '}
              <div className="hidden w-full max-w-sm lg:flex">
                <label
                  htmlFor="drawer-search"
                  className="searchbox relative mx-3 w-full"
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
                            className="h-6 w-6"
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
            <div className="flex-0">
              <div className="hidden flex-none items-center ">
                <a
                  href="/components"
                  className="btn btn-ghost drawer-button normal-case"
                >
                  <svg
                    width={20}
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 fill-current md:mr-2"
                  >
                    <path d="M6.5,22 C4.01471863,22 2,19.9852814 2,17.5 C2,15.0147186 4.01471863,13 6.5,13 C8.98528137,13 11,15.0147186 11,17.5 C11,19.9852814 8.98528137,22 6.5,22 Z M17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 Z M6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 Z M17.5,11 C15.0147186,11 13,8.98528137 13,6.5 C13,4.01471863 15.0147186,2 17.5,2 C19.9852814,2 22,4.01471863 22,6.5 C22,8.98528137 19.9852814,11 17.5,11 Z M17.5,9 C18.8807119,9 20,7.88071187 20,6.5 C20,5.11928813 18.8807119,4 17.5,4 C16.1192881,4 15,5.11928813 15,6.5 C15,7.88071187 16.1192881,9 17.5,9 Z M6.5,9 C7.88071187,9 9,7.88071187 9,6.5 C9,5.11928813 7.88071187,4 6.5,4 C5.11928813,4 4,5.11928813 4,6.5 C4,7.88071187 5.11928813,9 6.5,9 Z M17.5,20 C18.8807119,20 20,18.8807119 20,17.5 C20,16.1192881 18.8807119,15 17.5,15 C16.1192881,15 15,16.1192881 15,17.5 C15,18.8807119 16.1192881,20 17.5,20 Z M6.5,20 C7.88071187,20 9,18.8807119 9,17.5 C9,16.1192881 7.88071187,15 6.5,15 C5.11928813,15 4,16.1192881 4,17.5 C4,18.8807119 5.11928813,20 6.5,20 Z" />
                  </svg>{' '}
                  Components
                </a>
              </div>{' '}
            </div>
          </nav>
        </div>{' '}
        <div className="p-6 pb-16">
          <div className="flex flex-col items-center justify-center gap-6">
            <ChartExample sku={product?.sku} dataSource={datasource} />
          </div>
        </div>
      </div>
      <div
        className="drawer-side"
        style={{ scrollBehavior: 'smooth', scrollPaddingTop: '5rem' }}
      >
        <label htmlFor="drawer" className="drawer-overlay" />{' '}
        <aside className="w-80 bg-base-200">
          <div className="sticky top-0 z-20 hidden items-center gap-2 bg-base-200 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex ">
            <a
              href="/"
              aria-current="page"
              aria-label="Homepage"
              className="flex-0 btn btn-ghost px-2"
            >
              <div className="font-title inline-flex text-lg text-primary transition-all duration-200 md:text-3xl">
                <span className="lowercase">Store</span>{' '}
                <span className="uppercase text-base-content">APP</span>
              </div>
            </a>{' '}
          </div>{' '}
          <div className="grid-row-2 sticky top-0 z-10 grid w-full gap-y-2 bg-base-200 bg-opacity-90 py-3 px-2 backdrop-blur lg:hidden ">
            <div className="flex w-full">
              <label
                htmlFor="drawer-search"
                className="searchbox relative mx-3 w-full"
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
                          className="h-6 w-6"
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
          <ul className="menu menu-compact flex flex-col p-0 px-4">
            {(datasource ? datasource.products : []).map((product) => (
              <li key={product.sku}>
                <a
                  href="#"
                  onClick={() => setProduct(product)}
                  id
                  className="flex gap-4  "
                >
                  <span className="flex-1">{product.name}</span>{' '}
                </a>{' '}
              </li>
            ))}
          </ul>
          <ul className="menu menu-compact flex flex-col p-0 px-4"></ul>{' '}
          <div className="pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t from-base-200 to-transparent" />
        </aside>
      </div>
      <input type="checkbox" id="drawer-search" className="modal-toggle" />
      <div className="modal justify-end">
        <div className="modal-box relative h-screen max-h-screen overflow-auto rounded-none">
          <label
            htmlFor="drawer-search"
            className="btn btn-circle btn-sm absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  )
}
