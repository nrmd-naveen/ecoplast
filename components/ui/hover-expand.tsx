"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface HoverExpandProps {
  images: string[]
  captions?: {title:string, desc: string}[]  // Optional array of text captions
  initialSelectedIndex?: number
  thumbnailHeight?: number
  modalImageSize?: number
  maxThumbnails?: number
}

export default function HoverExpand({
  images,
  captions = [],
  initialSelectedIndex = 0,
  maxThumbnails = 11,
}: HoverExpandProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex)

  const timerRef = useRef<NodeJS.Timeout | null>(null)


  const startInterval = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length)
    }, 3000)
  }

  const stopInterval = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
  }

  useEffect(() => {
    startInterval()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [images.length, startInterval])

  const handleMouseEnter = (index: number) => {
    setSelectedIndex(index)
    stopInterval()
  }

  const handleMouseLeave = () => {
    startInterval()
  }


  const handleTouchStart = (index: number) => {
    setSelectedIndex(index)
    stopInterval()
  }

  const handleTouchEnd = () => {
    startInterval()
  }

  return (
    <div className="relative">
      <div className="mx-auto flex w-fit gap-1 rounded-md md:gap-2">
        {images.slice(0, maxThumbnails).map((imageUrl, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative h-60 md:h-80 overflow-hidden rounded-2xl transition-all duration-300 ${
              selectedIndex === i
                ? "w-72 md:w-96"
                : "w-8 sm:w-10 md:w-16 xl:w-24"
            }`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart(i)}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              layoutId={`image-${i}`}
              className="absolute inset-0 size-full"
            >
              <Image
                src={imageUrl}
                alt={`Image ${i + 1}`}
                className="size-full object-cover transition-transform duration-300"
              />
              {/* <img
                src={imageUrl}
                alt={`Image ${i + 1}`}
                className="size-full object-cover transition-transform duration-300"
              /> */}
            </motion.div>

            {/* Animated Text at the top */}
            <motion.div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-neutral-800 bg-opacity-50 text-white text-left p-2 md:px-4"
                initial={{ opacity: 0, y: -20 }} // Initially hidden and slightly translated down
                animate={{
                  opacity: selectedIndex === i ? 1 : 0, // Fade in/out based on selection
                  y: selectedIndex === i ? 0 : -20, // Slide up/down
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  y: { duration: 0.3 },
                }}
                exit={{ opacity: 0 }}
              >
                <h1 className={`${selectedIndex === i ? 'opacity-100': 'opacity-0' } text-2xl md:text-3xl font-bold `}>
                  {captions[i].title || `Caption ${i + 1}`} 
                </h1>
                
            </motion.div>
            
            {/* Animated Text at the bottom */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-800 bg-opacity-50 text-white text-center py-2  md:py-4"
              initial={{ opacity: 0, y: 20 }} // Initially hidden and slightly translated down
              animate={{
                opacity: selectedIndex === i ? 1 : 0, // Fade in/out based on selection
                y: selectedIndex === i ? 0 : 20, // Slide up/down
              }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 0.3 },
              }}
            >
              <p className={`${selectedIndex === i ? 'opacity-100': 'opacity-0' } text-sm p-2 pb-0 text-neutral-200`}>
                {captions[i].desc || `Caption ${i + 1}`}
              </p>
              
            </motion.div>
          </div>
        ))}
      </div>

      
    </div>
  )
}
