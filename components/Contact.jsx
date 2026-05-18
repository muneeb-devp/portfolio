'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TfiLinkedin } from 'react-icons/tfi'
import { VscGithubAlt, VscMail } from 'react-icons/vsc'

function RevealLine({ children, delay = 0, className = '' }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '102%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, margin: '-5%' }}
        transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}

const links = [
  {
    label: 'LinkedIn',
    sub: 'linkedin.com/in/muneeb-mughal-',
    href: 'https://linkedin.com/in/muneeb-mughal-',
    Icon: TfiLinkedin,
  },
  {
    label: 'GitHub',
    sub: 'github.com/muneeb-devp',
    href: 'https://github.com/muneeb-devp',
    Icon: VscGithubAlt,
  },
  {
    label: 'Email',
    sub: 'muneeb.devp@gmail.com',
    href: 'mailto:muneeb.devp@gmail.com',
    Icon: VscMail,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 xl:px-20 pt-32 pb-24 scroll-mt-20"
    >
      <div className="rule mb-14" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="label">03 — Get in touch</span>
      </motion.div>

      {/* Big headline */}
      <div
        className="font-display leading-none tracking-tight mb-20"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <RevealLine
          delay={0}
          className="text-[clamp(3rem,9vw,11rem)] font-light"
        >
          LET&apos;S BUILD
        </RevealLine>
        <RevealLine
          delay={0.1}
          className="text-[clamp(3rem,9vw,11rem)] font-light text-stroke"
        >
          SOMETHING
        </RevealLine>
        <RevealLine
          delay={0.2}
          className="text-[clamp(3rem,9vw,11rem)] font-light"
        >
          GREAT.
        </RevealLine>
      </div>

      {/* Contact links */}
      <div className="mb-20">
        {links.map(({ label, sub, href, Icon }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="contact-link"
          >
            <div className="flex items-center gap-5">
              <Icon
                size={18}
                className="opacity-40 transition-opacity duration-300"
                style={{ flexShrink: 0 }}
              />
              <div>
                <span
                  className="font-display block text-2xl md:text-3xl font-light"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {label}
                </span>
                <span
                  className="label"
                  style={{ fontSize: '0.6rem', color: 'rgba(var(--fg-rgb), 0.28)' }}
                >
                  {sub}
                </span>
              </div>
            </div>
            <span
              className="label transition-opacity duration-300"
              style={{ opacity: 0.35, fontSize: '1rem' }}
            >
              ↗
            </span>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-8 border-t border-foreground/[0.07]"
      >
        <span className="label">Muneeb Mughal</span>
        <span className="label">Crafted with precision · {new Date().getFullYear()}</span>
      </motion.div>
    </section>
  )
}
