import { createContext, useEffect, useState } from 'react'

export const Context = createContext({
  products: [],
  orders: [],
})
const Provider = ({ value, children }) => {
  const [ready, setReady] = useState()
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
      {children}
    </Context.Provider>
  )
}
export const Consumer = Context.Consumer
export default Provider
