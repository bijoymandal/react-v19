export const EventPropagation = ()=>{

    const handleGrandParent = ()=>{
        console.log('Grand Parent Click');
    }

    const handleParentClick = ()=>{
        console.log('Parent Click');
    }
    const handleChildClick = (event)=>{
        console.log(event);
        event.stopPropagation();
        console.log('children Click');
    }

    return(
        <>
            <section>
                <div onClickCapture={handleGrandParent}>
                    <div onClick={handleParentClick}>
                        <button onClick={handleChildClick}>child Div</button>
                    </div>
                </div>
            </section>

            <div>
            </div>
        </>
    );
}