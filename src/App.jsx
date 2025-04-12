import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./WebsiteData/data.json";
import Navbar from './components/NavbarComponent/navbar';
import About from './components/AboutComponent/about';
import Experience from './components/ExperienceComponent/experience';

function App() {
  return (
    <>
      <Navbar />
      <About data={data.about}/>
    </>
  )
}

export default App;
