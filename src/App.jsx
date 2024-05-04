import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

function App() {
  

  return (
    <>
<Router>
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
 
    </Routes>
  </Layout>

</Router>
    </>
  )
}

export default App
