import React from 'react'
//passin data form child component to parent component
const Page2 = (props) => {
    const {funct2} = props;

    const handleClick = () =>{
        const count = 5;
        funct2(count+1);
    }
  return (
    <div>
        <button onClick={handleClick}>Click me 2</button>
    </div>
  )
}

export default Page2;