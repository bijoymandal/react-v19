import { createContext } from "react";
// import { BioContext } from "../useContext/BioProvider";

//1st step
const UserContext = createContext();

//2nd step
const BioProvider = ({ children }) => {
    const name = "Bijoy Mandal";
    const age = 29;
    const profession = "Web Developer";
    return (
        <UserContext.Provider value={{ name, age, profession }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, BioProvider };




