'use client'
import { useEffect, useRef } from 'react'
import 'react-horizontal-vertical/rhv.css'

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      // ngăn cuộn dọc
      e.preventDefault()
      // chuyển deltaY thành scroll ngang
      el.scrollLeft += e.deltaY
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div
      ref={scrollRef}
      className='h-screen w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'
    >
      {/* Section 1 */}
      <section className='w-screen h-screen flex-shrink-0 snap-start flex items-center justify-center bg-blue-500 text-white'>
        Banner
      </section>

      {/* Section 2 */}
      <section className='w-screen h-screen flex-shrink-0 snap-start flex items-center justify-center bg-green-500 text-white'>
        About
      </section>

      {/* Section 3 */}
      <section className='w-screen h-screen flex-shrink-0 snap-start flex items-center justify-center bg-red-500 text-white'>
        Contact
      </section>
    </div>
  )
}
