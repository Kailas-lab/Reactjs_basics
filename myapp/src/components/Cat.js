import Dog from './Dog';
import Apple from './Apple';

function Cat(){
    return (
      <div>
         <h2>i am cat</h2>
         <Dog /> 
         <Apple/>         {/*we have to import dog component because cat doesnt know dog*/}
      </div>
    );
  }

export default Cat;