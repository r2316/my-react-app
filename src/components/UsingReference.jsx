import React, { useRef } from "react";

export default function UsingReference() {
    let nameref = useRef(" ");
    let pref = useRef();

    let hello = () => {
        let username = nameref.current.value;
        pref.current.innerHTML = "Welcome " + username;
        pref.current.style.backgroundColor = "yellow";
    };

    return (
        <div>
            <p>Enter your name: <input type="text" ref={nameref} /></p>
            <input type="button" value="Click here" onClick={hello} />
            <p ref={pref}></p>
        </div>
    );
}
