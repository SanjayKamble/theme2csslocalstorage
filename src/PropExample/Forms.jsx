import React,{useState} from 'react'

const Forms = () => {

    const [state,setState]=useState({name:'',age:0});

    function handleSubmit(event){
        event.preventDefault();
    }

    function handleNameChange(event){
        // console.log(event.target);
        const {value} = event.target;

        setState(prevState=>({
            formData:{
                ...prevState.formData,
                name : value
            }
        }))

    }

    function handleAgeChange(event){
        // console.log(event.target);
        const {value} = event.target;

        setState(prevState=>({
            formData:{
                ...prevState.formData,
                age : value
            }
        }))
    }

    // console.log(state.formData);
 
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' name='name' value={state.name} onChange={handleNameChange}/>
                {/* <input type="number" placeholder='age' name='age' value={state.age} onChange={handleAgeChange}/> */}
                <button aria-label='submit' type='submit'>Submit</button>
            </form>
    </div>
  )
}

export default Forms