import ChartExample from '@components/ChartExample'
import InstantSearch from '@components/InstantSearch'
import Provider, { Consumer } from '@components/Provider'
import RecentProducts from '@components/RecentProducts'
export default function Home() {
  return (
    <Provider>
      <div className="h-screen drawer-mobile drawer animate-fadeIn bg-base-100 text-base-content">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
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
                </span>
                <div className="flex items-center flex-1 gap-2 lg:hidden">
                  <a
                    href="#"
                    aria-current="page"
                    aria-label="Homepage"
                    className="px-2 flex-0 btn btn-ghost "
                  >
                    <div className="inline-flex text-lg transition-all duration-200 font-title text-primary md:text-3xl">
                      <span className="lowercase">Sale</span>
                      <span className="uppercase text-base-content">APP</span>
                    </div>
                  </a>
                </div>
                <div className="max-w-sm lg:flex">
                  <label
                    tabIndex={'-1'}
                    htmlFor="drawer-search"
                    className="relative w-full mx-3 searchbox"
                  >
                    <div className="btn btn-ghost btn-circle lg:hidden">
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
                    </div>
                    <form
                      data-svelte-search
                      className="hidden pointer-events-none lg:block"
                    >
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
              </div>
              <div className="flex-0"></div>
            </nav>
          </div>
          <div className="pb-16">
            <Consumer>
              {(props) => (
                <ChartExample product={props.product} dataSource={props} />
              )}
            </Consumer>
          </div>
        </div>
        <div
          className="drawer-side"
          style={{ scrollBehavior: 'smooth', scrollPaddingTop: '5rem' }}
        >
          <label htmlFor="drawer" className="drawer-overlay" />
          <aside className="w-80 max-w-[80vw] bg-base-200 text-base-content shadow-inner">
            <div className="sticky top-0 z-20 items-center hidden gap-2 px-4 py-2 bg-base-200 bg-opacity-90 backdrop-blur lg:flex ">
              <a
                href="#"
                aria-current="page"
                aria-label="Homepage"
                className="px-2 flex-0 btn btn-ghost"
              >
                <div className="inline-flex text-lg transition-all duration-200 font-title text-primary md:text-3xl">
                  <span className="lowercase">Sale</span>
                  <span className="uppercase text-base-content">APP</span>
                </div>
              </a>
            </div>

            <div className="h-4" />
            <ul className="flex flex-col p-0 px-4 menu menu-compact">
              <li className="menu-title">
                <span>Recents</span>
              </li>
            </ul>
            <RecentProducts />

            <div className="sticky bottom-0 flex h-20 pointer-events-none bg-gradient-to-t from-base-200 to-transparent" />
          </aside>
        </div>
        <input type="checkbox" id="drawer-search" className="modal-toggle" />
        <div className="justify-end modal">
          <div className="modal-box relative  h-screen max-h-screen w-[calc(100vw-72px)] overflow-visible rounded-none p-0">
            <label
              htmlFor="drawer-search"
              className="absolute mr-3 text-2xl shadow-xl btn btn-circle right-full top-2"
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
