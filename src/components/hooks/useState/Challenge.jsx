import { useState } from "react";

export const Challenge = () => {

    const [count,setCount] = useState(0);
    const [step,setStep]= useState(0);
    const handleIncrement = () =>{
        setCount(count+step);
    }
    const handleDecrement = ()=>{
        setCount(count-step);
    }
    const handleReset = ()=>{
        setCount(0);
    }
    return (
        <>
        <p className="bg-red-500 text-pretty text-white rounded-xl mt-2 pb-1">
            Count : <span className="bg-gray-500">{count}</span></p>
        <div>
            <label>
                <input type="text" className="border border-gray-400 cursor-pointer" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
            </label>
        </div>
        <div className="gap-2 flex">
            <button onClick={handleIncrement} className="bg-green-400 px-2 py-2 rounded-xl">Increment</button>
            <button onClick={handleDecrement} disabled={count<=0} className="bg-yellow-400 px-2 py-2 rounded-xl">Decrement</button>
            <button onClick={handleReset} className="bg-red-900 px-2 py-2 rounded-xl text-white">Reset</button>
        </div>
        </>
    );
}