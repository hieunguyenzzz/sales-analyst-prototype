import themes from 'daisyui/src/colors/themes'
import localforage from 'localforage'
import { createContext, useEffect } from 'react'
import ReactHotkeys from 'react-hot-keys'

export const Context = createContext({})
const ThemeProvider = ({ value, children }) => {
  useEffect(() => {
    localforage.getItem('data-theme', function (err, value) {
      if (value) {
        document.body.setAttribute('data-theme', value)
      }
    })
  }, [])
  return (
    <Context.Provider value={{}}>
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
          <div className="justify-end modal">
            <div className="modal-box relative h-screen max-h-screen w-[calc(100vw-72px)] overflow-visible rounded-none  bg-white p-0 text-black">
              <label
                htmlFor="theme-settings"
                className="absolute mr-3 text-2xl btn btn-circle right-full top-2"
              >
                ✕
              </label>
              <div className="h-screen p-6 pb-16 overflow-auto ">
                <div
                  onClick={(e) => {
                    document.body.setAttribute(
                      'data-theme',
                      e.target.dataset.setTheme
                    )
                    localforage.setItem('data-theme', e.target.dataset.setTheme)
                  }}
                  className="grid grid-cols-2 gap-4 rounded-box "
                >
                  {Object.keys(themes).map((key, i) => {
                    let theme = themes[key]
                    let themeName = key.replace(']', '').split('=')[1]
                    return (
                      <div
                        key={key}
                        className="overflow-hidden border rounded-lg border-base-content/20 outline-2 outline-offset-2 outline-base-content hover:border-base-content/40"
                        data-set-theme={themeName}
                        data-act-class="outline"
                      >
                        <div
                          data-theme={themeName}
                          className="w-full font-sans cursor-pointer pointer-events-none bg-base-100 text-base-content"
                        >
                          <div className="grid grid-cols-5 grid-rows-3">
                            <div className="col-start-1 row-span-2 row-start-1 bg-base-200" />
                            <div className="col-start-1 row-start-3 bg-base-300" />
                            <div className="flex flex-col col-span-4 col-start-2 row-span-3 row-start-1 gap-1 p-2 bg-base-100">
                              <div className="font-bold">{themeName}</div>
                              <div className="flex flex-wrap gap-1">
                                <div className="flex items-center justify-center w-5 rounded aspect-square bg-primary lg:w-6">
                                  <div className="text-sm font-bold text-primary-content">
                                    A
                                  </div>
                                </div>
                                <div className="flex items-center justify-center w-5 rounded aspect-square bg-secondary lg:w-6">
                                  <div className="text-sm font-bold text-secondary-content">
                                    A
                                  </div>
                                </div>
                                <div className="flex items-center justify-center w-5 rounded aspect-square bg-accent lg:w-6">
                                  <div className="text-sm font-bold text-accent-content">
                                    A
                                  </div>
                                </div>
                                <div className="flex items-center justify-center w-5 rounded aspect-square bg-neutral lg:w-6">
                                  <div className="text-sm font-bold text-neutral-content">
                                    A
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      </ReactHotkeys>
    </Context.Provider>
  )
}
export const Consumer = Context.Consumer
export default ThemeProvider
