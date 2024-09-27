
//without dependancies
/* import {React,useEffect,useState} from 'react'

function Usseeff() {
  const [count,setCount]=useState(0);

  useEffect(() => {
    document.title=`${count} new messages`;
  });
  return (
    <div>
      <h1>{count} new messages</h1>
      <button onClick={() => setCount(count+1)}>increase</button>
    </div>
  )
}

export default Usseeff; */

//with empty array
import {React,useEffect,useState} from 'react'
import { useMyHooks } from './customHooks';

/* function Usseeff() {
  const [count,setCount]=useState(0);

  useEffect(() => {
    document.title=`${count} new messages`;
  }, []);
  return (
    <div>
      <h1>{count} new messages</h1>
      <button onClick={() => setCount(count+1)}>increase</button>
    </div>
  )
}

export default Usseeff; */

//with variables
/* function Usseeff() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(5);

  useEffect(() => {
    document.title = `${otherCount} new messages`;
  }, [otherCount]);

  return (
    <div>
      <h1>{count} new messages</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h1>{otherCount} other counts</h1>
      <button onClick={() => setOtherCount(otherCount + 5)}>Increase by 5</button>
    </div>
  );
}

export default Usseeff; */


//useeffect cleanup functions


function Usseeff() {

 
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('run effect',count);

    return()=> {
      console.log('clean up',count);
    };
  },[count]);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>increase</button>
    </div>
  );
}

export default Usseeff;

