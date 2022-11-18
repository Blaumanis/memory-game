import React, { useState, useContext, useEffect,useRef } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { loadIcons } from '../assets/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Module from './Module'

const Grid = ({ handleMoves }) => {
  const { theme, setTheme, grid, setGrid, clicked, setWinningArr, winningArr,setIsGameOver } =
    useContext(GlobalContext)

  const gridRef = useRef(null)

  // number array
  const numberArea = []
  for (let i = 0; i < grid; i++) {
    numberArea.push(i)
  }

  const doubleNumberArr = Array(2)
    .fill([...numberArea])
    .flat()
  const shuffledNumberArr = doubleNumberArr.sort(() => Math.random() - 0.5)
  const [numberGridArea, setNumberGridArea] = useState([...shuffledNumberArr])

  // icon array
  let icons = [...loadIcons]
  let full = [...icons]
  let half = [...icons].slice(0, 8)

  if (grid === 8) {
    icons = half
  }
  if (grid === 18) {
    icons = full
  }

  const doubleIconArr = Array(2)
    .fill([...icons])
    .flat()
  const shuffledIconArr = doubleIconArr.sort(() => Math.random() - 0.5)
  const [iconGridArea, setIconGridArea] = useState([...shuffledIconArr])

  // logic for clicking
  useEffect(() => {
    if (clicked.length === 2) {
      const children = gridRef.current.childNodes
      children.forEach((el) => el.classList.add('non-clickable'))
       setTimeout(() => {
        children.forEach((el) => el.classList.remove('non-clickable'))
      }, 1000)
      if (clicked[0].isEqualNode(clicked[1])) {
        setWinningArr([winningArr, ...clicked].flat())
        clicked.length = 0
      }
      setTimeout(() => {
        clicked.map((el) => el.classList.remove('active'))
        clicked.length = 0
      }, 1000)
    }
  })

  if (
    winningArr.length === numberGridArea.length ||
    winningArr.length === iconGridArea.length
  ) {
    setIsGameOver(true)
    return <Module />
  }

  return (
    <section
      ref={gridRef}
      style={{
        gridTemplateColumns: `repeat(${grid === 8 ? 4 : 6}, minmax(0,1fr))`,
      }}
      className='mx-auto w-[600px] grid gap-4 justify-center py-8 '
    >
      {theme === 'Numbers'
        ? numberGridArea.map((el, idx) => (
            <button
              onClick={(e) => handleMoves(e.target)}
              key={idx}
              className='rounded-full bg-buttonDark aspect-square text-2xl text-buttonDark'
            >
              {el}
            </button>
          ))
        : iconGridArea.map((el, idx) => (
            <button
              onClick={(e) => handleMoves(e.target)}
              key={idx}
              className='rounded-full bg-buttonDark aspect-square text-2xl text-lightText p-4'
            >
              <FontAwesomeIcon
                className='text-buttonDark pointer-events-none'
                icon={el}
              />
            </button>
          ))}
    </section>
  )
}

export default Grid
