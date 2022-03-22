import classNames from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
function Transition({ content, children }) {
  const [displayChildren, setDisplayChildren] = useState(content)
  const [transitionStage, setTransitionStage] = useState('out')
  useEffect(() => {
    setTransitionStage('in')
  }, [])

  useEffect(() => {
    if (content !== displayChildren) setTransitionStage('out')
  }, [content, setDisplayChildren, displayChildren, children])

  const onTransitionEnd = useCallback(() => {
    if (transitionStage === 'out') {
      setDisplayChildren(content)
      setTransitionStage('in')
    }
  }, [content, transitionStage])
  return children({
    content,
    onTransitionEnd,
    transitionStage,
    displayChildren,
  })
}
function Layout({ children }) {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://d33wubrfki0l68.cloudfront.net/d1bd1b1aaa4f9ca18269a3ef4fddfb560b29e5a7/16387/assets/lander/background.svg)',
      }}
    >
      <Header />
      <div className="h-header" id="content" />
      <Transition content={children}>
        {({ onTransitionEnd, transitionStage, displayChildren }) => {
          return (
            <main
              onTransitionEnd={onTransitionEnd}
              className={classNames(
                'min-h-[calc(100vh-var(--header-height))] animate-faster ',
                {
                  'animate-fadeIn': transitionStage === 'in',
                  'animate-fadeOut': transitionStage === 'out',
                }
              )}
            >
              {displayChildren}
            </main>
          )
        }}
      </Transition>

      <div className="container h-px my-24 divider before:h-px after:h-px md:mt-36" />

      <Footer />
    </div>
  )
}

export default Layout
