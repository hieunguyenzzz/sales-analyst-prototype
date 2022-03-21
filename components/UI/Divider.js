import classNames from 'classnames'
import React from 'react'

function Divider({ className }) {
  return (
    <div
      className={classNames(
        'divider before:h-px after:h-px last:hidden',
        className
      )}
    />
  )
}

export default Divider
