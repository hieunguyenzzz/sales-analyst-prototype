import classNames from 'classnames'
import React from 'react'
// all icons
/* <Head>
<link rel="preload" as="image/svg+xml" href={'./sprite.svg'} />
</Head> */

const icons = [
  'search',
  'heart',
  'phone',
  'menu',
  'arrow-left',
  'arrow-right',
  'arrow-down',
  'location',
  'file',
  'left',
  'right',
  'circle-checked',
  'filter',
]

function Icon({ id, className, ...props }) {
  return (
    <svg
      className={classNames('icon flex-shrink-0', className)}
      height="1em"
      width="1em"
      {...props}
    >
      <use href={`/sprite.svg#i-${id}`} />
    </svg>
  )
}
export default Icon
