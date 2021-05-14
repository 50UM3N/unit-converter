import React, { memo, useState } from "react";
import Select from "./InputSelectRow";
import GenIfElse from "./GenIfElse";

export default memo(function FuelEconomy() {
    // this is the list you have to write
    const [options] = useState([
        "Miles per gallon",
        "Miles per gallon (Imperial)",
        "Kilometer per liter",
        "Liter per 100 kilometers",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState([
        "Kilometer per liter",
        "Miles per gallon",
    ]);
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
        if (
            unit1 === "Miles per gallon" &&
            unit2 === "Miles per gallon (Imperial)"
        )
            data = data * 1.20095;
        else if (
            unit1 === "Miles per gallon" &&
            unit2 === "Kilometer per liter"
        )
            data = data / 2.35215;
        else if (
            unit1 === "Miles per gallon" &&
            unit2 === "Liter per 100 kilometers"
        )
            data = 235.215 / data;
        else if (
            unit1 === "Miles per gallon (Imperial)" &&
            unit2 === "Miles per gallon"
        )
            data = data / 1.20095;
        else if (
            unit1 === "Miles per gallon (Imperial)" &&
            unit2 === "Kilometer per liter"
        )
            data = data / 2.82481;
        else if (
            unit1 === "Miles per gallon (Imperial)" &&
            unit2 === "Liter per 100 kilometers"
        )
            data = 282.481 / data;
        else if (
            unit1 === "Kilometer per liter" &&
            unit2 === "Miles per gallon"
        )
            data = data * 2.35215;
        else if (
            unit1 === "Kilometer per liter" &&
            unit2 === "Miles per gallon (Imperial)"
        )
            data = data * 2.82481;
        else if (
            unit1 === "Kilometer per liter" &&
            unit2 === "Liter per 100 kilometers"
        )
            data = 100 / data;
        else if (
            unit1 === "Liter per 100 kilometers" &&
            unit2 === "Miles per gallon"
        )
            data = 235.215 / data;
        else if (
            unit1 === "Liter per 100 kilometers" &&
            unit2 === "Miles per gallon (Imperial)"
        )
            data = 282.481 / data;
        else if (
            unit1 === "Liter per 100 kilometers" &&
            unit2 === "Kilometer per liter"
        )
            data = 100 / data;
        if (data == Infinity) return "";
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
            <p>FuelEconomy</p>
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
            <GenIfElse options={options} />
        </>
    );
});
