import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const GameInfo = () => {
  const { seconds, setSeconds, minutes, setMinutes, moves, isGameOver } =
    useContext(GlobalContext)

  useEffect(() => {
    const id = setInterval(() => setSeconds((oldCount) => oldCount + 1), 1000)
    return () => {
      // if (isGameOver) {
        // }
        clearInterval(id)
    }
  }, [seconds])

  const value = 0
  if (seconds === 60) {
    setSeconds(value)
    setMinutes((oldCount) => oldCount + 1)
  }

  return (
    <div className='flex w-[600px] mx-auto justify-between items-center'>
      <div className='bg-infoBg p-4 w-[150px] flex flex-col items-center rounded-lg'>
        <p className='text-blueText font-semibold'>Time</p>
        <span className='text-buttonDark font-semibold text-xl'>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <div className='bg-infoBg p-4 w-[150px] flex flex-col items-center rounded-lg'>
        <p className='text-blueText font-semibold'>Moves</p>
        <span className='text-buttonDark font-semibold text-xl'>{moves}</span>
      </div>
    </div>
  )
}

export default GameInfo
