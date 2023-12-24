import { BrowserRouter } from "react-router-dom"
import { useState } from "react";
import { About, Collection, Contact, Experience, Footer, Hero, Navbar } from './components';

const App = () => {

  const [toggle, setToggle] = useState(false);

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-[#3C4142]">
          <Navbar toggle={toggle} setToggle={setToggle}/>
          <div onClick={() => setToggle(false)}>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Hero/>
            </div>
            <About/>
            <Collection/>
            <Experience/>
            <div className="relative z-0">
              <Contact/>
            </div>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
