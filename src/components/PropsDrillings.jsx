export const ParentComponent = () => {
    return (
        <>
            <h2>Parent Component</h2>
            <section className="flex flex-col items-center justify-center p-4 tracking-wider text-white bg-gray-900 parent-section h-lvh">
                <h1>Component A</h1>
                <ChildComponent message="Hello from Parent Component!" data="React Js" />
            </section>
        </>
    );
}

const ChildComponent = (props) => {
    console.log("Child Component Props:", props);
    return (
        <div className="p-4 mt-4 border-2 border-white child-component">
            <h2>Hello, I am component B</h2>
            {/* <p>Message: {props.message}</p> */}
            <GrandChildComponent data={props.data} message={props.message} />
        </div>
    );
}

const GrandChildComponent = (props) => {
    return (
        <div className="p-4 mt-4 border-2 border-white child-component">
            <h2>Hello, I am component C</h2>
            {/* <p>Message: {props.message}</p> */}
            <GrandGrandChildComponent data={props.data} message={props.message} />
        </div>
    );
}

const GrandGrandChildComponent = (props) => {
    return (
        <div className="p-4 mt-4 border-2 border-white child-component">
            <h2>Hello, I Love props data {props.data}</h2>
            <p>Message: {props.message}</p>
        </div>
    );
}