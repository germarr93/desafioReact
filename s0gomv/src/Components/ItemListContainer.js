import React, { useEffect } from "react";
import { productos } from "../Mock/Productos";
import ItemList from "./ItemList";
const ItemListContainer = ({title}) =>
{
    //llama a una api externa.
    useEffect(()=>
    {
        const [items,setItems]=useState([]);//inicia arrart vacio

        const traigoProd = new Promise((res,rej) =>{
            setTimeout(()=>
            {
                res(productos);
            },2000)
        })
        //    console.log(traigoProd)         
    }, []);
    traigoProd
    
    .then((datos)=>
    {
      setItems(datos);
    })
     //catch por si existe error

     .catch((error) =>{
            console.log(error);
     } )
    return(
    <>
    <h1>{title}</h1>
    Observa tu carrito por interes
    
     <ItemList items={items}/>   
        </>
    )
};
export default ItemListContainer;