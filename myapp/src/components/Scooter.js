//add n number of hook states

import { useState } from "react";

function Scooter(){

   //const [color,setColor]= useState("red")
   //const [brand,setBrand]= useState("honda")
   //const [model,setmodel]= useState("2020")

   //use multiple obj via one state 
   const [scooter,setScooter]= useState(
    {
       color:"red",
       brand:"honda",
       model:"2020",
   }
)

    return <>
    <h1>my scooter</h1>
    {/* <p>color:{color}</p>
    <p>brand:{brand}</p>
    <p>model:{model}</p> */}
    <p>color:{scooter.color}</p>
    <p>brand:{scooter.brand}</p>
    <p>model:{scooter.model}</p>
    </>

}

export default Scooter;