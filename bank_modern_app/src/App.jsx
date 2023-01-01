import React from "react"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"

import { Cryptos, WrapHome} from "./components/index.js"

const App = () => {

  return (
    <div>

      <Router>

        <Routes>
          <Route path="/" element={<WrapHome />}/>
        </Routes>

        <Routes>
          <Route path="/home" element={<Cryptos /> }/>
        </Routes>

      </Router>

    </div>
  )
}

export default App
