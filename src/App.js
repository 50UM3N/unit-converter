import React, { useState } from "react";
import Temp from "./Components/Temp";
export default function App() {
    const [current, setCurrent] = useState("Volume");
    const [options] = useState([
        "Area",
        "Data Transfer Rate",
        "Digital Storage",
        "Energy",
        "Frequency",
        "Fuel Economy",
        "Length",
        "Mass",
        "Plane Angle",
        "Pressure",
        "Speed",
        "Temperature",
        "Time",
        "Volume",
    ]);
    const setValue = (e) => {
        setCurrent(e.target.value);
    };
    return (
        <>
            <select value={current} onChange={setValue}>
                {options.map((option) => {
                    return (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
            <Temp />
        </>
    );
}
