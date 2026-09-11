import { useEffect, useState } from 'react'

/**
 * Types out `text` one character at a time.
 * @param {string} text - the full string to type out
 * @param {number} speed - ms delay between each character
 * @param {number} startDelay - ms to wait before typing starts
 */
function useTypewriter(text, speed = 100, startDelay = 300) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    setDisplay('')
    let i = 0
    let interval

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setDisplay(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return display
}

export default useTypewriter
