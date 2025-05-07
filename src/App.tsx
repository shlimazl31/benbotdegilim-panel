import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" bg="gray.50">
          <Navbar />
          <Box as="main" p={4}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
