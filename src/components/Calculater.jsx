import React from "react";

export default function Calculater({ a, b, op }) {
    //export default function calculater(props){
    //let a= props.a
    //let b= props.b
    //let op=props.op
    //let result = 0;
  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Cannot divide by zero";
      default:
        return "Invalid operator";
    }
  };

  return (
    //<div> result: {result}{/div}3
    
    <div>
      <h1>Calculator</h1>
      <p>
        {a} {op} {b} = {calculate(a, b, op)}
      </p>
      
    </div>
  );
}




