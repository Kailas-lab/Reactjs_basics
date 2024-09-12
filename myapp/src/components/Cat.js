import Dog from './Dog';
import Apple from './Apple';

function Cat(){
  const brand="german"
    return (
      <div>
         <h2>i am cat</h2>
         <Dog brand={brand} /> 
         
         <Apple/>         {/*we have to import dog component because cat doesnt know dog*/}
      </div>
    );
  }

export default Cat;