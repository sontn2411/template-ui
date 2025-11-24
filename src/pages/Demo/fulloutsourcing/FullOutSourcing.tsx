/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react'
import './assets/style.css'

import background from './assets/mv_background.jpg'
import town from './assets/town.png'
import mountain01 from './assets/mountain01.png'
import mountain02 from './assets/mountain02.png'
import sun from './assets/sun.png'
import clound01 from './assets/cloud01.png'
import clound02 from './assets/cloud02.png'
import book from './assets/book.png'

interface MousePos {
  x: number
  y: number
}

interface Layer {
  src: string
  depth: number
}

const FullOutSourcing = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState<MousePos>({ x: 0, y: 0 })
  const [pos, setPos] = useState<MousePos>({ x: 0, y: 0 })

  const layers: Layer[] = [
    { src: mountain02, depth: 0.6 },
    { src: mountain01, depth: 0.3 },
    { src: town, depth: 0.9 },
  ]

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMouse({ x, y })
    }

    containerRef.current?.addEventListener('mousemove', handleMove)
    return () =>
      containerRef.current?.removeEventListener('mousemove', handleMove)
  }, [])

  useEffect(() => {
    let animationFrame: number

    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.1,
        y: prev.y + (mouse.y - prev.y) * 0.1,
      }))
      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [mouse])

  return (
    <div
      ref={containerRef}
      className='h-screen w-full relative overflow-hidden'
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
      }}
    >
      <div>
        <div className='fixed top-12 left-1/4  w-24'>
          <img alt='sun' src={sun} className=' ' />
        </div>

        <div
          className='max-w-80 w-full fixed left-1/2  -translate-x-1/2 
             animate-[cloud-move1_40s_linear_infinite]'
        >
          <img alt='cloud1' src={clound01} />
        </div>

        <div
          className='max-w-[400px] w-full fixed left-1/2  -translate-x-1/2 
             animate-[cloud-move2_50s_linear_infinite]'
        >
          <img alt='cloud2' src={clound02} />
        </div>

        <div className='mv_book'>
          <img src={book} alt={'book'} />
        </div>
      </div>

      {layers.map((layer, idx) => {
        const translateX = pos.x * layer.depth * 100
        const translateY = pos.y * layer.depth * 100

        return (
          <div
            key={idx}
            className='absolute left-1/2 -bottom-20 -translate-x-1/2 transform-style-preserve-3d backface-hidden'
            style={{
              transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
            }}
          >
            <img
              src={layer.src}
              alt=''
              className='object-center object-cover w-[315vw] max-w-none sm:w-[115vw] '
            />
          </div>
        )
      })}
    </div>
  )
}

export default FullOutSourcing
