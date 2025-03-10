import React, { useState } from 'react';

export default function Workingincrement() {
   
    const [i, setI] = useState(0);

   // let increment()=>
   // {
     //   let x=i;
      //  x++
       // seti(x)
    //}


     // let decrement()=>
   // {
     //   let x=i;
      //  x--;
       // seti(x)
    //}
    
    const increment = () => {
        setI(i + 1);
    };

   
    const decrement = () => {
        setI(i - 1);
    };

    return (
        <>
            <h1>Working with Event</h1>
            <div>
                <input type="button" value="+" onClick={increment} />
                {i}
                <input type="button" value="-" onClick={decrement} />
            </div>
        </>
    );
}