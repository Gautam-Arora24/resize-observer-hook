import { useState, useEffect } from 'react'

const useResizeObserver = (ref) => {
  const [height, setHeight] = useState()
  const [width, setWidth] = useState()

  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver((entries) => {
        handleResize(entries)
      })
      observer.observe(ref.current)

      // Callback fired when component is unmounted
      return () => {
        observer.disconnect()
      }
    }
  }, [ref])

  const handleResize = (entries) => {
    for (let entry of entries) {
      setHeight(entry.contentRect.height)
      setWidth(entry.contentRect.width)
    }
  }

  return [width, height]
}

export default useResizeObserver
