import React, { useState } from 'react';

export default function Statecolor() {
    const [color, setcolor] = useState("purple");

    return (
        <div style={{ backgroundColor: color, height: '100vh' }}>
            Statecolor
            <div className='flex'>
                <div className='h-6 w-6 bg-red-400 border-2 border-white' 
                    onClick={() => setcolor('red')}></div>
                <div className='h-6 w-6 bg-blue-400 border-2 border-white' 
                    onClick={() => setcolor('blue')}></div>
                <div className='h-6 w-6 bg-green-400 border-2 border-white' 
                    onClick={() => setcolor('green')}></div>
                <div className='h-6 w-6 bg-orange-400 border-2 border-white' 
                    onClick={() => setcolor('orange')}></div>
                <div className='h-6 w-6 bg-purple-400 border-2 border-white' 
                    onClick={() => setcolor('purple')}></div>
                     <div className='h-6 w-6 bg-pink-400 border-2 border-white' 
                    onClick={() => setcolor('pink')}></div>
            </div>
        </div>
    );
}
