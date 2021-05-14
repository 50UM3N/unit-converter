import React, { memo, useState } from "react";
import Select from "./InputSelectRow";

export default memo(function Length() {
    // this is the list you have to write
    const [options] = useState([
        "Kilometer",
        "Meter",
        "Centimeters",
        "Milimeters",
        "Micrometers",
        "Nanometers",
        "Mile",
        "Yard",
        "Foot",
        "Inch",
        "Nutical Mile",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState(["Meter", "Centimeters"]);
    const [isTo, setIsTo] = useState(false);
    const [amount, setAmount] = useState(0);

    const handleInputFrom = (e) => {
        setAmount(e.target.value);
        setIsTo(false);
    };

    const handleInputTo = (e) => {
        setAmount(e.target.value);
        setIsTo(true);
    };

    const handleSelectFrom = (e) => {
        let currentValue = e.target.value;
        let previousValue = select[0];
        if (select[1] === currentValue) {
            setSelect([currentValue, previousValue]);
        } else {
            setSelect([currentValue, select[1]]);
        }
    };

    const handleSelectTo = (e) => {
        let currentValue = e.target.value;
        let previousValue = select[1];
        if (select[0] === currentValue) {
            setSelect([previousValue, currentValue]);
        } else {
            setSelect([select[0], currentValue]);
        }
    };

    // converter function
    const convert = (data) => {
        let unit1, unit2;
        if (isTo) {
            unit1 = select[1];
            unit2 = select[0];
        } else {
            unit1 = select[0];
            unit2 = select[1];
        }
        // calculation section (pest the copy text)

        if (unit1 === "Kilometer" && unit2 === "Meter") data *= 1000;
        else if (unit1 === "Kilometer" && unit2 === "Centimeters")
            data *= 100000;
        else if (unit1 === "Kilometer" && unit2 === "Milimeters") data *= 1e6;
        else if (unit1 === "Kilometer" && unit2 === "Micrometers") data *= 1e9;
        else if (unit1 === "Kilometer" && unit2 === "Nanometers") data *= 1e12;
        else if (unit1 === "Kilometer" && unit2 === "Mile") data /= 1.609344;
        else if (unit1 === "Kilometer" && unit2 === "Yard")
            data *= 1093.613298337;
        else if (unit1 === "Kilometer" && unit2 === "Foot") data *= 3280.839895;
        else if (unit1 === "Kilometer" && unit2 === "Inch") data *= 39370.07874;
        else if (unit1 === "Kilometer" && unit2 === "Nutical Mile")
            data /= 1.852;
        else if (unit1 === "Meter" && unit2 === "Kilometer") data /= 1000;
        else if (unit1 === "Meter" && unit2 === "Centimeters") data *= 100;
        else if (unit1 === "Meter" && unit2 === "Milimeters") data *= 1000;
        else if (unit1 === "Meter" && unit2 === "Micrometers") data *= 1e6;
        else if (unit1 === "Meter" && unit2 === "Nanometers") data *= 1e9;
        else if (unit1 === "Meter" && unit2 === "Mile") data /= 1609.344;
        else if (unit1 === "Meter" && unit2 === "Yard") data *= 1.0936132983;
        else if (unit1 === "Meter" && unit2 === "Foot") data *= 3.280839895;
        else if (unit1 === "Meter" && unit2 === "Inch") data *= 39.3701;
        else if (unit1 === "Meter" && unit2 === "Nutical Mile") data /= 1852;
        else if (unit1 === "Centimeters" && unit2 === "Kilometer")
            data /= 100000;
        else if (unit1 === "Centimeters" && unit2 === "Meter") data /= 100;
        else if (unit1 === "Centimeters" && unit2 === "Milimeters") data *= 10;
        else if (unit1 === "Centimeters" && unit2 === "Micrometers")
            data *= 10000;
        else if (unit1 === "Centimeters" && unit2 === "Nanometers") data *= 1e7;
        else if (unit1 === "Centimeters" && unit2 === "Mile") data /= 160934.4;
        else if (unit1 === "Centimeters" && unit2 === "Yard") data /= 91.44;
        else if (unit1 === "Centimeters" && unit2 === "Foot") data /= 30.48;
        else if (unit1 === "Centimeters" && unit2 === "Inch") data /= 2.54;
        else if (unit1 === "Centimeters" && unit2 === "Nutical Mile")
            data /= 185200;
        else if (unit1 === "Milimeters" && unit2 === "Kilometer") data /= 1e6;
        else if (unit1 === "Milimeters" && unit2 === "Meter") data /= 1000;
        else if (unit1 === "Milimeters" && unit2 === "Centimeters") data /= 10;
        else if (unit1 === "Milimeters" && unit2 === "Micrometers")
            data *= 1000;
        else if (unit1 === "Milimeters" && unit2 === "Nanometers") data *= 1e6;
        else if (unit1 === "Milimeters" && unit2 === "Mile") data /= 1.609344e6;
        else if (unit1 === "Milimeters" && unit2 === "Yard") data /= 914.4;
        else if (unit1 === "Milimeters" && unit2 === "Foot") data /= 304.8;
        else if (unit1 === "Milimeters" && unit2 === "Inch") data /= 25.4;
        else if (unit1 === "Milimeters" && unit2 === "Nutical Mile")
            data /= 1.852e6;
        else if (unit1 === "Micrometers" && unit2 === "Kilometer") data /= 1e9;
        else if (unit1 === "Micrometers" && unit2 === "Meter") data /= 1e6;
        else if (unit1 === "Micrometers" && unit2 === "Centimeters")
            data /= 10000;
        else if (unit1 === "Micrometers" && unit2 === "Milimeters")
            data /= 1000;
        else if (unit1 === "Micrometers" && unit2 === "Nanometers")
            data *= 1000;
        else if (unit1 === "Micrometers" && unit2 === "Mile")
            data /= 1.609344e9;
        else if (unit1 === "Micrometers" && unit2 === "Yard") data /= 914400;
        else if (unit1 === "Micrometers" && unit2 === "Foot") data /= 304800;
        else if (unit1 === "Micrometers" && unit2 === "Inch") data /= 25400;
        else if (unit1 === "Micrometers" && unit2 === "Nutical Mile")
            data /= 1.852e9;
        else if (unit1 === "Nanometers" && unit2 === "Kilometer") data /= 1e12;
        else if (unit1 === "Nanometers" && unit2 === "Meter") data /= 1e9;
        else if (unit1 === "Nanometers" && unit2 === "Centimeters") data /= 1e7;
        else if (unit1 === "Nanometers" && unit2 === "Milimeters") data /= 1e6;
        else if (unit1 === "Nanometers" && unit2 === "Micrometers")
            data /= 1000;
        else if (unit1 === "Nanometers" && unit2 === "Mile")
            data /= 1.609344e12;
        else if (unit1 === "Nanometers" && unit2 === "Yard") data /= 9.144e8;
        else if (unit1 === "Nanometers" && unit2 === "Foot") data /= 3.048e8;
        else if (unit1 === "Nanometers" && unit2 === "Inch") data /= 2.54e7;
        else if (unit1 === "Nanometers" && unit2 === "Nutical Mile")
            data /= 1.852e12;
        else if (unit1 === "Mile" && unit2 === "Kilometer") data *= 1.609344;
        else if (unit1 === "Mile" && unit2 === "Meter") data *= 1609.344;
        else if (unit1 === "Mile" && unit2 === "Centimeters") data *= 160934.4;
        else if (unit1 === "Mile" && unit2 === "Milimeters") data *= 1.609344e6;
        else if (unit1 === "Mile" && unit2 === "Micrometers")
            data *= 1.609344e9;
        else if (unit1 === "Mile" && unit2 === "Nanometers")
            data *= 1.609344e12;
        else if (unit1 === "Mile" && unit2 === "Yard") data *= 1760;
        else if (unit1 === "Mile" && unit2 === "Foot") data *= 5280;
        else if (unit1 === "Mile" && unit2 === "Inch") data *= 63360;
        else if (unit1 === "Mile" && unit2 === "Nutical Mile")
            data /= 1.150779448;
        else if (unit1 === "Yard" && unit2 === "Kilometer")
            data /= 1093.613298337;
        else if (unit1 === "Yard" && unit2 === "Meter") data /= 1.093613298337;
        else if (unit1 === "Yard" && unit2 === "Centimeters") data *= 91.44;
        else if (unit1 === "Yard" && unit2 === "Milimeters") data *= 914.4;
        else if (unit1 === "Yard" && unit2 === "Micrometers") data *= 914400;
        else if (unit1 === "Yard" && unit2 === "Nanometers") data *= 9.144e8;
        else if (unit1 === "Yard" && unit2 === "Mile") data /= 1760;
        else if (unit1 === "Yard" && unit2 === "Foot") data *= 3;
        else if (unit1 === "Yard" && unit2 === "Inch") data *= 36;
        else if (unit1 === "Yard" && unit2 === "Nutical Mile")
            data /= 2025.3718285;
        else if (unit1 === "Foot" && unit2 === "Kilometer") data /= 3280.839895;
        else if (unit1 === "Foot" && unit2 === "Meter") data /= 3.280839895;
        else if (unit1 === "Foot" && unit2 === "Centimeters") data *= 30.48;
        else if (unit1 === "Foot" && unit2 === "Milimeters") data *= 304.8;
        else if (unit1 === "Foot" && unit2 === "Micrometers") data *= 304800;
        else if (unit1 === "Foot" && unit2 === "Nanometers") data *= 3.048e8;
        else if (unit1 === "Foot" && unit2 === "Mile") data /= 5280;
        else if (unit1 === "Foot" && unit2 === "Yard") data /= 3;
        else if (unit1 === "Foot" && unit2 === "Inch") data *= 12;
        else if (unit1 === "Foot" && unit2 === "Nutical Mile")
            data /= 6076.1154;
        else if (unit1 === "Inch" && unit2 === "Kilometer") data /= 39370.7874;
        else if (unit1 === "Inch" && unit2 === "Meter") data /= 39.37;
        else if (unit1 === "Inch" && unit2 === "Centimeters") data *= 2.54;
        else if (unit1 === "Inch" && unit2 === "Milimeters") data *= 25.4;
        else if (unit1 === "Inch" && unit2 === "Micrometers") data *= 25400;
        else if (unit1 === "Inch" && unit2 === "Nanometers") data *= 2.54e7;
        else if (unit1 === "Inch" && unit2 === "Mile") data /= 63360;
        else if (unit1 === "Inch" && unit2 === "Yard") data /= 36;
        else if (unit1 === "Inch" && unit2 === "Foot") data /= 12;
        else if (unit1 === "Inch" && unit2 === "Nutical Mile") data /= 72913;
        else if (unit1 === "Nutical Mile" && unit2 === "Kilometer")
            data *= 1.852;
        else if (unit1 === "Nutical Mile" && unit2 === "Meter") data *= 1852;
        else if (unit1 === "Nutical Mile" && unit2 === "Centimeters")
            data *= 185200;
        else if (unit1 === "Nutical Mile" && unit2 === "Milimeters")
            data *= 1.852e6;
        else if (unit1 === "Nutical Mile" && unit2 === "Micrometers")
            data *= 1.852e9;
        else if (unit1 === "Nutical Mile" && unit2 === "Nanometers")
            data *= 1.852e12;
        else if (unit1 === "Nutical Mile" && unit2 === "Mile") data *= 1.15078;
        else if (unit1 === "Nutical Mile" && unit2 === "Yard") data *= 2025.37;
        else if (unit1 === "Nutical Mile" && unit2 === "Foot") data *= 6076.12;
        else if (unit1 === "Nutical Mile" && unit2 === "Inch") data *= 72913.4;

        // end calculation section
        if (data > 100000) data = data.toExponential(4);
        else if (data < 99999 && data > 0.000001)
            data = Number(data.toFixed(6));
        return data;
    };

    // actual logic that convert the values
    let toAmount, fromAmount;
    if (amount !== "") {
        if (isTo) {
            fromAmount = amount;
            toAmount = convert(amount);
        } else {
            toAmount = amount;
            fromAmount = convert(amount);
        }
    } else {
        toAmount = amount;
        fromAmount = amount;
    }

    return (
        <>
            <div className="converter-control">
                <div className="input-select-row">
                    <Select
                        amount={toAmount}
                        handleInput={handleInputFrom}
                        handleSelect={handleSelectFrom}
                        options={options}
                        selectedValue={select[0]}
                    />
                </div>
                <div className="equal">=</div>
                <div className="input-select-row">
                    <Select
                        amount={fromAmount}
                        handleInput={handleInputTo}
                        handleSelect={handleSelectTo}
                        options={options}
                        selectedValue={select[1]}
                    />
                </div>
            </div>
            <p className="formula-wrapper">
                <span className="formula-logo">Formula</span>{" "}
                <span className="formula">
                    multiply the length value by 100
                </span>
            </p>
        </>
    );
});
