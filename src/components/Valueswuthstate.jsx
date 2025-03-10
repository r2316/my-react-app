import React , { useState } from 'react'
export default function Valueswuthstate(){
    const [n,setn]=useState(0)
    const[name,setname]=useState(" ")
    const[cname,setcname]=useState("yellow")
    return(
        <div style={{backgroundColor:cname,height:"100dvh"}}>
            <div>
                <input type="color" onChange={(e)=> setcname(e.target.value)}></input>
            </div>
            <div>
                Enter name: <input type="text" onBlue={(e)=> setname(e.target.value)}></input>
            </div>
            <div> Welcome{name}</div>
            <div>Enter any no : 
                <input type="text" onChange={(e)=> setn(parseInt(e.target.value))}></input>
            </div>
            <div className='text-2xl'>square of {n } is {n*n} </div>
        </div>
    )
}


              