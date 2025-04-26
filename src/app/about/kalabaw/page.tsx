"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Kalabaw = () => {
    const router = useRouter();
  return (
    <div className='flex flex-col m-2'>
      Kalabawan
      <button onClick={()=>{router.push("/about")}} className='w-fit'> Go to about </button>
    </div>
  )
}

export default Kalabaw
