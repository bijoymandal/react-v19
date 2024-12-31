import { MdOutlineCheckCircleOutline,MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

export const TodoList = ({index,data,checked,handleDeleteTodo,handleCheckedTodo}) => {


    //Todo props validation 
    

    return (
        <>
        <div className="bg-gray-700 flex flex-col gap-4 items-center justify-center">
            <a className="rounded-sm w-1/2 flex items-center bg-white shadow p-3 gap-5 m-1  hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
                <div className="flex items-center space-x-2">
                    { index+1} &nbsp;
                    <button 
                        type="button" 
                        className="bg-green-700 text-white shadow-md rounded-lg border-none"
                        onClick={()=>handleCheckedTodo(data)}>
                    <MdOutlineCheckCircleOutline />
                    </button>
                    <button type="button" className="bg-red-700 text-white shadow-md rounded-lg border-none" onClick={()=>handleDeleteTodo(data)}>
                    <MdDelete />
                    </button>
                </div>
                <div className="flex-1 space-x-3">
                    <p className="text-blue-600 font-semibold space-y-3">
                       <span className={checked ? 'line-through': ''}> {data} </span>
                    </p>
                </div>
            </a>
        </div>
        </>
    );
};
