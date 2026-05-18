'use client'
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'

export default function LenisProvider({ children }) {
  return <ReactLenis root>{children}</ReactLenis>
}
