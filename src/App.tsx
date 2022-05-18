import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import ProtectedRoute from './Routes/ProtectedRoute'
import Navigation from './components/Navigation'
import Contexts from './Contexts'
import Home from './pages/Home'
import Login from './pages/Login'
import ListUsers from './pages/ListUsers'
const App = () => {
  return (
    <Router>
      <Contexts>
        <Navigation />
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/list-users' element={<ListUsers />} />
        </Routes>
      </Contexts>
    </Router>
  )
}

export default App
