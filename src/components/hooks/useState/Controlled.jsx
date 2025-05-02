
import { useState } from "react";
export const Controlled = ()=> {
    const [userForm,setUserName] = useState({
        userName:"",
        age:"",
    });

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        /*switch(name)
        {
            case "username":
                setName(value);
                break;
            case "age":
                setAge(value);
                break;
        }*/
        const result = setUserName((prev)=>({ ...prev,[name]:value}));
        console.log(result);
        
    }
    const handelFormSubmit= (event)=>{
        event.preventDefault();
        // console.log(document.querySelector('#inputValue').value);
        // console.lof(setUserName((prev)=>({ ...prev,[name]:value})));

    }
    return (
        <>
        <form onSubmit={handelFormSubmit}>
            <div className="">
                <input type="text" placeholder="Enter your name" className="border border-black px-1 py-1" value={userForm.userName} 
                id="inputValue" onChange={handleInputChange} name="userName" /> <br/><br/>
                <input type="number" placeholder="Enter your Age" className="border border-black px-1 py-1" value={userForm.age} name="age" onChange={handleInputChange}/>
            </div>
            <button className="px-2 py-2 text-white bg-gray-800 rounded-lg">Form Submit</button>
            </form>
        </>
    );
};