import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddMovie from './pages/addmovie.jsx';
import UpdateMovie from './pages/updatemovie.jsx'
import Movies from './pages/movies.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/add' element={<AddMovie />} />
        <Route path='/update/:id' element={<UpdateMovie />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
