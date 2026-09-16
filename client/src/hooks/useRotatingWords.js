import { useEffect, useState } from 'react'

/**
 * Cycles through `words` forever, pausing `rotateEvery` ms on each one and
 * flagging a `fading` window (`transitionMs`) right before it swaps so the
 * caller can animate the change (e.g. fade/slide) via CSS.
 * @param {string[]} words - words to rotate through
 * @param {number} rotateEvery - ms to display each word
 * @param {number} transitionMs - ms of "fading" state before the swap
 */
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
