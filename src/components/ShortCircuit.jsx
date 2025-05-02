import { useState } from "react";

export const ShortCircuit= ()=>{
    const [isLoggedIn,setIsLoggedIn]= useState(true);
    return (
        <>
            <section>
                <h2>Short Circuiting</h2>
                {isLoggedIn && <p>You are logged In</p>}

                
                <div>
                    <button className="bg-zinc-950 px-2 py-2 text-white rounded-e-full" onClick={()=>setIsLoggedIn(!isLoggedIn)}>Loggle State</button>
                    <button>Set User</button>
                    <button>clear User</button>
                </div>
            </section>
        </>
    );
};