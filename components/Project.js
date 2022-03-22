import React from 'react'
import Image from './UI/Image'
import Link from './UI/Link'
function Project({
  heading = 'Recent Work',
  description = `Ac viverra purus in in pretium arcu amet. Morbi nisl mauris sagittis
    purus donec lobortis amet.`,
  url = '#',
  urlText = 'Read more',
  projects = [
    {
      title: 'La coess',
      tags: ['Packaging', 'Identity design'],
      img: {
        src: 'https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/616323c92f95b155d730cab2_la-coess-ARbOTKCWJVg-unsplash-min.jpg',
        width: 377,
        height: 566,
      },
    },
    {
      title: 'Nouri',
      tags: ['Brand strategy', 'Identity design', 'Packaging'],
      img: {
        src: 'https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/6160a45e6e9c3473805e0db6_daily-nouri-E5Oo4nENq2M-unsplash-min.jpg',
        width: 377,
        height: 463,
      },
    },
    {
      title: 'Boxed water',
      tags: ['Brand strategy', 'Web design'],
      img: {
        src: 'https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/61632fade6d9644103958dfd_boxed-water-is-better-OXCWQNLR--A-unsplash-min.jpg',
        width: 377,
        height: 251,
      },
    },
    {
      title: 'Fredi',
      tags: ['Packaging', 'Identity design', 'Brand strategy'],
      img: {
        src: 'https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/616322a4bbf68f70f013b959_team-fredi-ufcr9mjVeM0-unsplash-min.jpg',
        width: 377,
        height: 251,
      },
    },
    {
      title: 'Supply',
      tags: ['Brand strategy', 'Web design', 'Identity design', 'Packaging'],
      img: {
        src: 'https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/6163233e62ca0f5f26fea382_supply-6dfYAFmdoY4-unsplash-min.jpg',
        width: 377,
        height: 566,
      },
    },
    {
      title: 'Act + Acre',
      tags: ['Web design'],
      img: {
        src: 'https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/6163237b2ebb56b7d548e680_glenn-claire-aYrOtqypmho-unsplash-min.jpg',
        width: 377,
        height: 393,
      },
    },
  ],
}) {
  return (
    <div className="">
      <div className="container grid gap-6 md:grid-cols-2 md:gap-y-10">
        <h2 className="h2">{heading}</h2>
        <p className="mx-auto md:mt-0 md:max-w-[70%]">{description}</p>
        {url && (
          <div className="mx-auto w-full md:col-start-2 md:max-w-[70%]">
            <a className="btn-animated group" href={url}>
              {urlText}
            </a>
          </div>
        )}
      </div>
      <ul className="container gap-10 mt-20 space-y-10 columns-1 md:columns-2 lg:gap-14 lg:space-y-14">
        {projects.map((item, i) => {
          return (
            <li key={i} className=" group break-inside-avoid">
              <Link href={`/project/${item.title}`}>
                <a>
                  <div className="relative overflow-hidden">
                    <Image
                      className={
                        'transform transition-transform duration-700 group-hover:scale-105'
                      }
                      src={item.img.src}
                      alt={item.title}
                      ratio={item.img.height / item.img.width}
                    />
                  </div>
                  <div className="relative w-full my-4 mb-3 border-b">
                    <div className="absolute left-0 w-0 h-px transition-all duration-700 ease-in-out top-full bg-primary group-hover:w-full"></div>
                  </div>
                  <div>
                    <div className="text-xl">{item.title}</div>
                    <ul className="flex flex-wrap gap-1 text-xs text-base-content text-opacity-70">
                      {item.tags.map((tag) => (
                        <li key={tag} className="group">
                          {tag}{' '}
                          <span className="text-gray-300 group-last:hidden">
                            •
                          </span>{' '}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Project
