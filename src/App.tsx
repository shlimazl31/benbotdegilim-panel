import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './theme'
import Home from './pages/Home'
import Commands from './pages/Commands'
import Features from './pages/Features'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Invite from './pages/Invite'
import Support from './pages/Support'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh" display="flex" flexDirection="column">
          <Navbar />
          <Box flex="1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/commands" element={<Commands />} />
              <Route path="/features" element={<Features />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/invite" element={<Invite />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
