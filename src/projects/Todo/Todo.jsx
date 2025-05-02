import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";

export const Todo = () =>{
    const [task,setTask]=useState(()=>getLocalStorageTodoData());

    
    const handleFormSubmit  =  (inputValue) => {
        const{id,content,checked} = inputValue; // destructuring 

        if(!content)return ;
        // if(task.includes(content))// search task including array exists
        // {
        //     return;
        // }
        const ifTodoMatched = task.find((currTask)=> currTask.content === content);
        if(ifTodoMatched) return ;
        setTask((prev)=> [...prev,{id,content,checked}]);

        //todo list store in local system
        setLocalStorageTodoData(task);
    }
    //todo Date & Time


    //todo delete Task
    const handleDeleteTask = (value) => {
        const deleteList = task.filter((currTask)=>currTask.content !== value);
        // localStorage.setItem(TodoKey, JSON.stringify(deleteList));
        setTask(deleteList);
    }

    //todo clearAll Task list

    const handleClearTask = ()=>{
        console.log("data");
        setTask([]);
    }

    // todo list check & uncheck
    const handleCheckTask = (index) =>{
        const updateTask = task.map((currTask)=>{
            if(index === currTask.content){
                return {...currTask,checked:!currTask.checked};
            }
            else{
                return currTask;
            }
        });
        console.log(updateTask);
        setTask(updateTask);
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
                                    <TodoList 
                                    key={curTask.id} 
                                    index={index} 
                                    data={curTask.content} 
                                    checked={curTask.checked}
                                    handleDeleteTodo={handleDeleteTask} 
                                    handleCheckedTodo={handleCheckTask}/>
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