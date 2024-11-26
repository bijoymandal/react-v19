export const EventProps = () =>{

    const HandleWelcomeUser=(user)=>{
        alert(`hey,${user}`);
    };

    const handleHover=()=>{
        alert('hey i am hover me');
    };
    return (
        <>
            <WelcomeUser onClick={()=>HandleWelcomeUser('click')} onMouseEnter={handleHover}/>
        </>
    );
}


const WelcomeUser = (props) =>{
    const {onClick,onMouseEnter} =props;
    const handleGreeting = ()=>{
        console.log(`Hey! Use Welcome`);
        onClick();
    };
    return(
        <>
        <button onClick={onClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greetings</button>
        </>
    );
}