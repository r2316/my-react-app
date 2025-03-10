import React, { useRef } from "react";

export default function UsingReferencename() {
    let nameref = useRef();
    let surnameRef = useRef();
    let contactRef = useRef();
    let pref = useRef();

    let hello = () => {
        let username = nameref.current.value;
        let usersurname = surnameRef.current.value;
        let usercontact = contactRef.current.value;

      
        pref.current.innerHTML = "Welcome " + username + usersurname+"contect is"+ usercontact ;
        pref.current.style.backgroundColor = "lightblue";
    };

    return (
        <div>
            <p>Enter your first name: <input type="text" ref={nameref} /></p>
            <p>Enter your surname: <input type="text" ref={surnameRef} /></p>
            <p>Enter your contact number: <input type="text" ref={contactRef} /></p>
            <input type="button" value="Click here" onClick={hello} />
            <p ref={pref}></p>
        </div>
    );
}
