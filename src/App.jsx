import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from "./components/Layout/index.jsx";
import Home from './components/Home/index.jsx';
import Project from './components/Project/index.jsx';
import Contacts from './components/Contact/index.jsx';
import About from './components/About/index.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='fortuneCodeHub-react-1/' element={<Home />} />
        <Route path='fortuneCodeHub-react-1/projects' element={<Project />} />
        <Route path='fortuneCodeHub-react-1/contact' element={<Contacts />} />
        <Route path="fortuneCodeHub-react-1/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
