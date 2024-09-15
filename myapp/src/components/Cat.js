import Dog from './Dog';
import Apple from './Apple';

function Cat(){
     //const brand="german"
  //const Color="black"
  const DogInfo = { brand: "german", Color: "Black" }
    //const DogInfo={}
    const showDogInfo=DogInfo.brand !== undefined && DogInfo.Color !== undefined; 
  const appleInfo={type:"fuji",color:"red"}

  const dogList=[
     { brand: "bmw", Color: "red" },
     { brand: "ferrai", Color: "green" },
     { brand: "benz", Color: "white" }
  ];

  const doorOpen=true;

    return (
      <div>
         <h2>i am cat</h2>
         {/* <Dog brand={brand} Color={'Black'} /> */} 
         {/* <Dog DogInfo={DogInfo}/> */} 

         {/* {DogInfo.brand !== undefined && DogInfo.Color !== undefined ?
          <Dog DogInfo={DogInfo}/> : null } */} 

        { showDogInfo ? <Dog DogInfo={DogInfo}/> : null } 
         
         <Apple appleInfo={appleInfo}/>         {/*we have to import dog component because cat doesnt know dog*/}
         {doorOpen?<h2>Door opened now </h2>: <h2>Door is closed now</h2>}

         <ul>
          {dogList.map((DogInfo) => <li key={DogInfo.brand}><Dog DogInfo={DogInfo}/></li>)}
         </ul>

      </div>
    );
  }

export default Cat;