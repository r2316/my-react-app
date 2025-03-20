import React from "react";

export default function Logout(props){
    return(
        <div className='flex flex-col justify-center align-middle items-center gap-2 w-1/2 mx-auto bg-blue-400 text-white p-8'>
            <input type="button" className='bg-yellow-300 p-4 w-32'
            value="logout" onClick={()=>props.setuserlogin(false)}/>
        </div>
    )
    
}