import React from 'react'
import Link from './UI/Link'

function Services({
  heading = 'Our services',
  description = `Ac viverra purus in in pretium arcu amet. Morbi nisl mauris sagittis
  purus donec lobortis amet.`,
  url = '#',
  urlText = 'See all our work',
  items = ['Brand strategy', 'Identity design', 'Web design'],
}) {
  return (
    <div className="container mt-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <h2 className="h2">{heading}</h2>
        <p className="md:mt-0 lg:col-span-1">{description}</p>
        {url && (
          <div className="mx-auto w-full md:col-start-2 lg:col-end-3">
            <a className="btn-animated group" href={url}>
              {urlText}
            </a>
          </div>
        )}
        <div className="col-span-full mt-14 gap-8 md:col-end-3 lg:col-start-2 lg:col-end-4">
          <ul className="list-numbered md:pl-0">
            {items.map((item) => (
              <React.Fragment key={item}>
                <li>
                  <Link href={'/service/' + item}>
                    <a className="block font-heading text-[40px] font-light leading-none hover:text-primary md:text-6xl lg:text-7xl">
                      {item}
                    </a>
                  </Link>
                </li>
                <li className="divider before:h-px after:h-px last:hidden" />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
