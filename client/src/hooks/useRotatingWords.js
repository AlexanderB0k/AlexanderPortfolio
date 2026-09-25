import { useEffect, useState } from 'react'

//using a custom hook to rotate through an array of words, fading between them
function useRotatingWords(words, rotateEvery = 2200, transitionMs = 300) {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (!words || words.length < 2) return undefined

    let fadeTimeout
    const rotateInterval = setInterval(() => {
      setFading(true)
      fadeTimeout = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setFading(false)
      }, transitionMs)
    }, rotateEvery)

    return () => {
      clearInterval(rotateInterval)
      clearTimeout(fadeTimeout)
    }
  }, [words, rotateEvery, transitionMs])

  return { word: words[index], fading }
}

export default useRotatingWords
