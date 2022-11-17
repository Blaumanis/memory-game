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
    setClicked
  }


  
  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
}
