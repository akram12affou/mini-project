import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Auth from './Components/Auth'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     <Header/>
         <Routes>
           <Route element={<Home/>} path='/'/>
           <Route element={<Auth/>} path='/auth'/>
         </Routes>
     </BrowserRouter>
  </React.StrictMode>,
)
