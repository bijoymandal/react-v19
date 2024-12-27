import { useState } from "react";
import { MdOutlineCheckCircleOutline,MdDelete } from "react-icons/md";

export const Todo = () =>{
    const [inputValue,setInputValue]= useState(""); //initial state , updated state
    const [task,setTask]=useState([]);
    const [currDateTime,setDateTime] =  useState("");
    const handleInputChange = (value) =>{
        setInputValue(value);
    }
    const handleFormSubmit  =  (event) => {
        event.preventDefault();
        if(!inputValue)return ;
        if(task.includes(inputValue))// search task including array exists
        {
            setInputValue('');
            return;
        }
        setTask((prev)=> [...prev,inputValue]);
        setInputValue("");
    }
    //todo Date & Time

    setInterval(()=>{
        const now = new Date();
        const formateDate = now.toLocaleDateString();
        const formatTime = now.toLocaleTimeString();

        setDateTime(`${formateDate} - ${formatTime}`);
    },1000);

    return (
        <>
            <section className="todo-container">
                <header>
                    <h1 className="text-zinc-700 font-semibold text-center">Todo Lists</h1>
                    <h3 className="text-stone-950 font-bold text-center">{currDateTime}</h3>
                </header>
                <section className="form justify-center">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input type="text" className="todo-input border pl-3 border-gray-900 rounded-full focus:text-gray-500
                            " autoComplete="off" value={inputValue} onChange={(event)=>handleInputChange(event.target.value)}/>
                        </div>
                        <div>
                            <button type="submit" className="bg-green-700 text-center text-white dark:text-gray-700 px-3 py-1 rounded-full border-1 border-slate-700">Add Task</button>
                        </div>
                    </form>
                </section>
                <section className="myOrderList ">
                        {
                            task.map((curTask,index)=>{
                                return (
                                    <div key={index} className="bg-gray-700 flex flex-col gap-4 items-center justify-center">
                                        <a className="rounded-sm w-1/2 flex items-center bg-white shadow p-3 gap-5 m-1  hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
                                            <div className="flex items-center space-x-2">
                                                { index+1} &nbsp;
                                                <MdOutlineCheckCircleOutline />
                                                <MdDelete />
                                            </div>
                                            <div className="flex-1 space-x-3">
                                                <p className="text-blue-600 font-semibold space-y-3">{curTask} Date </p>
                                                
                                            </div>
                                        </a>
                                    </div>
                                );
                            })  
                        }

                </section>
            </section>
        </>
    );
};