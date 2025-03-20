
import React from 'react'
import { Link } from 'react-router'
import Products from './Products';

export default function UserHome(props) {
    // userLogin={userlogin} setuserlogin={setuserlogin}
let userLogin = props.userLogin;

console.log(props)
let d = {userLogin:userLogin}
//   props.setuserlogin(true)
  return (
    <div><nav>
        {/* <Products userLogi={userLogin}></Products> */}
        <li><Link to= "/products" state={d} > Products </Link></li>
        <li>Cart</li>
        <li>your orders</li>
        <li>profile</li>
        
        {/* <li></li> */}
        </nav></div>
  )
}
