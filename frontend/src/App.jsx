import { Navigate, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import AddLog from './pages/Log/AddLog.jsx'
import LogsHistory from './pages/Log/LogsHistory.jsx'
import Profile from './pages/Profile/Profile.jsx'

function App() {

  const isAuthenticated = true;


  return (
  
      <Routes>
        
        {/* Default Routes  */}
        <Route path='/' element={<Login/>} />

        {/* Auth routes  */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        {/* Protected Routes (for later) */}

        <Route path='/dashboard' element={isAuthenticated ? <Dashboard/> : <Navigate to="/login"/> } />
        <Route path='/add-log' element={isAuthenticated ? <AddLog/> : <Navigate to="/login"/>} />
        <Route
          path="/logs"
          element={isAuthenticated ? <LogsHistory  /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />



      </Routes>
  
  )
}

export default App
