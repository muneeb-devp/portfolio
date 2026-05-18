'use client'
import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeroParallax = ({ products }) => {
    const firstRow = products.slice(0, 5)
    const secondRow = products.slice(5, 10)
    const thirdRow = products.slice(10, 15)
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    )
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    )
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    )
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    )
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    )
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    )
    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] "
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export const Header = () => {
    return (
        <div
            className="relative mx-auto py-24 md:py-40 px-6 md:px-12 xl:px-20 w-full left-0 top-0 scroll-mt-20"
            id="projects"
        >
            {/* Section label */}
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="label mb-8 block"
            >
                01 — Projects
            </motion.span>

            {/* Heading */}
            <div style={{ overflow: 'hidden' }}>
                <motion.h2
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="font-display text-[clamp(2rem,6vw,7.5rem)] font-light leading-tight text-foreground"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    Crafting digital experiences,<br />
                    one project at a time.
                </motion.h2>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl font-display text-lg md:text-xl font-light leading-relaxed"
                style={{
                    fontFamily: 'var(--font-display)',
                    color: 'rgba(var(--fg-rgb), 0.45)',
                }}
            >
                I build scalable products with the latest technologies and
                frameworks — turning complex ideas into elegant digital realities.
            </motion.p>
        </div>
    )
}

export const ProductCard = ({ product, translate }) => {
    return (
        <motion.div
            style={{ x: translate }}
            whileHover={{ y: -16 }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <Link
                href={product.link}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            {/* Overlay */}
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.3) 60%, transparent 100%)' }}
            />
            {/* Border reveal */}
            <div className="absolute inset-0 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(200,169,122,0.35)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover/product:translate-y-0 group-hover/product:opacity-100 transition-all duration-300">
                <h2
                    className="font-display text-xl font-light text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    {product.title}
                </h2>
            </div>
        </motion.div>
    )
}
