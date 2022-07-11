import React from 'react'
import Home from './pages'
import Works1 from './pages/Works1'
import Works2 from './pages/Works2'
import Works3 from './pages/Works3'
import Works4 from './pages/Works4'
import Works5 from './pages/Works5'
import Works6 from './pages/Works6'
import Works7 from './pages/Works7'
import Works8 from './pages/Works8'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/Works1' element={<Works1 />} />
        <Route path='/Works2' element={<Works2 />} />
        <Route path="/Works3" element={<Works3 />} />
        <Route path="/Works4" element={<Works4 />} />
        <Route path="/Works5" element={<Works5 />} />
        <Route path="/Works6" element={<Works6 />} />
        <Route path="/Works7" element={<Works7 />} />
        <Route path="/Works8" element={<Works8 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
