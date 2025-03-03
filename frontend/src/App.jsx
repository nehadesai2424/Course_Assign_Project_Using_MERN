import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Course from './components/Course'
import Student from './components/Student'

// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Course></Course>}></Route>
            <Route path={"/students"} element={<Student></Student>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
