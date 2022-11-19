import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

const GameHeader = () => {
  const { handleRestart } = useContext(GlobalContext)

  return (
    <header
      className='flex justify-between items-center 
      max-[530px]:flex-col max-[530px]:gap-6'
    >
      <h1 className='text-primary font-bold text-4xl tracking-wide'>memory</h1>
      <div className='max-[530px]:w-full flex justify-between'>
        <button
          onClick={() => handleRestart()}
          className='bg-orange text-xl font-semibold text-lightText p-4 w-[150px] mr-4 rounded-full transition-all duration-300 hover:opacity-80 max-[530px]:w-[125px] max-[530px]:text-lg'
        >
          Restart
        </button>
        <Link
          onClick={() => handleRestart()}
          to='/'
          className='bg-buttonLight text-center text-xl font-semibold text-primary p-4 w-[150px] rounded-full transition-all duration-300 hover:bg-grayBlueHover hover:text-lightText max-[530px]:w-[125px] max-[530px]:text-lg'
        >
          New Game
        </Link>
      </div>
    </header>
  )
}

export default GameHeader
