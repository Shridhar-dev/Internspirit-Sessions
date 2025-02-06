import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='h-screen w-full'></div>
        <img src="./next.svg" alt="" />
        <Image src={'/next.svg'} alt=''  width={100} height={100} loading='lazy'/>
    </div>
  )
}

export default page