import React from 'react'
import Home from "./component/Home"
import {BrowserRouter} from "react-router-dom"

const App = () => {
    return (

        <>
          <BrowserRouter>
          <Home />
          </BrowserRouter>
           
        </>


    )
}

export default App