import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar"
import GameCard from './components/GameCard'
import GameScreen from './components/GameScreen'
import Data from './components/Data'

function App() {
  
  // references to React Hooks - onClicks etc.

  // const [count, setCount] = useState(0)

  /*

   <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

  */

  const game_cards = Data.map(item => {
    return (
      <GameCard
        game_title = {item.game_title}
        game_sub_title = {item.game_sub_title}
        img = {item.img}
      />
    )
  })

  return (
    <>
      <Navbar/>
      <GameScreen/>
      <section className='cards-list'>
        {game_cards}
      </section>
    </>
  )
}

export default App
