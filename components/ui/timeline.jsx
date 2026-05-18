'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

export const Timeline = ({ data }) => {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full px-6 md:px-12 xl:px-20 py-20" ref={containerRef}>

      {/* Section header */}
      <div className="mb-16">
        <div className="rule mb-8" />
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label"
        >
          02 — Experience
        </motion.span>
        <div style={{ overflow: 'hidden' }} className="mt-4">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-[clamp(2rem,4.5vw,5rem)] font-light leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Changelog from my journey
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="label mt-3"
          style={{ color: 'rgba(var(--fg-rgb), 0.35)' }}
        >
          A timeline of my voyage into the world of software.
        </motion.p>
      </div>

      {/* Timeline entries */}
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-start pt-14 md:pt-24 md:gap-16"
          >
            {/* Date column — sticky */}
            <div className="sticky flex flex-col md:flex-row z-40 items-start top-28 self-start max-w-[200px] md:max-w-sm md:w-full">
              <div className="md:pl-10">
                <div
                  className="w-2 h-2 rounded-full mb-4 ml-[3px]"
                  style={{ background: '#C8A97A' }}
                />
                <h3
                  className="hidden md:block font-display font-light text-foreground"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem,3vw,3rem)',
                    opacity: 0.5,
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content column */}
            <div className="relative pl-10 pr-4 md:pl-0 w-full max-w-2xl">
              {/* Mobile date */}
              <h3
                className="md:hidden block font-display font-light mb-4 text-foreground"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  opacity: 0.45,
                }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </motion.div>
        ))}

        {/* Animated vertical line */}
        <div
          className="absolute left-[3px] md:left-[39px] top-0 w-px overflow-hidden"
          style={{
            height: height + 'px',
            background: 'rgba(var(--fg-rgb), 0.06)',
          }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-full"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: 'linear-gradient(to bottom, #C8A97A 0%, rgba(200,169,122,0.3) 60%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
