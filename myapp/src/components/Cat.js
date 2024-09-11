import Dog from './Dog';

function Cat(){
    return (
      <div>
         <h2>i am cat</h2>
         <Dog />          //we have to import dog component because cat doesnt know dog
      </div>
    );
  }

export default Cat;