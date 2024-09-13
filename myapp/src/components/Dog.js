function Dog(props){

    //const {brand,Color}=props
      //const brand="german"

    //create obj for props
    const {DogInfo} = props;
    const {brand,Color} = DogInfo;



    const text=`hi am ${Color} ${brand} dog!`  //template string for dynamic

    return (
      <h2>{text}</h2>
    );
  }

export default Dog;