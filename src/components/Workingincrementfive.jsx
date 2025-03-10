import React, { useState } from 'react';

export default function Workingincrement() {
    const [i, setI] = useState(0);

    const increment = () => {
        setI(i + 5);  
    };

    const decrement = () => {
        setI(i - 5);  
    };

    return (
        <>
            <h1>Working with Event</h1>
            <div>
                <input type="button" value="+5" className='border-2 p-2' onClick={increment} />
                {i}
                <input type="button" value="-5" className='border-2 p-2' onClick={decrement} />
            </div>
        </>
    );
}
