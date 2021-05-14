import React, { memo, useState } from "react";
import Select from "./InputSelectRow";
//import GenIfElse from "./GenIfElse";

export default memo(function Energy() {
    // this is the list you have to write
    const [options] = useState([
        "Joule",
        "Kilojoule",
        "Gram calorie",
        "Kilocalorie",
        "Watt hour",
        "Kilowatt hour",
        "Electronvolt",
        "British thermal unit",
        "US therm",
        "Foot-pound",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState(["Joule", "Kilocalorie"]);
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
        if (unit1 === "Joule" && unit2 === "Kilojoule") data = data * 0.001;
        else if (unit1 === "Joule" && unit2 === "Gram calorie")
            data = data * 0.239006;
        else if (unit1 === "Joule" && unit2 === "Kilocalorie")
            data = data * 0.000239006;
        else if (unit1 === "Joule" && unit2 === "Watt hour")
            data = data * 0.000277778;
        else if (unit1 === "Joule" && unit2 === "Kilowatt hour")
            data = data * 2.7778e-7;
        else if (unit1 === "Joule" && unit2 === "Electronvolt")
            data = data * 6.242e18;
        else if (unit1 === "Joule" && unit2 === "British thermal unit")
            data = data * 0.000947817;
        else if (unit1 === "Joule" && unit2 === "US therm")
            data = data * 9.4804e-9;
        else if (unit1 === "Joule" && unit2 === "Foot-pound")
            data = data * 0.737562;
        else if (unit1 === "Kilojoule" && unit2 === "Joule") data = data * 1000;
        else if (unit1 === "Kilojoule" && unit2 === "Gram calorie")
            data = data * 239.006;
        else if (unit1 === "Kilojoule" && unit2 === "Kilocalorie")
            data = data * 0.239006;
        else if (unit1 === "Kilojoule" && unit2 === "Watt hour")
            data = data * 0.277778;
        else if (unit1 === "Kilojoule" && unit2 === "Kilowatt hour")
            data = data * 0.000277778;
        else if (unit1 === "Kilojoule" && unit2 === "Electronvolt")
            data = data * 6.242e21;
        else if (unit1 === "Kilojoule" && unit2 === "British thermal unit")
            data = data * 0.947817;
        else if (unit1 === "Kilojoule" && unit2 === "US therm")
            data = data * 9.4804e-6;
        else if (unit1 === "Kilojoule" && unit2 === "Foot-pound")
            data = data * 737.562;
        else if (unit1 === "Gram calorie" && unit2 === "Joule")
            data = data * 4.184;
        else if (unit1 === "Gram calorie" && unit2 === "Kilojoule")
            data = data * 0.004184;
        else if (unit1 === "Gram calorie" && unit2 === "Kilocalorie")
            data = data * 0.001;
        else if (unit1 === "Gram calorie" && unit2 === "Watt hour")
            data = data * 0.00116222;
        else if (unit1 === "Gram calorie" && unit2 === "Kilowatt hour")
            data = data * 1.1622e-6;
        else if (unit1 === "Gram calorie" && unit2 === "Electronvolt")
            data = data * 2.611e19;
        else if (unit1 === "Gram calorie" && unit2 === "British thermal unit")
            data = data * 0.00396567;
        else if (unit1 === "Gram calorie" && unit2 === "US therm")
            data = data * 3.9666e-8;
        else if (unit1 === "Gram calorie" && unit2 === "Foot-pound")
            data = data * 3.08596;
        else if (unit1 === "Kilocalorie" && unit2 === "Joule")
            data = data * 4184;
        else if (unit1 === "Kilocalorie" && unit2 === "Kilojoule")
            data = data * 4.184;
        else if (unit1 === "Kilocalorie" && unit2 === "Gram calorie")
            data = data * 1000;
        else if (unit1 === "Kilocalorie" && unit2 === "Watt hour")
            data = data * 1.16222;
        else if (unit1 === "Kilocalorie" && unit2 === "Kilowatt hour")
            data = data * 0.00116222;
        else if (unit1 === "Kilocalorie" && unit2 === "Electronvolt")
            data = data * 2.611e22;
        else if (unit1 === "Kilocalorie" && unit2 === "British thermal unit")
            data = data * 3.96567;
        else if (unit1 === "Kilocalorie" && unit2 === "US therm")
            data = data * 3.9666e-5;
        else if (unit1 === "Kilocalorie" && unit2 === "Foot-pound")
            data = data * 3085.96;
        else if (unit1 === "Watt hour" && unit2 === "Joule") data = data * 3600;
        else if (unit1 === "Watt hour" && unit2 === "Kilojoule")
            data = data * 3.6;
        else if (unit1 === "Watt hour" && unit2 === "Gram calorie")
            data = data * 860.421;
        else if (unit1 === "Watt hour" && unit2 === "Kilocalorie")
            data = data * 0.860421;
        else if (unit1 === "Watt hour" && unit2 === "Kilowatt hour")
            data = data * 0.001;
        else if (unit1 === "Watt hour" && unit2 === "Electronvolt")
            data = data * 2.247e22;
        else if (unit1 === "Watt hour" && unit2 === "British thermal unit")
            data = data * 3.41214;
        else if (unit1 === "Watt hour" && unit2 === "US therm")
            data = data * 3.413e-5;
        else if (unit1 === "Watt hour" && unit2 === "Foot-pound")
            data = data * 2655.22;
        else if (unit1 === "Kilowatt hour" && unit2 === "Joule")
            data = data * 3.6e6;
        else if (unit1 === "Kilowatt hour" && unit2 === "Kilojoule")
            data = data * 3600;
        else if (unit1 === "Kilowatt hour" && unit2 === "Gram calorie")
            data = data * 860421;
        else if (unit1 === "Kilowatt hour" && unit2 === "Kilocalorie")
            data = data * 860.421;
        else if (unit1 === "Kilowatt hour" && unit2 === "Watt hour")
            data = data * 1000;
        else if (unit1 === "Kilowatt hour" && unit2 === "Electronvolt")
            data = data * 2.247e25;
        else if (unit1 === "Kilowatt hour" && unit2 === "British thermal unit")
            data = data * 3412.14;
        else if (unit1 === "Kilowatt hour" && unit2 === "US therm")
            data = data * 0.0341296;
        else if (unit1 === "Kilowatt hour" && unit2 === "Foot-pound")
            data = data * 2.655e6;
        else if (unit1 === "Electronvolt" && unit2 === "Joule")
            data = data * 1.6022e-19;
        else if (unit1 === "Electronvolt" && unit2 === "Kilojoule")
            data = data * 1.6022e-22;
        else if (unit1 === "Electronvolt" && unit2 === "Gram calorie")
            data = data * 3.8293e-20;
        else if (unit1 === "Electronvolt" && unit2 === "Kilocalorie")
            data = data * 3.8293e-23;
        else if (unit1 === "Electronvolt" && unit2 === "Watt hour")
            data = data * 4.4505e-23;
        else if (unit1 === "Electronvolt" && unit2 === "Kilowatt hour")
            data = data * 4.4505e-26;
        else if (unit1 === "Electronvolt" && unit2 === "British thermal unit")
            data = data * 1.5186e-22;
        else if (unit1 === "Electronvolt" && unit2 === "US therm")
            data = data * 1.5189e-27;
        else if (unit1 === "Electronvolt" && unit2 === "Foot-pound")
            data = data * 1.1817e-19;
        else if (unit1 === "British thermal unit" && unit2 === "Joule")
            data = data * 1055.06;
        else if (unit1 === "British thermal unit" && unit2 === "Kilojoule")
            data = data * 1.05506;
        else if (unit1 === "British thermal unit" && unit2 === "Gram calorie")
            data = data * 252.164;
        else if (unit1 === "British thermal unit" && unit2 === "Kilocalorie")
            data = data * 0.252164;
        else if (unit1 === "British thermal unit" && unit2 === "Watt hour")
            data = data * 0.293071;
        else if (unit1 === "British thermal unit" && unit2 === "Kilowatt hour")
            data = data * 0.000293071;
        else if (unit1 === "British thermal unit" && unit2 === "Electronvolt")
            data = data * 6.585e21;
        else if (unit1 === "British thermal unit" && unit2 === "US therm")
            data = data * 1.0002e-5;
        else if (unit1 === "British thermal unit" && unit2 === "Foot-pound")
            data = data * 778.169;
        else if (unit1 === "US therm" && unit2 === "Joule")
            data = data * 1.055e8;
        else if (unit1 === "US therm" && unit2 === "Kilojoule")
            data = data * 105480;
        else if (unit1 === "US therm" && unit2 === "Gram calorie")
            data = data * 2.521e7;
        else if (unit1 === "US therm" && unit2 === "Kilocalorie")
            data = data * 25210.4;
        else if (unit1 === "US therm" && unit2 === "Watt hour")
            data = data * 29300.1;
        else if (unit1 === "US therm" && unit2 === "Kilowatt hour")
            data = data * 29.3001;
        else if (unit1 === "US therm" && unit2 === "Electronvolt")
            data = data * 6.584e26;
        else if (unit1 === "US therm" && unit2 === "British thermal unit")
            data = data * 99976.1;
        else if (unit1 === "US therm" && unit2 === "Foot-pound")
            data = data * 7.78e7;
        else if (unit1 === "Foot-pound" && unit2 === "Joule")
            data = data * 1.35582;
        else if (unit1 === "Foot-pound" && unit2 === "Kilojoule")
            data = data * 0.00135582;
        else if (unit1 === "Foot-pound" && unit2 === "Gram calorie")
            data = data * 0.324048;
        else if (unit1 === "Foot-pound" && unit2 === "Kilocalorie")
            data = data * 0.000324048;
        else if (unit1 === "Foot-pound" && unit2 === "Watt hour")
            data = data * 0.000376616;
        else if (unit1 === "Foot-pound" && unit2 === "Kilowatt hour")
            data = data * 3.7662e-7;
        else if (unit1 === "Foot-pound" && unit2 === "Electronvolt")
            data = data * 8.462e18;
        else if (unit1 === "Foot-pound" && unit2 === "British thermal unit")
            data = data * 0.00128507;
        else if (unit1 === "Foot-pound" && unit2 === "US therm")
            data = data * 1.2854e-8;

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
            {/*<GenIfElse options={options} />*/}
        </>
    );
});
