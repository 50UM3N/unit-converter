import React, { memo, useState } from "react";
import Select from "./InputSelectRow";
import GenIfElse from "./GenIfElse";

export default memo(function Energy() {
    // this is the list you have to write
    const [options] = useState([]);

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
            <p>Energy</p>
            <div>
                <Select
                    amount={toAmount}
                    handleInput={handleInputFrom}
                    handleSelect={handleSelectFrom}
                    options={options}
                    selectedValue={select[0]}
                />
            </div>
            <div>
                <Select
                    amount={fromAmount}
                    handleInput={handleInputTo}
                    handleSelect={handleSelectTo}
                    options={options}
                    selectedValue={select[1]}
                />
            </div>
            <GenIfElse options={options} />
        </>
    );
});
