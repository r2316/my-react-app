import React, { useRef,useState } from "react";

export default function Item2(){
    let itemref= useRef()
    const [itemsArray,setItemsArray]=useState([])
    const [ui,setui]=useState()
    let btnref=useRef()
    let olddataref = useRef()

    let addItem=()=>
    {
      if(btnref.current.value=="add")
      {
        let item={itemname: itemref.current.value}
        itemsArray.push(item)
      }
      else
      {
        let index = itemsArray.findIndex((i)=>i.itemname==olddataref.current.value)
        itemsArray[index].itemname=itemref.current.value
      }
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
     let editItem=(iname)=>
        {
          btnref.current.value="update"
          itemref.current.value=iname
          olddataref.current.value=iname
        }



    let showItems=()=>
    {
        let x=itemsArray.map((item)=>{
        return<tr><td>{item.itemname}</td>

       <td><input type="button" className="border-2 bg-red-400 text-white p-1" value="edit" 
        onClick={()=>editItem(item.itemname)} /></td>

        <td><input type="button" className="border-2 bg-red-400 text-white p-1" value="delete" 
        onClick={()=>deleteItem(item.itemname)} /></td></tr>


      })
        setui(x)
    }

return(
    <div>
        <div>Enter Item Name: <input type="text" ref={itemref} className="border-2" ></input>
        <input type="text" ref={olddataref} className="hidden"></input>
        <br></br>
        <br></br>
        <input type="button" value="Add Item" onClick={()=>addItem()} className="border-2 p-2 bg-blue-300" ref={btnref}></input></div>
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


/*import React, { useRef, useState } from "react";

export default function Item2() {
  let itemRef = useRef();
  let priceRef = useRef(); 
  const [itemsArray, setItemsArray] = useState([]);
  const [ui, setUi] = useState();

  let addItem = () => {
    let item = {
      itemname: itemRef.current.value,
      price: priceRef.current.value, 
    };
    setItemsArray([itemsArray, item]); 
    itemRef.current.value = "";
    priceRef.current.value = "";
    showItems();
  };

  let showItems = () => {
    let x = itemsArray.map((item, index) => (
      <tr key={index}>
        <td>{item.itemname}</td>
        <td>{item.price}</td>
      </tr>
    ));
    setUi(x);
  };

  return (
    <div>
      <div>
        Enter Item Name: <input type="text" ref={itemRef} className="border-2" />
        <br /><br></br>
        Enter Price: <input type="text" ref={priceRef} className="border-2" />
        <br />
        <br />
        <input
          type="button"
          value="Add Item"
          onClick={() => addItem()}
          className="border-2 p-2 bg-blue-300"
        />
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{ui}</tbody>
      </table>
    </div>
  );
}*/
