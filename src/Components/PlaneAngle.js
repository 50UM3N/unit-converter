import React, { memo, useState } from "react";
import Select from "./InputSelectRow";

export default memo(function PlaneAngle() {
    // this is the list you have to write
    const [options] = useState([
        "Degree",
        "Gradian",
        "Milliradian",
        "Minute of arc",
        "Radian",
        "Second of arc",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState(["Degree", "Radian"]);
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
        if (unit1 === "Degree" && unit2 === "Gradian") data *= 200 / 180;
        else if (unit1 === "Degree" && unit2 === "Milliradian")
            data *= (1000 * Math.PI) / 180;
        else if (unit1 === "Degree" && unit2 === "Minute of arc") data *= 60;
        else if (unit1 === "Degree" && unit2 === "Radian")
            data *= Math.PI / 180;
        else if (unit1 === "Degree" && unit2 === "Second of arc") data *= 3600;
        else if (unit1 === "Gradian" && unit2 === "Degree") data *= 180 / 200;
        else if (unit1 === "Gradian" && unit2 === "Milliradian")
            data *= (100 * Math.PI) / 200;
        else if (unit1 === "Gradian" && unit2 === "Minute of arc") data *= 54;
        else if (unit1 === "Gradian" && unit2 === "Radian")
            data *= Math.PI / 200;
        else if (unit1 === "Gradian" && unit2 === "Second of arc") data *= 3240;
        else if (unit1 === "Milliradian" && unit2 === "Degree")
            data *= 180 / (1000 * Math.PI);
        else if (unit1 === "Milliradian" && unit2 === "Gradian")
            data *= 200 / (1000 * Math.PI);
        else if (unit1 === "Milliradian" && unit2 === "Minute of arc")
            data *= (60 * 180) / (1000 * Math.PI);
        else if (unit1 === "Milliradian" && unit2 === "Radian") data /= 1000;
        else if (unit1 === "Milliradian" && unit2 === "Second of arc")
            data *= (3600 * 180) / (1000 * Math.PI);
        else if (unit1 === "Minute of arc" && unit2 === "Degree") data /= 60;
        else if (unit1 === "Minute of arc" && unit2 === "Gradian") data /= 54;
        else if (unit1 === "Minute of arc" && unit2 === "Milliradian")
            data *= (1000 * Math.PI) / (60 * 180);
        else if (unit1 === "Minute of arc" && unit2 === "Radian")
            data *= Math.PI / (60 * 180);
        else if (unit1 === "Minute of arc" && unit2 === "Second of arc")
            data *= 60;
        else if (unit1 === "Radian" && unit2 === "Degree")
            data *= 180 / Math.PI;
        else if (unit1 === "Radian" && unit2 === "Gradian")
            data *= 200 / Math.PI;
        else if (unit1 === "Radian" && unit2 === "Milliradian") data *= 1000;
        else if (unit1 === "Radian" && unit2 === "Minute of arc")
            data *= (180 * 60) / Math.PI;
        else if (unit1 === "Radian" && unit2 === "Second of arc")
            data *= (3600 * 180) / Math.PI;
        else if (unit1 === "Second of arc" && unit2 === "Degree") data /= 3600;
        else if (unit1 === "Second of arc" && unit2 === "Gradian") data /= 3240;
        else if (unit1 === "Second of arc" && unit2 === "Milliradian")
            data *= (1000 * Math.PI) / (180 * 3600);
        else if (unit1 === "Second of arc" && unit2 === "Minute of arc")
            data /= 60;
        else if (unit1 === "Second of arc" && unit2 === "Radian")
            data *= Math.PI / (3600 * 180);

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
