import React from "react";
import PropExample from "../PropExample";
import Page2 from "../PropExample/page2";


const Child = () =>{
    return (
        <p>Child here</p>
    )
}

function FunctionalBasedComponents(){

    function increment(value){
        console.log(value);
    }

    function parentComponentFunction(){
        console.log("Parent commponents function here")
    }

   
    return (
        <div>
            <Child/>
            functional component here
            <PropExample func1 = {parentComponentFunction} data="data as prop" flag = {false}/>
            <Page2 funct2={increment}/>
        </div>
    )
}

export default FunctionalBasedComponents;