import {useState} from "react";
import PropTypes from "prop-types";

export const LiftingState = () => {
    const [inputValue,setInputValue] = useState("");
    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
            <DisplayComponent inputValue={inputValue}/>
        </>
    );
};

const InputComponent = ({inputValue,setInputValue}) =>{
    // const [inputValue,setInputValue] = useState("");
    return(
        <>
            <input type="text" 
            value={inputValue} 
            placeholder="enter your name" 
            onChange={(e)=>setInputValue(e.target.value)}/>
        </>
    );
}

InputComponent.propTypes = {
    inputValue: PropTypes.string.isRequired,    // inputValue is a required string
    setInputValue: PropTypes.func.isRequired,   // setInputValue is a required function
};
const DisplayComponent = ({inputValue}) => {
    return <p>The current input value is : {inputValue}</p>
}

DisplayComponent.propTypes = {
    inputValue: PropTypes.string.isRequired,    // inputValue is a required string
};