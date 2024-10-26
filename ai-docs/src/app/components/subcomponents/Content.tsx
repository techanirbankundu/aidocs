"use client"

import React from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'

const Content = () => {
  return (
    <div className='Content flex h-5/6 w-screen'>
    <Sidebar/>
    <Mainbar/>
    </div>
  )
}

export default Content