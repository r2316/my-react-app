import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/AboutMe'
import boyimg from './assets/img/e2.jpg'
import Workingwithevent from './components/Workingwithevent'
import Workingincrement from './components/Workingincrement'
import Workingincrementfive from './components/Workingincrementfive'
import Calculater from './components/Calculater'
import UsingReference from './components/UsingReference'
import UsingReferencename from './components/UsingReferencename'
import Calc from './components/Calc'
import ElectBill from './components/ElectBill'
import ValuesWuthState from './components/Valueswuthstate'
import Task1 from './components/Task1'
import ItemTable from './components/Item'
import Item2 from './components/Item2'
import Taskitem from './components/Taskitem'
import{Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import{ faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'


function App() {
  

  return (
    <>
  
   
<Navbar>
  
</Navbar>
<Routes>
<Route path='/productdetails/:pid' element={<ProductDetails></ProductDetails>}></Route>
<Route path='/products' element={<Products></Products>}></Route>
<Route path="/" element={<Homewithlogin></Homewithlogin>}></Route>
<Route path="/login" element={<login></login>}></Route>
<Route path="logout" element={<Logout></Logout>}></Route>
<Route path="/home" element={<Home></Home>}></Route>
<Route path="/About" element={<About></About>}></Route>
<Route path="Project" element={<Project></Project>}></Route>
<Route path="/Workingfive" element={<Workingfive></Workingfive>}></Route>
<Route path="/UserReftable" element={<UseReftable></UseReftable>}></Route>
<Route path="/Statecolor" element={<Statecolor></Statecolor>}></Route>


  <Route path="/Item2" element={<Item2></Item2>}></Route>
  <Route path="/Valueswuthstate" element={<ValuesWuthState></ValuesWuthState>}></Route>
</Routes>


{/*<footer style={{backgroundColor:"grey", height:"50px", width:"100%",display:"flex",alignItems:"center"}}>
        <span style={{color:"black", fontSize:"20px",textAlign:"left",paddingLeft:"10px"
            ,alignItems:"center"}}>Designed and Developed by Riya Patel</span>
        <span style={{color:"black", fontSize:"20px",marginLeft:"300px"}}>Copyright © 2025 SB</span>
        
    <span  style={{color:"black", fontSize:"20px",marginLeft:"300px" ,gap:"5px"}}>
    <a href="https://github.com/r2316/rpatel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          
    </span>
    </footer>*/}
   
    {/*} <AboutMe userimg={boyimg}
    
     usename="john Capner"
     summary = "You can also directly specify the project name and the template you want to use via additional command line options. "
     skills={["HTML","CSS","CSS3","TAILWIND"]}></AboutMe>
      <UsingReference></UsingReference>
    <UsingReferencename></UsingReferencename>
    <Calculater a={100} b={20} op= "+"></Calculater>
    <Calculater a={100} b={20} op= "-"></Calculater>
    <Calculater a={100} b={20} op= "*"></Calculater>
    <Calculater a={100} b={20} op= "/"></Calculater>

<Task1></Task1>

    <Workingwithevent></Workingwithevent>
    <Workingincrement></Workingincrement>
    <Workingincrementfive></Workingincrementfive>
    <ElectBill></ElectBill>
    <ValuesWuthState></ValuesWuthState>
     <ItemTable></ItemTable>
     
      <Link to="/Item2">Item2</Link>
    <Link to="/Valueswuthstate">Valueswuthstate</Link>*/}
    
    </>
  )
}

import { Form, HashRouter } from 'react-router'
import { Link } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Workingfive from './components/Workingfive'
import UseReftable from './components/UserReftable'
import Statecolor from './components/Statecolor'
import Homewithlogin from './components/Homewithlogin'
import Logout from './components/Logout'
import login from './components/Login'


export default App
