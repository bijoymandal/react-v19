import { useState } from "react";
import PropTypes from "prop-types";


export const TodoForm = ({onAddTodo}) => {

    //Todo props function validation
    const [inputValue,setInputValue]= useState({}); //initial state , updated state
    // console.log(onAddTodo);
    TodoForm.propTypes = {
        onAddTodo : PropTypes.func.isRequired
    }
    

    const handleInputChange = (value) =>{
        setInputValue({id:value,content:value,checked:false});
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(inputValue);
        console.log(inputValue);
        setInputValue({id:"",content:"",checked:false});
    }

    

    return (
        <>
            <section className="form justify-center">
                                <form onSubmit={handleFormSubmit}>
                                    <div>
                                        <input type="text" className="todo-input border pl-3 border-gray-900 rounded-full focus:text-gray-500
                                        " autoComplete="off" value={inputValue.content} onChange={(event)=>handleInputChange(event.target.value)}/>
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-green-700 text-center text-white dark:text-gray-700 px-3 py-1 rounded-full border-1 border-slate-700">Add Task</button>
                                    </div>
                                </form>
                            </section>
        </>
    ); 
} 