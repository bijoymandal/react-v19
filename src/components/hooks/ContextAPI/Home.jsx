import { useContext } from "react";
import { UserContext } from ".";


export const Home = () => {
    const name = useContext(UserContext);
    return (
        <div>
            <h2>Context API Home Component</h2>
            {`My name is ${name.name}`} <br />
            {`and ${name.age}`} <br />
            {`  Profession is ${name.profession}`}
        </div>
    );
}