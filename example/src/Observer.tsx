import React from 'react'
import useResizeObserver from 'resize-observer-hook';
import './styles.css'

const Observer = () => {
  const [ref, width, height] = useResizeObserver()
  return (
    <div className='wrapper'>
      <div className='box'>
        <p> Resize The TextArea to see the magic!</p>
        <textarea ref={ref} className='box'></textarea>
        <p> Width: {width}px</p>
        <p> Height: {height}px</p>
      </div>
    </div>
  )
}
export default Observer
