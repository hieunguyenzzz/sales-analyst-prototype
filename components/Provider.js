import ThemeProvider from 'libs/theme/ThemeProvider'
import { createContext, useState } from 'react'

export const Context = createContext({
  products: [],
  orders: [],
})
const Provider = ({ value, children }) => {
  const [product, setProduct] = useState()

  return (
    <ThemeProvider>
      <Context.Provider
        value={{
          product,
          setProduct,
        }}
      >
        {children}
      </Context.Provider>
    </ThemeProvider>
  )
}
export const Consumer = Context.Consumer
export default Provider
