import React from 'react'

import Home from './components/home'
import Tours from './components/tours'
import Agency from './components/agency'
import Login from './components/login'
import Wheather from './components/wheather'
import Navbar from './components/navbar'
import Post from './components/post'
import { BrowserRouter , Routes , Route } from "react-router-dom"
import { DeleteTours } from './components/deletetours'
import { UpdateTours } from './components/updateTours'
import { Add } from './components/Add'
import Map from './components/map'




export default function App() {
  return (
 
    <BrowserRouter>
    
<Navbar/>


    <div>
    <Routes>
        <Route  exact path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/Agency" element={<Agency />} />
        <Route path="/Wheather" element={<Wheather />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/DeleteTours" element={<DeleteTours />} />
        <Route path="/UpdateTours" element={<UpdateTours/>} />
        <Route path="/Add" element={<Add/>} />
        <Route path="/Map" element={<Map/>} />

        

    </Routes>
     
    </div>
   </BrowserRouter>
   
  );
}