'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitch from './ThemeSwitch'

const headerNavLinks = [
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
  { href: '/contact', title: 'Contact' },
]

export default function Header() {
  const pathName = usePathname()

  return (
    <section>
      <header className="z-40 bg-transparent py-5 md:py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={classNames(
                'horizontal-underline hidden text-3xl font-extrabold sm:block',
                {
                  'horizontal-underline-active': pathName === '/',
                }
              )}
              aria-label="M.M"
            >
              M.M
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="hidden space-x-5 sm:flex">
              {headerNavLinks.map(({ title, href }) => {
                const active = pathName?.includes(href)
                return (
                  <Link
                    prefetch
                    key={title}
                    href={href}
                    className={classNames('horizontal-underline text-base', {
                      'horizontal-underline-active': active,
                    })}
                    aria-label={title}
                  >
                    <span className="font-semibold tracking-wide ">
                      {title}
                    </span>
                  </Link>
                )
              })}
            </div>
            <div className="flex items-center">
              <ThemeSwitch />
            </div>
            {/* <div className="flex items-center">
              <CommandPalette />
              <MobileNav />
            </div> */}
          </div>
        </div>
      </header>
    </section>
  )
}
