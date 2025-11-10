import { useRef } from "react";

export const UseRef = () => {
    const username = useRef(null);
    const password = useRef(null);
    const handelFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={handelFormSubmit}>
                <input type="text" placeholder="username" id="username" ref={username} />
                <br />
                <input type="password" placeholder="password" id="password" ref={password} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}