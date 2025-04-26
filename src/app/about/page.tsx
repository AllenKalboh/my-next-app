"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const About = () => {
    const router = useRouter();
  return (
    <div className='flex flex-col m-2'>
      About Page
      <button onClick={()=>{router.push("/about/kalabaw")}} className='bg-blue-400 w-fit'>
        Go to Kalabaw Page </button>
    </div>
    
  )
}

export default About
