import themes from 'daisyui/src/colors/themes'
import { createContext, useEffect, useState } from 'react'
import ReactHotkeys from 'react-hot-keys'

export const Context = createContext({
  products: [],
  orders: [],
})
const Provider = ({ value, children }) => {
  const [ready, setReady] = useState(true)
  const [datasource, setDatasource] = useState()
  const [product, setProduct] = useState()
  //   useEffect(() => {
  //     fetch('/api/products', {
  //       method: 'POST',
  //       body: JSON.stringify({}),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => setDatasource(result.data))
  //   }, [])
  useEffect(() => {
    if (datasource && !ready) {
      setTimeout(() => {
        setReady(true)
      }, 1000)
    }
  }, [datasource, ready])
  if (!ready) {
    return (
      <div className="flex items-center justify-center w-full h-screen ">
        <svg
          className="w-5 h-5 mr-3 -ml-1 animate-spin text-base-content"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx={12}
            cy={12}
            r={10}
            stroke="currentColor"
            strokeWidth={4}
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    )
  }

  return (
    <Context.Provider
      value={{
        ...datasource,
        product,
        setProduct,
      }}
    >
      <ReactHotkeys
        keyName="shift+a,alt+s"
        onKeyDown={function onKeyUp(keyName, e, handle) {
          console.log('test:onKeyUp', e, handle)
          if (handle.key === 'shift+a') {
            document.querySelector('#theme-settings').checked = true
          }
        }}
      >
        <>
          {children}
          <input type="checkbox" id="theme-settings" className="modal-toggle" />
          <div className="modal">
            <div className="relative modal-box">
              <label
                htmlFor="theme-settings"
                className="absolute btn btn-circle btn-sm right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">Select theme</h3>
              <ul
                onClick={(e) => {
                  //   console.log(e.target.dataset.setTheme)

                  document.body.setAttribute(
                    'data-theme',
                    e.target.dataset.setTheme
                  )
                  console.log(
                    themes[`[data-theme=${e.target.dataset.setTheme}]`]
                  )
                }}
                className="menu menu-compact max-h-[80vh] overflow-auto p-2"
                tabIndex={0}
              >
                <li>
                  <button
                    data-set-theme="light"
                    data-act-class="active"
                    className
                  >
                    🌝  light
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="dark" data-act-class="active">
                    🌚  dark
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="cupcake" data-act-class="active">
                    🧁  cupcake
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="bumblebee" data-act-class="active">
                    🐝  bumblebee
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="emerald" data-act-class="active">
                    ✳️  Emerald
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="corporate" data-act-class="active">
                    🏢  Corporate
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="synthwave" data-act-class="active">
                    🌃  synthwave
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="retro" data-act-class="active">
                    👴  retro
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="cyberpunk" data-act-class="active">
                    🤖  cyberpunk
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="valentine" data-act-class="active">
                    🌸  valentine
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="halloween" data-act-class="active">
                    🎃  halloween
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="garden" data-act-class="active">
                    🌷  garden
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="forest" data-act-class="active">
                    🌲  forest
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="aqua" data-act-class="active">
                    🐟  aqua
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="lofi" data-act-class="active">
                    👓  lofi
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="pastel" data-act-class="active">
                    🖍  pastel
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="fantasy" data-act-class="active">
                    🧚‍♀️  fantasy
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="wireframe" data-act-class="active">
                    📝  Wireframe
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="black" data-act-class="active">
                    🏴  black
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="luxury" data-act-class="active">
                    💎  luxury
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="dracula" data-act-class="active">
                    🧛‍♂️  dracula
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="cmyk" data-act-class="active">
                    🖨  CMYK
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="autumn" data-act-class="active">
                    🍁  Autumn
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="business" data-act-class="active">
                    💼  Business
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="acid" data-act-class="active">
                    💊  Acid
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="lemonade" data-act-class="active">
                    🍋  Lemonade
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="night" data-act-class="active">
                    🌙  Night
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="coffee" data-act-class="active">
                    ☕️  Coffee
                  </button>
                </li>{' '}
                <li>
                  <button data-set-theme="winter" data-act-class="active">
                    ❄️  Winter
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      </ReactHotkeys>
    </Context.Provider>
  )
}
export const Consumer = Context.Consumer
export default Provider
