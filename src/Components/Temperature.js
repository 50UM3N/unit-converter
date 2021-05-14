import React, { useState } from "react";
import Select from "./InputSelectRow";

export default React.memo(function Temp() {
    const [options] = useState(["Celsius", "Fahrenheit", "Kelvin"]);
    const [select, setSelect] = useState(["Celsius", "Fahrenheit"]);
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

    const convert = (data) => {
        let unit1, unit2;
        if (isTo) {
            unit1 = select[1];
            unit2 = select[0];
        } else {
            unit1 = select[0];
            unit2 = select[1];
        }
        if (unit1 === "Celsius" && unit2 === "Fahrenheit")
            data = (data * 9) / 5 + 32;
        else if (unit1 === "Celsius" && unit2 === "Kelvin") data += 273.15;
        else if (unit1 === "Fahrenheit" && unit2 === "Celsius")
            data = ((data - 32) * 5) / 9;
        else if (unit1 === "Fahrenheit" && unit2 === "Kelvin")
            data = ((data - 32) * 5) / 9 + 273.15;
        else if (unit1 === "Kelvin" && unit2 === "Celsius")
            data = data - 273.15;
        else if (unit1 === "Kelvin" && unit2 === "Fahrenheit")
            data = ((data - 273.15) * 9) / 5 + 32;

        return data;
    };
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
