import React from 'react'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';

/*const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/signup',
    element:<Signup/>
  },
]);*/
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>

      
    </div>
  )
}

export default App
