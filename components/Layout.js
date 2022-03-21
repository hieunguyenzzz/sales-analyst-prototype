import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="h-header" id="content" />
      <main className="min-h-[calc(100vh-var(--header-height))]">
        {children}
      </main>
      <div className="container h-px my-24 divider before:h-px after:h-px md:mt-36" />

      <Footer />
    </div>
  )
}

export default Layout
