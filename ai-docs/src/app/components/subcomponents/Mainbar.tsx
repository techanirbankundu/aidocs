"use client"

import React from 'react'
import Form from './Form'
import Cloud from './Cloud'

const Mainbar = () => {
  return (
    <>
      <div className="mainbo h-full w-[85vw]">
      <div className="wm h-14 w-96 ml-6 mt-20 bg-red-400">
        <p className='wow ml-20'>Welcome Message</p></div>
        <Form/>
        <Cloud/>
       <div className="bore  h-10 w-20  mt-4 ml-auto bg-red-600 rounded-2xl">
        <button className='si ml-4 mt-2'>sign in</button>
       </div>
      </div>
      
    </>
  )
}

export default Mainbar