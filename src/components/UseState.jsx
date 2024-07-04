import React from 'react'
import { useState } from 'react'

const UseState = () => {
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    setCounter(prev => prev+1); //instant update
    setCounter(prev => prev+1);
    setCounter(prev => prev+1);
    setCounter(prev => prev+1);
  }
    
  return (
    <div className='flex flex-col gap-3 mt-6'>
        <h1 className='text-center text-2xl'>Counter Value</h1>
        <p className='text-center text-4xl my-2'>{counter}</p>
        <button onClick={addCount} className='text-center text-white text-3xl bg-blue-600 rounded-md px-3 w-fit mx-auto'>+</button>
    </div>
  )
}

export default UseState