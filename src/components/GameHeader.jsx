import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

const GameHeader = () => {  
  const {setMoves,setMinutes,setSeconds} = useContext(GlobalContext)

  const handleRestart = () => {
    setMoves(0)
    setMinutes(0)
    setSeconds(0)
  }

  return (
    <header className='flex justify-between items-center'>
      <h1 className='text-primary font-bold text-4xl tracking-wide'>
        memory
      </h1>
      <div>
        <button onClick={()=> handleRestart()} className='bg-orange text-xl font-semibold text-lightText p-4 w-[150px] mr-4 rounded-full transition-all duration-300 hover:opacity-80'>Restart</button>
        <Link to='/' className='bg-buttonLight text-center text-xl font-semibold text-primary p-4 w-[150px] rounded-full transition-all duration-300 hover:bg-grayBlueHover hover:text-lightText'>New Game</Link>
      </div>

    </header>
  )
}

export default GameHeader
