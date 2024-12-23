
import { useState } from "react";
import "./ToggleSwitch.css";
import { HiOutlineSwitchVertical,HiOutlineMinusCircle,HiOutlinePlusCircle } from "react-icons/hi";

export const ToggleSwitch = () =>{
    const [isOn,SetIsOn] = useState(false);

    const handleToggleSwitch = () =>{
        SetIsOn(!isOn);
    }; 
    return (
        <>
            <h4>Switch Icons <HiOutlineSwitchVertical/></h4>
            <div className="toggle-switch" style={{ backgroundColor: isOn ? "#4caf30":"off" }} onClick={handleToggleSwitch}>
                <div className={`switch ${isOn ? "on":"off"}`} >
                    <span className="switch-state text-stone-600">{isOn ? <HiOutlinePlusCircle/>:<HiOutlineMinusCircle/>}</span>
                </div>
            </div>
        </>
    );
};