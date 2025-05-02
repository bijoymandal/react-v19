import { useEffect, useState } from "react";

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [date,setDate] = useState(0);
    useEffect(()=>{
        console.log("Hello useEffect",count);
        setInterval(()=>{
            const updateDate = new Date();
            setDate(updateDate.toLocaleTimeString());
        },1000);
    },[count]);
    return (
        <div>
            <h1>Hello , Use Effect</h1>
            <h1></h1>
            <p>{count}Date:{date}</p>
            <button onClick={()=>setCount(count+1)} className="bg-green-500 px-2 py-2 rounded-lg">Increment</button>
        </div>
    );
}

export default UseEffect;