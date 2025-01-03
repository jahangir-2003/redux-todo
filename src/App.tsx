import React from 'react'
import { Link, Route, Routes } from "react-router-dom"

import Counter from './Counter.tsx'
import Todos from './Todo/Todos.tsx'
const App = () => {

  return (
    <>
      <nav className="flex flex-row justify-center h-10 text-2xl capitalize gap-4 underline mb-6">
        <Link to="/">counter</Link>
        <Link to="todos">todos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  )
}

export default App