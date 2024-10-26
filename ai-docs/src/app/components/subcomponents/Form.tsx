"use client"

import React from 'react'

const Form = () => {
  return (
    <div className='formx flex h-28 w-11/12 ml-6 mt-20'>
        <form>
            <input type="url" className='inputx w-80 h-10 pl-6 pr-12 rounded-2xl bg-pink-400 border-none text-white' placeholder='type here...'/>
            <button type='submit'className='boc bg-pink-400 text-white ml-5 h-7 w-20 rounded-xl'>submit</button>
        </form>
    </div>
  )
}

export default Form