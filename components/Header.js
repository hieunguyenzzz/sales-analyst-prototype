import React, { useEffect, useRef, useState } from 'react'
import { useBoolean } from 'usehooks-ts'
import Logo from './Logo'
import Link from './UI/Link'

const ToggleMenu = ({ id = 'header-menu' }) => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false)
  useEffect(() => {
    document.querySelector(`#${id}`).checked = value
  }, [id, value])

  return (
    <label className="p-4 md:hidden">
      <input
        hidden
        type="checkbox"
        onChange={(e) => {
          setValue(e.target.checked)
        }}
      />
      <div
        className="h-0.5 w-8 bg-base-content transition-transform duration-700 ease-in-out"
        style={
          value
            ? {
                transform:
                  'translate3d(0px, 4px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }
            : {
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }
        }
      />
      <div
        className="mt-2 h-0.5 w-8 bg-base-content transition-transform duration-700 ease-in-out"
        style={
          value
            ? {
                transform:
                  'translate3d(0px, -5px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }
            : {
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }
        }
      />
    </label>
  )
}
const Header = ({
  navItems = [
    {
      active: true,
      title: 'Work',
      href: '/work',
    },
    {
      title: 'Service',
      href: '/services',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Journal',
      href: '/journal',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  transparent = true,
}) => {
  const trackerRef = useRef()
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!transparent) {
      setShow(true)
      return
    }
    let lastKnownScrollPosition = 0
    let ticking = false
    function calc() {
      trackerRef.current &&
        setShow(
          Boolean(lastKnownScrollPosition > trackerRef.current.clientHeight)
        )
    }
    function windowScrollHandler() {
      lastKnownScrollPosition = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(function () {
          calc()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', windowScrollHandler)
    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
    }
  }, [transparent])
  return (
    <header
      ref={trackerRef}
      style={
        (show && {
          '--header-bg-opacity': '0.9',
        }) || {
          '--header-bg-opacity': '0',
        }
      }
      className="min-h-header fixed z-50 w-full bg-base-100 text-base-content transition-colors  focus-within:bg-opacity-100  md:bg-opacity-[var(--header-bg-opacity)]"
    >
      <div
        style={
          (show && {
            '--header-height': '80px',
          }) ||
          {}
        }
        className="container flex flex-wrap items-center justify-between w-full md:flex-row md:flex-nowrap"
      >
        <div className="flex items-center justify-between flex-shrink-0 w-full gap-3 mx-auto md:w-auto">
          <Link href="/">
            <a className="relative h-header w-[140px] transition-[height] duration-500 ease-in-out will-change-scroll lg:w-[140px]">
              <Logo />
            </a>
          </Link>
          <ToggleMenu />
        </div>
        <nav className="w-full md:flex-1 md:pl-container-offset">
          <input
            className="peer"
            hidden
            id="header-menu"
            type="checkbox"
          ></input>
          <div className="flex max-h-0 flex-col overflow-auto opacity-0 transition-all duration-700 ease-in-out peer-checked:h-view-height-fit peer-checked:max-h-[calc(100vh-var(--header-height))] peer-checked:opacity-100 md:h-auto md:max-h-header   md:flex-row md:items-center md:overflow-visible md:opacity-100 peer-checked:md:max-h-header xl:justify-end">
            <ul className="flex flex-col order-1 w-full text-sm uppercase truncate divide-neutral-content divide-opacity-30 border-neutral-content border-opacity-30 md:flex-row md:items-center md:justify-end md:divide-none md:border-y-0 xl:w-auto">
              {navItems.map(({ title, href, active }, i) => {
                return (
                  <li
                    key={i}
                    className="order-1 md:flex md:items-center md:text-center"
                  >
                    <Link href={href}>
                      <a
                        href={href}
                        className="flex items-center px-0 py-5 text-xl leading-6 capitalize rounded-lg borde bg-opacity-10 focus:text-primary md:bg-opacity-0 md:bg-none md:px-3 md:text-center md:hover:bg-base-content md:hover:bg-opacity-10"
                      >
                        {title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
