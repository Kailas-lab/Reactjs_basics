//we use state in func component
import { useState } from "react";

function FavColor(){
    //let color='blue'
    const [color,setColor]=useState('blue')

    return <>
    <h1>My fave color is {color }</h1>
    {/* <button onClick={() => {color='red';}}>change color</button> */}
    <button onClick={() => {setColor('red')}}>change color</button>
    </>
}

export default FavColor;



