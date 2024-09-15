//for css(external styling import sheet),
import './Header.css';

//for css(inline styling), use camelcase for css objects

function Header(){
    const myStyle={
      color:"red",
      backgroundColor:"green",
      padding:"10px"
    }
    return <>
    {/* <h1 style={{color:"red",backgroundColor:"green"}}>hello styling</h1> */}
    <h1 style={myStyle}>hello styling</h1>
    <p>add style</p>
    </> 
}

export default Header;