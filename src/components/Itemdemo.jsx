import React, { useRef,useState } from "react";
export default function Item2(){
    let itemref= useRef()
    const [itemsArray,setItemsArray]=useState([])
    const [ui,setui]=useState()

    let addItem=()=>
    {
        let item={itemname: itemref.current.value}
        itemsArray.push(item)
        itemref.current.value=""
        showItems()
    }

    let deleteItem=(iname)=>
      {
        alert(iname)
        let index = itemsArray.findIndex((i)=> i.itemname==iname)
        itemsArray.splice(index,1)
        showItems()
      } 



    let showItems=()=>
    {
        let x=itemsArray.map((item)=>{
        return<tr><td>{item.itemname}</td>
        <td><input type="button" className="border-2 bg-red-400 text-white p-1" value="delete" 
        onClick={()=>deleteItem(item.itemname)} /></td></tr>
      })
        setui(x)
    }

return(
    <div>
        <div>Enter Item Name: <input type="text" ref={itemref} className="border-2" ></input>
        <br></br>
        <br></br>
        <input type="button" value="Add Item" onClick={()=>addItem()} className="border-2 p-2 bg-blue-300"></input></div>
        <br></br>
     <table>
            <thead>
                <tr><th>ItemName</th></tr>
            </thead>
            <tbody>
                {ui}
            </tbody>
        </table>
    </div>
 )

}
