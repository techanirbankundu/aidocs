"use client"


import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="side h-full w-48 pt-1  bg-blue-400">
        <div className="nc h-14 w-44 pt-1 ml-1 rounded-xl flex bg-green-400">
          <div className="nch h-9 w-24 ml-5 mt-1 pt-1 bg-blue-950 ">
            <p className='crow text-slate-300 ml-3 italic'>New Chat</p>
          </div>
          <div className="up h-10 w-10 bg-gray-700 ml-2 pt-1 rounded-full">
          <i className="ri-arrow-down-s-line ml-2  text-2xl"></i>
          </div>
        </div>
        <div className="history h-96 w-40 ml-3 mt-4 bg-red-400 rounded-2xl relative">
          <p className='ml-11'>History</p><div className="lm h-9 w-28 bg-green-600 absolute left-6 rounded-2xl bottom-0">
            <p className='hm ml-4 mt-1'>load more...</p>
          </div>
        </div>
        <div className="primium pt-3 h-12 w-28 mt-6 bg-cyan-700 ml-9 rounded-2xl ">
          <p className='hy ml-6 '>Premium</p>
        </div>
      </div>
      <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
    rel="stylesheet"
/>
    </div>
    
  )
}
export default Sidebar