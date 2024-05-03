//2. useState: Create a simple count component using the useState hook
import React, {useEffect ,useState } from 'react';

  export default function Counter (props ){
        const  [value,setValue] = useState( props.initialCount );

        useEffect(() => {
            localStorage.getItem('value');

            localStorage.setItem('value', value);
            console.log(value)



        }, [value] );//we should write somethin gin dependecy []to log the count 
        //we can use optional return 
        
        
        const incrementValue = () => {
            setValue(value + props.initialCount); 
          }
          
          const decrementValue = () =>{
            setValue(value -props.initialCount);
          }
          
          ;
          
          
          
          return (
            <div>
              <p>Count: {value}</p>
              <button onClick={incrementValue}  >increment</button>
              <button onClick = {decrementValue}>decrement</button>
            </div>
          );
  };

  //3. useEffect and local storage
  //when som epiece of changes happen we use side affect user affect
