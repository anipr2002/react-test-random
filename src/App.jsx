import { useState } from 'react'
import './App.css'
import Animation from './components/Animation'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className='absolute flex items-center justify-center scale-50'>
          <Animation/>
      </div>
    </div>
  )
}

export default App
