import { useEffect, useState } from 'react'

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowSize() {
  const [windowSizes, setWindowSizes] = useState(getWindowSize())

  useEffect(() => {
    function handleResize() {
      setWindowSizes(getWindowSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSizes
}
