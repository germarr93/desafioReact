import React from "react";

const Item = ({item}) =>{

    return (
    <div>
           <h3>{item.nombre}</h3>
           <h3>{item.precio}</h3>
           <h3>{item.descripcion}</h3>
           </div>
           )
}
export default Item;