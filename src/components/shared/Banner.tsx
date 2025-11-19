'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { banner1, banner2, banner3 } from '@/assets'
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { MoveLeft, MoveRight } from 'lucide-react'

const data = [
  { id: 1, title: 'Relax', button: 'our facilities', image: banner1 },
  { id: 2, title: 'Comfort', button: 'Choose room', image: banner2 },
  { id: 3, title: 'Happy', button: 'our facilities', image: banner3 },
]

const socials = [
  {
    id: 1,
    name: 'Facebook',
    icon: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 448 512'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: 'X',
    icon: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 448 512'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z'></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Gmail',
    icon: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        role='img'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z'></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Instagram',
    icon: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 448 512'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z'></path>
      </svg>
    ),
  },
]

const Banner = () => {
  const delay = 5000
  const autoplay = Autoplay({ delay: delay, stopOnInteraction: false })
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchDrag: false },
    [autoplay, Fade()]
  )
  const [progress, setProgress] = useState(0)
  const startTime = useRef<number>(0)

  const [isPaused, setIsPaused] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const animate = useCallback(() => {
    const elapsed = Date.now() - startTime.current
    const percent = Math.min((elapsed / delay) * 100, 100)
    setProgress(percent)

    if (percent < 100) {
      requestAnimationFrame(animate)
    }
  }, [delay])

  const resetProgress = useCallback(() => {
    startTime.current = Date.now()
    setProgress(0)
    requestAnimationFrame(animate)
  }, [animate])

  useEffect(() => {
    if (!emblaApi) return
    resetProgress()
    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      resetProgress()
    }

    emblaApi.on('init', onInit)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)

    onInit()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      autoplay.reset()
      // resetProgress()
    }
  }, [emblaApi, autoplay])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      autoplay.reset()
      // resetProgress()
    }
  }, [emblaApi, autoplay])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const togglePause = useCallback(() => {
    if (!emblaApi) return
    const autoplayApi = emblaApi.plugins().autoplay as AutoplayType | undefined
    if (!autoplayApi) return

    if (isPaused) {
      autoplayApi.play()
      setIsPaused(false)
      resetProgress()
    } else {
      autoplayApi.stop()
      setIsPaused(true)
    }
  }, [emblaApi, isPaused, resetProgress])

  return (
    <div className='relative h-screen'>
      <div className='overflow-hidden h-full' ref={emblaRef}>
        <div className='flex h-full'>
          {data.map((item) => (
            <div
              className='flex-[0_0_100%] min-w-0 relative h-full'
              key={item.id}
            >
              <Image
                src={item.image}
                alt={item.title}
                className='w-full h-full object-cover'
                priority
                fill
              />
              <div className='absolute z-[99] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <motion.h2
                  key={selectedIndex}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                  className='sm:text-2xl md:text-4xl lg:text-9xl sm:tracking-[20px] md:tracking-[40px] lg:tracking-[70px] uppercase font-semibold'
                >
                  {item.title}
                </motion.h2>

                <motion.div
                  key={`btn-${selectedIndex}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                  className='flex justify-center items-center mt-4'
                >
                  <button
                    className='group relative flex items-center justify-center gap-2 border-2 border-[rgba(255,255,255,.3)] px-4 py-2 uppercase font-semibold tracking-[2px] text-sm text-white overflow-hidden
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-color-1 before:to-color-1 before:w-full before:h-full before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-0
    '
                  >
                    <span className='relative z-10 flex items-center gap-2'>
                      {item.button}
                      <svg
                        className='w-5 h-5 text-color-1 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:text-white'
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 256 512'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'></path>
                      </svg>
                    </span>
                  </button>
                </motion.div>
              </div>
              <div className='absolute inset-0 bg-[linear-gradient(0deg,rgba(20,20,20,0.5)_25%,rgba(107,87,64,0.5)_100%)] z-10' />
            </div>
          ))}
        </div>
      </div>
      {/* {!isPaused && (
        <div className='absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30'>
          <div
            className='h-full bg-gray-400 transition-none'
            style={{ width: `${progress}%` }}
          />
        </div>
      )} */}

      {/* bottom banner */}
      <div className='flex justify-between items-center absolute bottom-8 z-20 w-full px-10'>
        <div className='flex items-end gap-4'>
          <button
            onClick={togglePause}
            className='opacity-[0.5] hover:opacity-100 cursor-pointer'
          >
            <div className='h-8 w-8'>
              {isPaused ? (
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M8 5v14l11-7z'></path>
                </svg>
              ) : (
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M224 432h-80V80h80zm144 0h-80V80h80z'></path>
                </svg>
              )}
            </div>
          </button>
          <div>
            <span className='text-2xl'>{selectedIndex + 1} </span>/{' '}
            {data.length}
          </div>
        </div>

        {/* Dot indicator */}
        <div className='flex gap-4'>
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full border-2 cursor-pointer opacity-[0.5] hover:opacity-100 ${
                index === selectedIndex ? 'bg-white !opacity-100' : ''
              }`}
            ></button>
          ))}
        </div>

        <div className='flex gap-4'>
          <button
            onClick={scrollPrev}
            className='cursor-pointer opacity-[0.5] hover:opacity-100'
          >
            <MoveLeft className='w-8 h-8' />
          </button>
          <button
            onClick={scrollNext}
            className='cursor-pointer opacity-[0.5] hover:opacity-100'
          >
            <MoveRight className='w-8 h-8' />
          </button>
        </div>
      </div>

      {/* social  */}
      <div className=' absolute left-10 top-1/2 -translate-y-1/2 z-20 hidden md:block'>
        <ul className='flex flex-col items-center gap-4'>
          {socials.map((item) => (
            <li key={item.id}>
              <div className=' w-4 h-4 text-white'>{item.icon}</div>
            </li>
          ))}
          <li className='pt-6'>
            <span className='[writing-mode:vertical-lr] rotate-180 text-sm'>
              Book now
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Banner
