// import { useState } from 'react'
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Provider from "./providers/Provider";
// Huvudfilen som ansvarar för routning och komponentstruktur.


function App() {
  return (
    <Provider> 
      {/* Centraliserad kontext för att dela data mellan komponenter */}
      <div className="center-container">
        <Router>
          <NavBar />
          <main>
            <Routes>
              {/* Definierar applikationens olika sidor med routning */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </Router>
      </div>  
    </Provider>
  )
}

export default App
