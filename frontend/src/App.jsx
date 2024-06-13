import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import CreateBook from './pages/createBooks'
import EditBook from './pages/editBook'
import DeleteBook from './pages/deleteBook'
import ShowBook from './pages/showBook'

export default function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element={<CreateBook/>}/>
    <Route path='/books/details/:id' element={<ShowBook/>}/>
    <Route path='/books/edit/:id' element={<EditBook/>}/>
    <Route path='/books/delete/:id' element={<DeleteBook/>}/>
   </Routes>
  )
}
