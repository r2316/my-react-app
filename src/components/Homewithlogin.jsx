
import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'
import UserHome from './UserHome'

export default function Homewithlogin() {
    const [userlogin,setuserlogin]=useState(false)
let ui=<div className="flex flex-col justify-center align-middle 
items-center 
gap-2 w-1/2 mx-auto bg-blue-900 text-white p-8">
   <UserHome userLogin={userlogin} setuserlogin={setuserlogin} >
    </UserHome><Logout  setuserlogin={setuserlogin}></Logout></div>
  return (
    <div>
      
    {/* <p>Current value of userLogin is : {userlogin.toString()}</p> */}
    {userlogin?ui:<Login setuserlogin={setuserlogin}></Login>}
    </div>
  )
}
