import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Best_sellers from './components/Best-sellers/Best_sellers'
import Location from './components/Location/Location'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Best_sellers />
      <Location />
      <Footer />
    </div>
  )
}

export default App