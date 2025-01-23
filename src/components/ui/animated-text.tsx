"use client"

import { useState, useEffect } from "react"

const words = ["Love", "Happiness", "Adventure", "Dreams", "Memories"]

export function AnimatedText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return <span className="text-green-400 font-light">{words[index]}</span>
}

