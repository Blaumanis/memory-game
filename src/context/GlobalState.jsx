import React, { useState } from 'react'
export const GlobalContext = React.createContext(null)

export default ({ children }) => {
  const [theme, setTheme] = useState('Numbers')
  const [playerCount, setPlayerCount] = useState(1)
  const [grid, setGrid] = useState(8)

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [moves, setMoves] = useState(0)

  const [clicked, setClicked] = useState([])
  const [winningArr, setWinningArr] = useState([])

  const [isGameOver, setIsGameOver] = useState(false)

  const handleRestart = () => {
    setMoves(0)
    setMinutes(0)
    setSeconds(0)
    setWinningArr([])
    setIsGameOver(false)
  }

  const store = {
    theme,
    setTheme,
    playerCount,
    setPlayerCount,
    grid,
    setGrid,
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    moves,
    setMoves,
    clicked,
    setClicked,
    winningArr,
    setWinningArr,
    isGameOver,
    setIsGameOver,
    handleRestart,
  }

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  )
}
