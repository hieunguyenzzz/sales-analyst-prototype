import React from 'react'

function Footer({
  navItems = [
    'Work',
    'Services',
    'About',
    'Journal',
    'Contact',
    'Instructions And Licenses',
    'Changelog',
  ],
  socials = ['Instagram', 'Twitter', 'Facebook'],
}) {
  return (
    <footer className="container mt-12">
      <div className="grid gap-16 ">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="h-[17px] w-[17px] rounded-full bg-primary lg:col-span-1 "></div>
          <div className="col-span-2 text-6xl leading-none font-heading">
            Let’s create something amazing together
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <ul className="list-animated lg:col-start-2 lg:col-end-2">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="block py-2 text-xl hover:text-primary">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className="list-animated lg:col-start-3 lg:col-end-3">
            {socials.map((item) => (
              <li key={item}>
                <a href="#" className="block py-2 text-xl hover:text-primary">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="justify-between pb-16 mt-16 lg:flex">
        {['Powered by Webflow', 'info@something.com', '+49 55 55 55 55'].map(
          (string) => {
            return (
              <div className="flex-1" key={string}>
                {string}
              </div>
            )
          }
        )}
      </div>
    </footer>
  )
}

export default Footer
