import React from 'react'

const DisplayContent = (props) => {
    const {search,lessThan,greaterThan} = props;
  return (
    <div>
        <p>DisplayContent</p>
        <p>Search : {search}</p>
        <p>greater than : {greaterThan}</p>
        <p> less than : {lessThan}</p>
    </div>
  )
}

export default DisplayContent