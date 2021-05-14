import React, { memo, useState } from "react";
import Select from "./InputSelectRow";

export default memo(function Speed() {
    // this is the list you have to write
    const [options] = useState([
        "Miles per hour",
        "Foot per second",
        "Meter per second",
        "Kilometer per hour",
        "Knot",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState(["", ""]);
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
        if (unit1 === "Miles per hour" && unit2 === "Foot per second")
            data = data * 1.46667;
        else if (unit1 === "Miles per hour" && unit2 === "Meter per second")
            data = data / 2.23694;
        else if (unit1 === "Miles per hour" && unit2 === "Kilometer per hour")
            data = data * 1.60934;
        else if (unit1 === "Miles per hour" && unit2 === "Knot")
            data = data * 0.868976;
        else if (unit1 === "Foot per second" && unit2 === "Miles per hour")
            data = data * 0.681818;
        else if (unit1 === "Foot per second" && unit2 === "Meter per second")
            data = data * 0.3048;
        else if (unit1 === "Foot per second" && unit2 === "Kilometer per hour")
            data = data * 1.09728;
        else if (unit1 === "Foot per second" && unit2 === "Knot")
            data = data * 0.592484;
        else if (unit1 === "Meter per second" && unit2 === "Miles per hour")
            data = data * 2.23694;
        else if (unit1 === "Meter per second" && unit2 === "Foot per second")
            data = data * 3.28084;
        else if (unit1 === "Meter per second" && unit2 === "Kilometer per hour")
            data = data * 3.6;
        else if (unit1 === "Meter per second" && unit2 === "Knot")
            data = data * 1.94384;
        else if (unit1 === "Kilometer per hour" && unit2 === "Miles per hour")
            data = data * 0.621371;
        else if (unit1 === "Kilometer per hour" && unit2 === "Foot per second")
            data = data * 0.911344;
        else if (unit1 === "Kilometer per hour" && unit2 === "Meter per second")
            data = data / 3.6;
        else if (unit1 === "Kilometer per hour" && unit2 === "Knot")
            data = data / 1.852;
        else if (unit1 === "Knot" && unit2 === "Miles per hour")
            data = data * 1.15078;
        else if (unit1 === "Knot" && unit2 === "Foot per second")
            data = data * 1.68781;
        else if (unit1 === "Knot" && unit2 === "Meter per second")
            data = data * 0.514444;
        else if (unit1 === "Knot" && unit2 === "Kilometer per hour")
            data = data * 1.852;

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
