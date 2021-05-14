import React, { memo, useState } from "react";
import Select from "./InputSelectRow";

export default memo(function Pressure() {
    // this is the list you have to write
    const [options] = useState([
        "Bar",
        "Pascal",
        "Pound per square inch",
        "Standard atmosphere",
        "Torr",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState(["Pascal", "Bar"]);
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
        if (unit1 === "Bar" && unit2 === "Pascal") data = data * 100000;
        else if (unit1 === "Bar" && unit2 === "Pound per square inch")
            data = data * 14.5038;
        else if (unit1 === "Bar" && unit2 === "Standard atmosphere")
            data = data * 0.986923;
        else if (unit1 === "Bar" && unit2 === "Torr") data = data * 750.062;
        else if (unit1 === "Pascal" && unit2 === "Bar") data = data / 100000;
        else if (unit1 === "Pascal" && unit2 === "Pound per square inch")
            data = data / 6894.76;
        else if (unit1 === "Pascal" && unit2 === "Standard atmosphere")
            data = data / 101325;
        else if (unit1 === "Pascal" && unit2 === "Torr") data = data / 133.322;
        else if (unit1 === "Pound per square inch" && unit2 === "Bar")
            data = data * 0.0689476;
        else if (unit1 === "Pound per square inch" && unit2 === "Pascal")
            data = data * 6894.76;
        else if (
            unit1 === "Pound per square inch" &&
            unit2 === "Standard atmosphere"
        )
            data = data / 14.6959;
        else if (unit1 === "Pound per square inch" && unit2 === "Torr")
            data = data * 51.7149;
        else if (unit1 === "Standard atmosphere" && unit2 === "Bar")
            data = data * 1.01325;
        else if (unit1 === "Standard atmosphere" && unit2 === "Pascal")
            data = data * 101325;
        else if (
            unit1 === "Standard atmosphere" &&
            unit2 === "Pound per square inch"
        )
            data = data * 14.6959;
        else if (unit1 === "Standard atmosphere" && unit2 === "Torr")
            data = data * 760;
        else if (unit1 === "Torr" && unit2 === "Bar") data = data / 750.062;
        else if (unit1 === "Torr" && unit2 === "Pascal") data = data * 133.322;
        else if (unit1 === "Torr" && unit2 === "Pound per square inch")
            data = data / 51.7149;
        else if (unit1 === "Torr" && unit2 === "Standard atmosphere")
            data = data / 760;

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
