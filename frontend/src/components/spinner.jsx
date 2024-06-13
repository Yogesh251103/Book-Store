import React from 'react'
import Lottie from "lottie-react"
import data from "../assets/spinner.json"

export default function Spinner() {
  return (
    <div className='text-center'>
        <Lottie
        animationData={data} // JSON animation data
        loop={true} // Whether the animation should loop
        autoplay={true} // Whether the animation should play automatically
        style={{ width: '300px', height: '300px' }} // Set width and height
      />
    </div>
  )
}
