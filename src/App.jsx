import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './components/Quiz'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Quiz name="Static Quiz App"/>
     </div>
     <div>
    <Question
    capital1="Berlin"
    capital2="Marbid"
    capital3="Paris"
    capital4="Lisbon"
    />
    </div>

    <div>
      <Question2 
      dev1="Google"
      dev2="Facebook"
      dev3="Microsoft"
      dev4="Apple"
      />
    </div>

    <div>
      <Question3
      prog1="Python"
      prog2="Java"
      prog3="JavaScript"
      prog4="C++"
      />
    </div>
    </>
  )
}

export default App
