"use client"

import React from 'react'
import Start from './subcomponents/start'
import Content  from './subcomponents/Content'

const Dashboard = () => {
  return (
    <div className='mo h-screen w-screen bg-white'>
      <Start />

    <Content/>
      
    </div>
  )
}

export default Dashboard
