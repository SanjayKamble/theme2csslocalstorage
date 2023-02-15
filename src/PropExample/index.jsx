import React from 'react'
//passing data from parent to child component
const PropExample = (props) => {



  console.log(props);
  const { data, flag, func1 } = props;
  return (
    <div>
      {
        // flag && data
        flag ? data : "flag is false"
      }

      {/* Prop Example here */}

      <button onClick={func1}>Click me</button>
    </div>
  )
}

export default PropExample