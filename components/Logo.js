import React from 'react'
import Image from './UI/Image'

export default function Logo() {
  return (
    <Image
      src={'/logo.svg'}
      className="block h-full w-full object-contain indent-[-99999px]"
      href="#/"
      alt="meraki"
    ></Image>
  )
}
