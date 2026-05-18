'use client'

import { motion } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import { ScrollContext } from './Providers/ScrollProvider'
import { renderCanvas } from '@/lib/renderCanvas'

function LineReveal({ children, delay = 0, className = '' }) {
    return (
        <div style={{ overflow: 'hidden', display: 'block' }}>
            <motion.div
                initial={{ y: '108%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default function Hero() {
    const ref = useRef(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0
    if (ref.current) {
        progress = Math.min(1, scrollY / ref.current.clientHeight)
    }

    useEffect(() => {
        renderCanvas()
    }, [])

    return (
        <div className='relative'>
            <h1 className='sr-only'>
                Muneeb Mughal — Principal Engineer, building for the web.
            </h1>

            {/* Hero layout */}
            <div className='relative z-10 flex min-h-screen flex-col justify-center pt-28 pb-20 px-6 md:px-12 xl:px-20'>
                <div ref={ref}>
                    {/* Label row */}
                    <motion.div
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className='mb-10 flex items-center gap-4'
                    >
                        <span className='label text-gold'>Portfolio</span>
                        <span className='label' style={{ opacity: 0.3 }}>
                            /
                        </span>
                        <span className='label'>
                            {new Date().getFullYear()}
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: 0.9,
                                delay: 0.4,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            style={{ originX: 0 }}
                            className='h-px w-12 bg-gold opacity-40'
                        />
                    </motion.div>

                    {/* Name — massive editorial display */}
                    <div
                        className='font-display leading-none mb-10'
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        <LineReveal
                            delay={0.2}
                            className='block text-[clamp(4rem,16vw,18rem)] font-light tracking-[-0.02em] leading-none select-none'
                        >
                            MUNEEB
                        </LineReveal>
                        <LineReveal
                            delay={0.38}
                            className='block text-[clamp(4rem,16vw,18rem)] font-light tracking-[-0.02em] leading-none select-none text-stroke'
                        >
                            MUGHAL
                        </LineReveal>
                    </div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.9,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        style={{ originX: 0 }}
                        className='rule mb-8'
                    />

                    {/* Bottom row — metadata + CTA */}
                    <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6'>
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.15 }}
                            className='flex flex-col gap-1'
                        >
                            <p
                                className='font-mono-custom text-sm tracking-[0.18em] uppercase'
                                style={{
                                    color: 'rgba(var(--fg-rgb), 0.55)',
                                    fontFamily: 'var(--font-mono)',
                                }}
                            >
                                Principal Engineer
                            </p>
                            <p
                                className='font-mono-custom text-xs tracking-[0.18em] uppercase'
                                style={{
                                    color: 'rgba(var(--fg-rgb), 0.28)',
                                    fontFamily: 'var(--font-mono)',
                                }}
                            >
                                Web&nbsp;·&nbsp;Mobile&nbsp;·&nbsp;Desktop&nbsp;·&nbsp;6+
                                Years
                            </p>
                        </motion.div>

                        <motion.a
                            href='#contact'
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.3 }}
                            className='btn-ink self-start sm:self-auto'
                            onClick={e => {
                                e.preventDefault()
                                document
                                    .querySelector('#contact')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            <span>Get in touch</span>
                            <span>↗</span>
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                style={{
                    opacity: Math.max(0, 1 - progress * 4),
                    cursor: 'pointer',
                }}
                className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3'
                onClick={() =>
                    document
                        .querySelector('#projects')
                        ?.scrollIntoView({ behavior: 'smooth' })
                }
            >
                <span
                    className='label'
                    style={{ fontSize: '0.55rem', letterSpacing: '0.3em' }}
                >
                    Scroll
                </span>
                <motion.div
                    animate={{
                        scaleY: [1, 1.4, 1],
                        opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'easeInOut',
                    }}
                    className='w-px h-12 bg-foreground origin-top'
                />
            </motion.div>

            {/* Colorful cursor trail canvas */}
            <canvas
                className='pointer-events-none absolute inset-0 z-0'
                id='canvas'
            />
        </div>
    )
}
