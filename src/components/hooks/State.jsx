import { useState } from "react";

export const State = ()=>{
    // let value=0;
    let [count,setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(()=>count++);
    }
    return (
        <>
            <h1>{count}</h1>
            <button className="px-2 py-2 rounded-full bg-slate-600 text-stone-800"
            onClick={handleButtonClick}>Increment</button>
        </>
    );
}