import React from 'react'
import './rotating-logo.css'

type RotatingLogoProps = { imageSrc: string }

const RotatingLogo = ({ imageSrc }: RotatingLogoProps) => {
  return (
    <div className="rotating-logo">
      <img src={imageSrc} className="rotating-logo" alt="logo" />
    </div>
  )
}

export default RotatingLogo
