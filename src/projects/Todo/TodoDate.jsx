import { useEffect, useState } from "react";

export const TodoDate= () =>{
    const [currDateTime,setDateTime] =  useState("");
    useEffect(()=>{
        const interval = setInterval(()=>{
            const now = new Date();
            const formateDate = now.toLocaleDateString();
            const formatTime = now.toLocaleTimeString();
    
            setDateTime(`${formateDate} - ${formatTime}`);
        },1000);
        return ()=> clearInterval(interval);
    },[]);
    
    return (
        <h3 className="text-stone-950 font-bold text-center">{currDateTime}</h3>
    );
}