//we use state in class component by use of constructor
import React from "react";
class Classs extends React.Component{
    constructor(){
        super();
        this.state={color:"green"}
    }
render(){
    return <>
    <h1>my color is {this.state.color}</h1>
    <button onClick={
        () => {this.setState({color: "black"})}
        }>color change</button>
    </>
}
}

export default Classs;