import React from "react";
import Item from "./Item";
  //map usado para manipular el array.
 const ItemList = (items) =>
{   
    return (    
    <>
    {items.map((item) =>{

            //el id utilizado como primary key.
           <Item item ={item} key={item.id}/>
        })}
    </>
    )
  // console.log(items) hecho de prueba.    
}
export default ItemList;