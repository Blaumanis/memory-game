import React from 'react'
import StartModule from '../components/StartModule'

const StartPage = () => {
  return (
    <main className='w-screen h-screen p-4 bg-primary flex justify-center items-center flex-col gap-16 max-[768px]:gap-8'>
        <h1 className='text-lightText text-center font-bold text-5xl tracking-wide max-[768px]:text-4xl'>memory</h1>
        <StartModule/>
    </main>
  )
}

export default StartPage
