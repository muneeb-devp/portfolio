'use client'

import Lenis from 'lenis'

import { createContext, ReactNode, useState, useEffect } from 'react'

export const ScrollContext = createContext({
  scrollY: 0,
})

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    lenis.on('scroll', ({ scroll }) => {
      setScrollY(scroll)
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}
