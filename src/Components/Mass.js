import React, { memo, useState } from "react";
import Select from "./InputSelectRow";

export default memo(function Mass() {
    // this is the list you have to write
    const [options] = useState([
        "Tonnes",
        "Kilogram",
        "Gram",
        "Milligram",
        "Microgram",
        "Imperial ton",
        "US ton",
        "Stone",
        "Pound",
        "Ounce",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState(["Kilogram", "Gram"]);
    const [isTo, setIsTo] = useState(false);
    const [amount, setAmount] = useState(0);

    const handleInputFrom = (e) => {
        setAmount(Number(e.target.value));
        setIsTo(false);
    };

    const handleInputTo = (e) => {
        setAmount(Number(e.target.value));
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
        if (unit1 === "Tonnes" && unit2 === "Kilogram") data *= 1000;
        else if (unit1 === "Tonnes" && unit2 === "Gram") data *= 1e6;
        else if (unit1 === "Tonnes" && unit2 === "Milligram") data *= 1e9;
        else if (unit1 === "Tonnes" && unit2 === "Microgram") data *= 1e12;
        else if (unit1 === "Tonnes" && unit2 === "Imperial ton") data /= 1.016;
        else if (unit1 === "Tonnes" && unit2 === "US ton") data *= 1.10231131;
        else if (unit1 === "Tonnes" && unit2 === "Stone") data *= 157.4730444;
        else if (unit1 === "Tonnes" && unit2 === "Pound") data *= 2204.622621;
        else if (unit1 === "Tonnes" && unit2 === "Ounce") data *= 35274;
        else if (unit1 === "Kilogram" && unit2 === "Tonnes") data /= 1000;
        else if (unit1 === "Kilogram" && unit2 === "Gram") data *= 1000;
        else if (unit1 === "Kilogram" && unit2 === "Milligram") data *= 1e6;
        else if (unit1 === "Kilogram" && unit2 === "Microgram") data *= 1e9;
        else if (unit1 === "Kilogram" && unit2 === "Imperial ton")
            data /= 1016.046916657;
        else if (unit1 === "Kilogram" && unit2 === "US ton") data /= 907.18474;
        else if (unit1 === "Kilogram" && unit2 === "Stone") data /= 350293181;
        else if (unit1 === "Kilogram" && unit2 === "Pound") data *= 2.20462262;
        else if (unit1 === "Kilogram" && unit2 === "Ounce") data *= 35.274;
        else if (unit1 === "Gram" && unit2 === "Tonnes") data /= 1e6;
        else if (unit1 === "Gram" && unit2 === "Kilogram") data /= 1000;
        else if (unit1 === "Gram" && unit2 === "Milligram") data *= 1000;
        else if (unit1 === "Gram" && unit2 === "Microgram") data *= 1e6;
        else if (unit1 === "Gram" && unit2 === "Imperial ton") data /= 1.016e6;
        else if (unit1 === "Gram" && unit2 === "US ton") data /= 907184.74;
        else if (unit1 === "Gram" && unit2 === "Stone") data /= 6350;
        else if (unit1 === "Gram" && unit2 === "Pound") data /= 453.592374495;
        else if (unit1 === "Gram" && unit2 === "Ounce") data /= 28.349523125;
        else if (unit1 === "Milligram" && unit2 === "Tonnes") data /= 1e9;
        else if (unit1 === "Milligram" && unit2 === "Kilogram") data /= 1e6;
        else if (unit1 === "Milligram" && unit2 === "Gram") data /= 1000;
        else if (unit1 === "Milligram" && unit2 === "Microgram") data *= 1000;
        else if (unit1 === "Milligram" && unit2 === "Imperial ton")
            data /= 1.016e9;
        else if (unit1 === "Milligram" && unit2 === "US ton")
            data /= 9.0718474e8;
        else if (unit1 === "Milligram" && unit2 === "Stone") data /= 6.35e6;
        else if (unit1 === "Milligram" && unit2 === "Pound") data /= 453592.37;
        else if (unit1 === "Milligram" && unit2 === "Ounce") data /= 28350;
        else if (unit1 === "Microgram" && unit2 === "Tonnes") data /= 1e12;
        else if (unit1 === "Microgram" && unit2 === "Kilogram") data /= 1e9;
        else if (unit1 === "Microgram" && unit2 === "Gram") data /= 1e6;
        else if (unit1 === "Microgram" && unit2 === "Milligram") data /= 1000;
        else if (unit1 === "Microgram" && unit2 === "Imperial ton")
            data /= 1.016e12;
        else if (unit1 === "Microgram" && unit2 === "US ton")
            data /= 9.0718474e11;
        else if (unit1 === "Microgram" && unit2 === "Stone") data /= 6.35e9;
        else if (unit1 === "Microgram" && unit2 === "Pound") data /= 4.536e8;
        else if (unit1 === "Microgram" && unit2 === "Ounce") data /= 2.835e7;
        else if (unit1 === "Imperial ton" && unit2 === "Tonnes") data *= 1.0165;
        else if (unit1 === "Imperial ton" && unit2 === "Kilogram")
            data *= 1016.046;
        else if (unit1 === "Imperial ton" && unit2 === "Gram") data *= 1.016e6;
        else if (unit1 === "Imperial ton" && unit2 === "Milligram")
            data *= 1.016e9;
        else if (unit1 === "Imperial ton" && unit2 === "Microgram")
            data *= 1.016e12;
        else if (unit1 === "Imperial ton" && unit2 === "US ton") data *= 1.12;
        else if (unit1 === "Imperial ton" && unit2 === "Stone") data *= 160;
        else if (unit1 === "Imperial ton" && unit2 === "Pound") data *= 2240;
        else if (unit1 === "Imperial ton" && unit2 === "Ounce") data *= 35840;
        else if (unit1 === "US ton" && unit2 === "Tonnes") data /= 1.102311372;
        else if (unit1 === "US ton" && unit2 === "Kilogram") data *= 907.18474;
        else if (unit1 === "US ton" && unit2 === "Gram") data *= 907184.74;
        else if (unit1 === "US ton" && unit2 === "Milligram")
            data *= 9.0718474e8;
        else if (unit1 === "US ton" && unit2 === "Microgram")
            data *= 9.0718474e11;
        else if (unit1 === "US ton" && unit2 === "Imperial ton") data /= 1.12;
        else if (unit1 === "US ton" && unit2 === "Stone") data *= 142.857142857;
        else if (unit1 === "US ton" && unit2 === "Pound") data *= 2000;
        else if (unit1 === "US ton" && unit2 === "Ounce") data *= 32000;
        else if (unit1 === "Stone" && unit2 === "Tonnes") data /= 157.4730444;
        else if (unit1 === "Stone" && unit2 === "Kilogram") data *= 6.35029318;
        else if (unit1 === "Stone" && unit2 === "Gram") data *= 6350.29318;
        else if (unit1 === "Stone" && unit2 === "Milligram")
            data *= 6.35029318e6;
        else if (unit1 === "Stone" && unit2 === "Microgram")
            data *= 6.35029318e9;
        else if (unit1 === "Stone" && unit2 === "Imperial ton") data /= 160;
        else if (unit1 === "Stone" && unit2 === "US ton") data /= 142.857142857;
        else if (unit1 === "Stone" && unit2 === "Pound") data *= 14;
        else if (unit1 === "Stone" && unit2 === "Ounce") data *= 224;
        else if (unit1 === "Pound" && unit2 === "Tonnes") data /= 2204.622621;
        else if (unit1 === "Pound" && unit2 === "Kilogram") data /= 2.204622621;
        else if (unit1 === "Pound" && unit2 === "Gram") data *= 453.592;
        else if (unit1 === "Pound" && unit2 === "Milligram") data *= 453592.37;
        else if (unit1 === "Pound" && unit2 === "Microgram") data *= 4.536e8;
        else if (unit1 === "Pound" && unit2 === "Imperial ton") data /= 2240;
        else if (unit1 === "Pound" && unit2 === "US ton") data /= 2000;
        else if (unit1 === "Pound" && unit2 === "Stone") data /= 14;
        else if (unit1 === "Pound" && unit2 === "Ounce") data *= 16;
        else if (unit1 === "Ounce" && unit2 === "Tonnes") data /= 35274;
        else if (unit1 === "Ounce" && unit2 === "Kilogram") data /= 35.274;
        else if (unit1 === "Ounce" && unit2 === "Gram") data *= 28.349523125;
        else if (unit1 === "Ounce" && unit2 === "Milligram")
            data *= 28349.523125;
        else if (unit1 === "Ounce" && unit2 === "Microgram") data *= 2.834952e7;
        else if (unit1 === "Ounce" && unit2 === "Imperial ton") data /= 35840;
        else if (unit1 === "Ounce" && unit2 === "US ton") data /= 32000;
        else if (unit1 === "Ounce" && unit2 === "Stone") data /= 224;
        else if (unit1 === "Ounce" && unit2 === "Pound") data /= 16;
        console.log(data);
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
