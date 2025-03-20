import React, { useState } from 'react';
import Starfield from "react-starfield";

export default function UseReftable() {
    const [i, setI] = useState(0);  
    const [table, setTable] = useState([]); 

    const handleInputChange = (e) => {
        setI(e.target.value);  
    };
    const generateTable = () => {
        let result = [];
        for (let j = 1; j <= 10; j++) 
        {
            result.push(i + ' x ' + j + ' = ' + i * j);
    
        }
        setTable(result);  
    };

    return (
        <>
            <div className="h-[550px] w-full bg-black text-white text-3xl text-center ">
                <h1>Table</h1>
                
               
                <input 
                    type="number" 
                    value={i} 
                    onChange={handleInputChange} 
                    className="border-2 p-2 m-2" 
                    placeholder="Enter a number" 
                />
                
                <input 
                    type="button" 
                    value="Table" 
                    className="border-2 p-2 m-2" 
                    onClick={generateTable} 
                />
                
               
                <div>

                        <div>
                            {table.map((entry, index) => (
                                <li key={index} className="text-xl">{entry}</li>
                            ))}
                        </div>
                </div>
            </div>
            <div className="w-full">
                <Starfield starCount={5000}
                starColor={[255,255,255]}
                speedFactor={0.05}
                backgroundColor="black">

                </Starfield>
            </div>
        </>
    );
}
