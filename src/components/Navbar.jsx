import React  from "react"
import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import{faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {faCloud}from "@fortawesome/free-solid-svg-icons";
export default function Navbar(){
    return(


<div>
<nav class="bg-black h:[50px]"  >
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
       
        <span class="self-center text-3xl font-semibold whitespace-nowrap text-orange-500">RP.</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-ld md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          < Link to="/" class="block py-2 px-3 text-white text-xl hover:text-orange-700rounded-sm md:bg-transparent
           md:text-white-700 md:p-0  md:dark:text-white-500  md:hover:text-orange-700"
            aria-current="page">
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home</Link>
        </li>
        <li>
            <Link to="/about" class="block py-2 px-3 text-white rounded-sm
           hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-xl
            md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
             dark:hover:bg-gray-700 dark:hover:text-white
              md:dark:hover:bg-transparent">
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon> About</Link>
        </li>
        <li>
          <Link to= "/project" class="block py-2 px-3 text-white rounded-sm text-xl
           hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 
           md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
            dark:hover:text-white md:dark:hover:bg-transparent">
              <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon> Project
        </Link>
        </li>

        <li>
                <Link
                  to="/Workingfive"
                  className="block py-2 px-3 text-white rounded-sm text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <FontAwesomeIcon icon={faCloud} /> Workingfive
                </Link>
              </li>

        <li>
                <Link
                  to="/UserReftable"
                  className="block py-2 px-3 text-white rounded-sm text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <FontAwesomeIcon icon={faCloud} /> Table
                </Link>
              </li>

              <li>
                <Link
                  to="/Statecolor"
                  className="block py-2 px-3 text-white rounded-sm text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <FontAwesomeIcon icon={faCloud} /> color
                </Link>
              </li>
       
              <li>
                <Link
                  to="/Homewithlogin"
                  className="block py-2 px-3 text-white rounded-sm text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <FontAwesomeIcon icon={faCloud} /> login
                </Link>
              </li>

              <li>
                <Link
                  to="/Products"
                  className="block py-2 px-3 text-white rounded-sm text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <FontAwesomeIcon icon={faCloud} /> products
                </Link>
              </li>
      </ul>
    </div>
  </div>
  
</nav>
</div>
)
}
