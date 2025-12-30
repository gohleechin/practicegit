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
          <h2>Version 1.1<span id="feature-a">-Feature A1</span></h2>
          <h2>Version 1.1<span className='Feature-B'>-Feature B1</span></h2>
          <h2>Version 1.0<span className='Feature-C'>-Feature C</span></h2>
          <h2>Version 1.0<span className='Feature-D'>-Feature D</span></h2>
          <h2>Version 1.1<span className='Feature-E'>-Feature E</span></h2>
        </div>
      </div>
  )
}

export default App
