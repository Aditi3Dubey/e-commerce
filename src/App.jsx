import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Routing from './Pages/Routing'

export default function App() {
  return (
    <div>
      <Navbar/>
      {/* <Routing/> */}
      <Home/>
      <div className="min-h-screen flex flex-col">
  {/* Main content will take up all available space */}
  <main className="flex-grow">
    {/* Your product cards and other content */}
  </main>

  {/* Footer always at the bottom */}
  <Footer />
</div>

    </div>
  )
}

