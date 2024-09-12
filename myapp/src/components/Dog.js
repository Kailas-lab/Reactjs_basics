function Dog(props){

    const {brand}=props

    //const brand="german"
    const text=`hi am ${brand} dog!`  //template string for dynamic

    return (
      <h2>{text}</h2>
    );
  }

export default Dog;