import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Navigation from './components/Navigation'
import Contexts from './Contexts'
import Home from './pages/Home'
const App = () => {
  return (
    <Router>
      <Contexts>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Contexts>
    </Router>
  )
}

export default App
