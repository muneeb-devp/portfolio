'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ThemeSwitch from './ThemeSwitch'

function ScrambleLink({ label, href, onClick }) {
  const [display, setDisplay] = useState(label)
  const timerRef = useRef(null)
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  const scramble = () => {
    let iteration = 0
    clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setDisplay(
        label
          .split('')
          .map((char, idx) => {
            if (idx < Math.floor(iteration)) return label[idx]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
      iteration += 0.45
      if (iteration > label.length) {
        clearInterval(timerRef.current)
        setDisplay(label)
      }
    }, 38)
  }

  useEffect(() => () => clearInterval(timerRef.current), [])

  return (
    <a
      href={href}
      className="nav-link"
      onMouseEnter={scramble}
      onClick={onClick}
    >
      {display}
    </a>
  )
}

const navLinks = [
  { id: 'projects', title: 'Projects' },
  { id: 'about', title: 'About' },
  { id: 'contact', title: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-background/75 border-b border-white/[0.04]'
          : ''
      }`}
    >
      <div className="mx-auto flex max-w-[96rem] items-center justify-between px-6 md:px-12 xl:px-20 py-6">
        {/* Logo */}
        <a
          href="/"
          className="font-display text-lg font-semibold tracking-[0.3em] hover:text-gold transition-colors duration-300"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          M.M
        </a>

        {/* Nav links */}
        <nav className="hidden sm:flex items-center gap-10">
          {navLinks.map(({ id, title }) => (
            <ScrambleLink
              key={id}
              label={title}
              href={`#${id}`}
              onClick={scrollTo(id)}
            />
          ))}
        </nav>

        {/* Theme toggle */}
        <div className="flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </motion.header>
  )
}
