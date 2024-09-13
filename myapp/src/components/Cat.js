import Dog from './Dog';
import Apple from './Apple';

function Cat(){
     //const brand="german"
  //const Color="black"
  const DogInfo = { brand: "german", Color: "Black" }

    return (
      <div>
         <h2>i am cat</h2>
         {/* <Dog brand={brand} Color={'Black'} /> */} 
         <Dog DogInfo={DogInfo}/>
         
         <Apple/>         {/*we have to import dog component because cat doesnt know dog*/}
      </div>
    );
  }

export default Cat;