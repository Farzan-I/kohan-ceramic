import { BrowserRouter } from "react-router-dom"

import { About, Collection, Contact, Experience, Hero, Navbar } from './components';

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-[#3C4142]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          <Collection/>
          <Experience/>
          <div className="relative z-0">
            <Contact/>
          </div>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
  )
}

export default App
