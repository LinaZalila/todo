import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Header from './Header'
import Login from './pages/Login'

export default function Router() {
  const [user, setUser] =useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  return (
    <BrowserRouter>
    <Header user={user} setUser={setUser} />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/contact-us" element={<Contact />} />
        {user?<Route path="/todo" element={<App />   } />:<Route path="/login" element={<Login user={user} setUser={setUser} />} />}
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  )
}
