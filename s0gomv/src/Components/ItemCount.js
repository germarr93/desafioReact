import React from "react";
import { useEffect } from "react";

export const ItemCount = ({numero}) =>
{

useEffect(() =>{
    console.log('Chequear')
},[numero])

    return (
        <>
        <h2>{ numero} </h2>
   </>
    )
}
export default ItemCount;