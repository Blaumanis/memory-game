import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'

const Module = () => {
  const { setSeconds,seconds, setMinutes,minutes, setMoves,moves, setWinningArr } = useContext(GlobalContext)

  const handleRestart = () => {
    setMoves(0)
    setMinutes(0)
    setSeconds(0)
    setWinningArr([])
  }

  return (
    <section className='w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
      <article className='bg-lightText rounded-lg p-12 w-[600px] h-[600px] flex flex-col items-center justify-center gap-4'>
        <h2 className='text-5xl font-semibold text-buttonDark'>You did it!</h2>
        <p className='text-xl font-semibold text-moduleGray'>
          Game over! Here's how you got on...
        </p>
        <div className='flex justify-between w-3/4 rounded-md p-4 mt-8 bg-infoBg'>
          <p className='text-moduleGray font-semibold'>Time Elapsed</p>
          <p className='text-2xl font-semibold text-darkText'>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </div>
        <div className='flex justify-between w-3/4 rounded-md p-4 mb-8 bg-infoBg'>
          <p className='text-moduleGray font-semibold'>Moves taken</p>
          <p className='text-2xl font-semibold text-darkText'>{moves}</p>
        </div>
        <div className='w-full flex justify-center items-center'>
          <button
            onClick={() => handleRestart()}
            className='bg-orange text-xl font-semibold text-lightText p-4 w-1/2 mr-4 rounded-full transition-all duration-300 hover:opacity-80'
          >
            Restart
          </button>
          <Link
            to='/'
            className='bg-buttonLight text-center text-xl font-semibold text-primary p-4 w-1/2 rounded-full transition-all duration-300 hover:bg-grayBlueHover hover:text-lightText'
          >
            New Game
          </Link>
        </div>
      </article>
    </section>
  )
}

export default Module
