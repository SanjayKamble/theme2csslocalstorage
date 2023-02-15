import React from 'react';
import { useState } from 'react';
import Child from './Child';

const Example2 = () => {
    const [count, setCount] = useState();
    return (
        <div className='parent'>
           <p>Parent Example2 here</p> 
            <p>Count : {count}</p>
            <Child setCount = {setCount}/>
        </div>
    )
}

export default Example2