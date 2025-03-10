import React from "react";
 export default function Calc(){
    let aref = useRef()
    let bref = useRef()
    let resultref=useRef()
    let calculate=(op)=>
    {
        let a=parseInt(aref.current.value)
        let b=parseInt(bref.current.value)
        switch (op)
        {
            case "+":
                resultref.current.innerHTML="sum is "+(a+b)
            break;
            case "-":
                resultref.current.innerHTML="Diff is "+(a-b)
            break;
            case "*":
                resultref.current.innerHTML="mul is "+(a*b)
            break;
            case "/":
                resultref.current.innerHTML="div is "+(a/b)
            break;
        }
    }

    return(
        <div>
            <p>Enter a: <input type="text" ref = {aref}></input></p>
            <p>Enter b: <input type="text" ref = {bref}></input></p>
            <p>
                <input type="button" value="+" onClick={()=> calculate('+')}></input>
                <input type="button" value="-" onClick={()=> calculate('-')}></input>
                <input type="button" value="*" onClick={()=> calculate('*')}></input>
                <input type="button" value="/" onClick={()=> calculate('/')}></input>
            </p>
            <p ref={resultref}>
                
            </p>
        </div>
    )
 }