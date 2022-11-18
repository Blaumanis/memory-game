import React, { useContext } from 'react'
import GameHeader from '../components/GameHeader'
import Grid from '../components/Grid'
import GameInfo from '../components/GameInfo'
import { GlobalContext } from '../context/GlobalState'

const GamePage = () => {
  const {setMoves,setClicked,clicked} = useContext(GlobalContext)

  const handleMoves = (e) => {
    e.classList.add('active')
    setClicked([...clicked, e])
    setMoves((prev) => prev + 1)
  }

  return (
    <main className='w-screen min-h-screen flex flex-col justify-between p-8'>
      <GameHeader/>
      <Grid handleMoves={handleMoves} />
      <GameInfo/>
    </main>
  )
}

export default GamePage
