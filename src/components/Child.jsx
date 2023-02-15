import React from 'react'

const Child = (props) => {
    const {setCount} = props;
    return (
    <>
        <div className='child'>Child</div>
        <button onClick={()=>setCount(1)}>1</button>
        <button onClick={()=>setCount(2)}>2</button>
        <button onClick={()=>setCount(3)}>3</button>
    </>
    )
}

export default Child