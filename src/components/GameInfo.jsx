import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const GameInfo = () => {
  const { seconds, setSeconds, minutes, setMinutes, moves, isGameOver } =
    useContext(GlobalContext)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    if(isGameOver){
      clearInterval(interval)
    }
    return () => clearInterval(interval);  
  },[seconds]);

  const value = 0
  if (seconds === 60) {
    setSeconds(value)
    setMinutes((oldCount) => oldCount + 1)
  }

  return (
    <div className='flex w-[600px] mx-auto justify-between items-center max-[768px]:w-full max-[768px]:mx-0'>
      <div className='bg-infoBg p-4 w-[150px] flex flex-col items-center rounded-lg max-[530px]:w-[125px] max-[530px]:p-2'>
        <p className='text-blueText font-semibold'>Time</p>
        <span className='text-buttonDark font-semibold text-xl'>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <div className='bg-infoBg p-4 w-[150px] flex flex-col items-center rounded-lg max-[530px]:w-[125px] max-[530px]:p-2'>
        <p className='text-blueText font-semibold'>Moves</p>
        <span className='text-buttonDark font-semibold text-xl'>{moves}</span>
      </div>
    </div>
  )
}

export default GameInfo
