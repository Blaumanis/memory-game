import StartPage from './pages/StartPage'
import GamePage from './pages/GamePage'
import { Routes, Route } from 'react-router-dom'
import GlobalState from './context/GlobalState'

function App() {
  return (
    <div className='app'>
      <GlobalState>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
      </GlobalState>
    </div>
  )
}

export default App
