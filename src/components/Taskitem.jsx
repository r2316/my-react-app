import React, { useRef,useState } from "react";
export default function Taskitem(){
    let itemref= useRef()
    let priceref=useRef()
    let categoryref=useRef()
    let Queantityref=useRef()

    let categories=["Electronics","Toys","Groceries","Clothing"]
    let categoriesUI = categories.map((c)=><option value={c}>{c}</option>)
    const [itemsArray,setItemsArray]=useState([])
    const [ui,setui]=useState()
    let btnref=useRef()
    let olddataref=useRef()

    let addItem=()=>
    {
        if(btnref.current.value=="Add")
        {
            let item=
            {itemname: itemref.current.value,quantity:Queantityref.current.value,
              category:categoryref.current.value,price:priceref.current.value
            }
        itemsArray.push(item)
        }
    else
    {
        let index=itemsArray.findIndex((i)=>i.itemname==olddataref.current.value)
        itemsArray[index].itemname=itemref.current.value
        itemsArray[index].category=categoryref.current.value
        itemsArray[index].quantity=Queantityref.current.value
        itemsArray[index].price=priceref.current.value
    }
    itemref.current.value=""
    priceref.current.value=""
    Queantityref.current.value=""
    showItems()
}

    let deleteItem=(iname)=>
      {
        alert(iname)
        let index = itemsArray.findIndex((i)=> i.itemname==iname)
        itemsArray.splice(index,1)
        showItems()
      } 
      let editItem=(item)=>
      {
        btnref.current.value="update"
        itemref.current.value=item.itemname;
        priceref.current.value=item.price
        categoryref.current.value=item.category
        Queantityref.current.value=item.quantity

        olddataref.current.value=item.itemname;
      }

    let showItems=()=>
    {
        let x=itemsArray.map((item)=>{
        return<tr><td>{item.itemname}</td>
        <td>{item.price}</td>
        <td>{item.cetegory}</td>
        <td>{item.quantity}</td>

        <td><input type="button" className="border-2 bg-red-400 text-white p-1" value="edit" 
        onClick={()=>editItem(item)} /></td>

        <td><input type="button" className="border-2 bg-red-400 text-white p-1" value="delete" 
        onClick={()=>deleteItem(item.itemname)} /></td>
        
        </tr>
      })
        setui(x)
    }

return(
    <div>
        <div>Enter Item Name: <input type="text" ref={itemref} className="border-2" ></input></div>
        <div>Price: <input type="text" ref={priceref} className="border-2" ></input></div>
        <div>Category:
          <select ref={categoryref} className="border-2">
            {categoriesUI}

          </select>
          
          <div>quantity:<input type="number" ref={Queantityref} className="border-2"></input></div>
      <input type="text" ref={olddataref} className="hidden" />

        <input type="button" value="Add" onClick={()=>addItem()}
         className="border-2 p-2 bg-blue-300" ref={btnref}></input>
        <br></br>
     <table>
            <thead>
                <tr><th>ItemName</th>
                <th>price</th>
                <th>category</th>
                <th>quantity</th></tr>
            </thead>
            <tbody>
                {ui}
            </tbody>
        </table>
   </div>
   </div>
    
 )

}