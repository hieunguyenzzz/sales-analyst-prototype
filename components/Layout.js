import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="h-header" id="content" />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
