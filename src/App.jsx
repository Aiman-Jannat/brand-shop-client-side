import { Outlet } from "react-router-dom"
import Navbar from "./components/header/Navbar"
import Home from "./components/home/Home"
import Banner from "./components/header/Banner"
import Footer from "./components/Pages/Footer"


function App() {


  return (
    <>
      <div>
        <Navbar></Navbar>
        
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
