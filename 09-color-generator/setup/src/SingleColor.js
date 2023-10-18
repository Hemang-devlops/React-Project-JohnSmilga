import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setALert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`
  const handleClick = () => {
    setALert(true);
    navigator.clipboard.writeText(hexValue);
  }

  useEffect(() => {
    let alertInt = setInterval(() => {
      setALert(false)
    }, 3000)
    return () => clearInterval(alertInt);
  }, [alert])

  return <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={handleClick}>
    <p className='percent-value'>{weight} %</p>
    <p className='color-value'>{hexValue}</p>
    {
      alert && <p className={`alert ${index > 10 && 'alert-light'}`}>copied to clipboard</p>
    }
  </article>
}

export default SingleColor
