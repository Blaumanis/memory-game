import React, { useState } from 'react'
import GameHeader from '../components/GameHeader'
import Grid from '../components/Grid'
import GameInfo from '../components/GameInfo'

const GamePage = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [moves, setMoves] = useState(0)

  const [clicked, setClicked] = useState([])

  const handleMoves = (e) => {
    e.classList.add('active')
    setClicked([...clicked, e])
    setMoves((prev) => prev + 1)
  }
  console.log(clicked)

  return (
    <main className='w-screen h-screen flex flex-col justify-between p-8'>
      <GameHeader setMoves={setMoves} setMinutes={setMinutes} setSeconds={setSeconds}/>
      <Grid handleMoves={handleMoves} clicked={clicked} />
      <GameInfo
        moves={moves}
        seconds={seconds}
        setSeconds={setSeconds}
        minutes={minutes}
        setMinutes={setMinutes}
      />
    </main>
  )
}

export default GamePage
