import React from 'react';
import DisplayContent from './DisplayContent';
import useFilter from './Filters';

const Example3 = () => {
    const {render,search,lessThan,greaterThan} = useFilter();
  return (
    <div>
        <p>Parent</p>
        <DisplayContent {...{search,lessThan,greaterThan}}/>
        {render}
    </div>
  )
}

export default Example3