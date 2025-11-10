import { useContext } from "react";
import { UserContext } from ".";
export const Service = () => {
    const info = useContext(UserContext);
    // console.log("services", info);
    return (
        <>
            <h2>Our Services</h2>
            <p>{`Services ${info.name} ${info.age} ${info.profession}`}</p>
        </>
    );
}