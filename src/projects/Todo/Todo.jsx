import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () =>{
    
    const [task,setTask]=useState([]);


    const handleFormSubmit  =  (inputValue) => {
        
        if(!inputValue)return ;
        if(task.includes(inputValue))// search task including array exists
        {
            return;
        }
        setTask((prev)=> [...prev,inputValue]);
    }
    //todo Date & Time


    //todo delete Task
    const handleDeleteTask = (value) => {
        const deleteList = task.filter((currTask)=>currTask !== value);
        setTask(deleteList);
    }

    //todo clearAll Task list

    const handleClearTask = ()=>{
        console.log("data");
        setTask([]);
    }
    return (
        <>
            <section className="todo-container">
                <header>
                    <h1 className="text-zinc-700 font-semibold text-center">Todo Lists</h1>
                    <TodoDate/>
                </header>
                <TodoForm onAddTodo={handleFormSubmit}/>
                <section className="myOrderList ">
                        {
                            task.map((curTask,index)=>{
                                return (
                                    <TodoList key={index} index={index} data={curTask} handleDeleteTodo={handleDeleteTask}/>
                                );
                            })  
                        }

                </section>
                {
                    task.length>0 && (
                    <section>
                        <button type="button" onClick={handleClearTask} className="bg-red-600 text-center text-black px-2 py-2 rounded-md">
                            Clear All
                        </button>
                    </section>
                    )
                }
            </section>
        </>
    );
};