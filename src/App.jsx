import { Outlet } from "react-router-dom"
import Navbar from "./share/navbar/Navbar"


function App() {
 

  return (
    <div className=" max-w-[1280px] mx-auto">
    
      <Outlet></Outlet>
    </div>




  )
}

export default App
