import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div id="root">
        <div className='Header'>
          <h2>Practice Git</h2>
          <h2>by Goh Lee Chin</h2>
        </div>
        <div className="Body">
          <h2>Version 1.1<span id="feature-a">Feature A</span></h2>
          
        </div>
      </div>
  )
}

export default App
