export const EventHandling =() =>{

    // function handleButtonClick(){
    //     alert('hii');
    // }

    const handleButtonClick = (event) =>{
        console.log(event);
        alert("hii");
    }; 

    return (
        <>
            <button onClick={handleButtonClick} className="bg-slate-300 text-gray px-2 py-2 rounded-full cursor-pointer">Click me</button>
            <button onClick={(event)=>handleButtonClick(event)} className="bg-slate-300 text-gray px-2 py-2 rounded-full cursor-pointer">Click me 2 </button>
        </>
    );
};