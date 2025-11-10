import { forwardRef, useRef, userId } from "react";

export const ForwardRef = () => {
    const username = useRef(null);
    const handelSubmit = (e) => {
        e.preventDefault();
        // alert(`Input Value: ${username.current.value}`);
        console.log(`Input Value: ${username.current.value}`);
    }
    return (
        <div>
            <h2>Forward Ref Component</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Enter something" ref={username} />
                <BeforeReact19Input label="username" ref={username} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


//after React 19
// eslint-disable-next-line react/display-name
// const BeforeReact19Input = forwardRef((props, ref) => {
//     const id = props.label.toLowerCase();
//     return (
//         <>
//             <label htmlFor={id}>{props.label}: </label>
//             <input type="text" id={props.label} ref={ref} />
//         </>
//     );
// });

const BeforeReact19Input = (props) => {
    // console.log("props data", props);
    const id = userId();
    return (
        <>
            <label htmlFor={id}>{props.label}: </label>
            <input type="text" id={id} ref={props.ref} />
        </>
    );
}