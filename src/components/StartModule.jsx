import React, { useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';

const StartModule = () => {
  const {theme, setTheme, playerCount, setPlayerCount, grid, setGrid} = useContext(GlobalContext)

  const handleTheme = (e) => {
    setTheme(e.target.innerText)
  }

  const handleCount= (e) => {
    setPlayerCount(parseInt(e.target.innerText))
  }

  const handleGrid = (e) => {
    if(e.target.innerText === '4x4') {
      setGrid(8)
    } else {
      setGrid(18)
    }
  }



  return (
    <section className='w-400 bg-white p-12 w-[600px] rounded-2xl flex flex-col gap-12 max-[768px]:w-full max-[768px]:p-8 max-[768px]:gap-8 max-[500px]:p-4'>
      {/* select theme */}
      <div>
        <h2 className='text-blueText text-2xl font-semibold mb-2 max-[768px]:text-xl'>Select Theme</h2>
        <div>
          <button style={{backgroundColor: `${theme === 'Numbers' ? '#304859' : '#bcced9'}`}} onClick={(e)=> handleTheme(e)} className='text-xl font-semibold text-lightText p-4 w-[48%] mr-4 rounded-full transition-all duration-300 hover:bg-grayBlueHover max-[768px]:text-lg max-[768px]:p-2 max-[500px]:w-[45%]'>Numbers</button>
          <button style={{backgroundColor: `${theme === 'Icons' ? '#304859' : '#bcced9'}`}} onClick={(e)=> handleTheme(e)} className='text-xl font-semibold text-lightText p-4 w-[48%] rounded-full transition-all duration-300 hover:bg-grayBlueHover max-[768px]:text-lg max-[768px]:p-2 max-[500px]:w-[45%]'>Icons</button>
        </div>
      </div>
      {/* numbers of players*/}
      <div>
        <h2 className='text-blueText text-2xl font-semibold mb-2 max-[768px]:text-xl'>Numbers of Players</h2>
        <div className='flex'>
          <button style={{backgroundColor: `${playerCount === 1 ? '#304859' : '#bcced9'}`}} onClick={(e)=> handleCount(e)} className='text-xl font-semibold text-lightText p-4 w-[48%] mr-4 rounded-full max-[768px]:text-lg max-[768px]:p-2'>1</button>
          <button style={{backgroundColor: `${playerCount === 2 ? '#304859' : '#bcced9'}`}} onClick={(e)=> handleCount(e)} className='text-xl font-semibold text-lightText p-4 w-[48%] mr-4 rounded-full transition-all duration-300 hover:bg-grayBlueHover max-[768px]:text-lg max-[768px]:p-2'>2</button>
          <button style={{backgroundColor: `${playerCount === 3 ? '#304859' : '#bcced9'}`}} onClick={(e)=> handleCount(e)} className='text-xl font-semibold text-lightText p-4 w-[48%] mr-4 rounded-full transition-all duration-300 hover:bg-grayBlueHover max-[768px]:text-lg max-[768px]:p-2'>3</button>
          <button style={{backgroundColor: `${playerCount === 4 ? '#304859' : '#bcced9'}`}} onClick={(e)=> handleCount(e)} className='text-xl font-semibold text-lightText p-4 w-[48%] rounded-full transition-all duration-300 hover:bg-grayBlueHover max-[768px]:text-lg max-[768px]:p-2'>4</button>
        </div>
      </div>
      {/* grid size*/}
      <div>
        <h2 className='text-blueText text-2xl font-semibold mb-2 max-[768px]:text-xl'>Grid Size</h2>
        <div>
          <button style={{backgroundColor: `${grid === 8 ? '#304859' : '#bcced9'}`}} onClick={(e)=> handleGrid(e)} className='text-xl font-semibold text-lightText p-4 w-[48%] mr-4 rounded-full max-[768px]:text-lg max-[768px]:p-2 max-[500px]:w-[45%]' >4x4</button>
          <button style={{backgroundColor: `${grid === 18 ? '#304859' : '#bcced9'}`}} onClick={(e)=> handleGrid(e)} className='text-xl font-semibold text-lightText p-4 w-[48%] rounded-full transition-all duration-300 hover:bg-grayBlueHover max-[768px]:text-lg max-[768px]:p-2 max-[500px]:w-[45%]'>6x6</button>
        </div>
      </div>
      <Link to='/game' className='bg-orange text-xl text-center font-semibold text-lightText p-4 w-full rounded-full transition-all duration-300 hover:opacity-80 max-[768px]:text-lg max-[768px]:p-2'>start game</Link>
    </section>
  )
}

export default StartModule
