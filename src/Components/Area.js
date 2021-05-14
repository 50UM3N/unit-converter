import React, { memo, useState } from "react";
import Select from "./InputSelectRow";
//import GenIfElse from "./GenIfElse";

export default memo(function Area() {
    // this is the list you have to write
    const [options] = useState([
        "Square kilometer",
        "Square meter",
        "Square mile",
        "Square yard",
        "Square foot",
        "Square inch",
        "Hectare",
        "Acre",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState(["Square meter", "Square kilometer"]);
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

        if (unit1 === "Square kilometer" && unit2 === "Square meter")
            data = data * 1e6;
        else if (unit1 === "Square kilometer" && unit2 === "Square mile")
            data = data * 0.386102;
        else if (unit1 === "Square kilometer" && unit2 === "Square yard")
            data = data * 1.196e6;
        else if (unit1 === "Square kilometer" && unit2 === "Square foot")
            data = data * 1.076e7;
        else if (unit1 === "Square kilometer" && unit2 === "Square inch")
            data = data * 1.55e9;
        else if (unit1 === "Square kilometer" && unit2 === "Hectare")
            data = data * 100;
        else if (unit1 === "Square kilometer" && unit2 === "Acre")
            data = data * 247.105;
        else if (unit1 === "Square meter" && unit2 === "Square kilometer")
            data = data * 1e-6;
        else if (unit1 === "Square meter" && unit2 === "Square mile")
            data = data * 3.861e-7;
        else if (unit1 === "Square meter" && unit2 === "Square yard")
            data = data * 1.19599;
        else if (unit1 === "Square meter" && unit2 === "Square foot")
            data = data * 10.7639;
        else if (unit1 === "Square meter" && unit2 === "Square inch")
            data = data * 1550;
        else if (unit1 === "Square meter" && unit2 === "Hectare")
            data = data * 1e-4;
        else if (unit1 === "Square meter" && unit2 === "Acre")
            data = data * 0.000247105;
        else if (unit1 === "Square mile" && unit2 === "Square kilometer")
            data = data * 2.58999;
        else if (unit1 === "Square mile" && unit2 === "Square meter")
            data = data * 2.59e6;
        else if (unit1 === "Square mile" && unit2 === "Square yard")
            data = data * 3.098e6;
        else if (unit1 === "Square mile" && unit2 === "Square foot")
            data = data * 2.788e7;
        else if (unit1 === "Square mile" && unit2 === "Square inch")
            data = data * 4.014e9;
        else if (unit1 === "Square mile" && unit2 === "Hectare")
            data = data * 258.999;
        else if (unit1 === "Square mile" && unit2 === "Acre") data = data * 640;
        else if (unit1 === "Square yard" && unit2 === "Square kilometer")
            data = data * 8.3613e-7;
        else if (unit1 === "Square yard" && unit2 === "Square meter")
            data = data * 0.836127;
        else if (unit1 === "Square yard" && unit2 === "Square mile")
            data = data * 3.2283e-7;
        else if (unit1 === "Square yard" && unit2 === "Square foot")
            data = data * 9;
        else if (unit1 === "Square yard" && unit2 === "Square inch")
            data = data * 1296;
        else if (unit1 === "Square yard" && unit2 === "Hectare")
            data = data * 8.3613e-5;
        else if (unit1 === "Square yard" && unit2 === "Acre")
            data = data * 0.000206612;
        else if (unit1 === "Square foot" && unit2 === "Square kilometer")
            data = data * 9.2903e-8;
        else if (unit1 === "Square foot" && unit2 === "Square meter")
            data = data * 0.092903;
        else if (unit1 === "Square foot" && unit2 === "Square mile")
            data = data * 3.587e-8;
        else if (unit1 === "Square foot" && unit2 === "Square yard")
            data = data * 0.111111;
        else if (unit1 === "Square foot" && unit2 === "Square inch")
            data = data * 144;
        else if (unit1 === "Square foot" && unit2 === "Hectare")
            data = data * 9.2903e-6;
        else if (unit1 === "Square foot" && unit2 === "Acre")
            data = data * 2.2957e-5;
        else if (unit1 === "Square inch" && unit2 === "Square kilometer")
            data = data * 6.4516e-10;
        else if (unit1 === "Square inch" && unit2 === "Square meter")
            data = data * 0.00064516;
        else if (unit1 === "Square inch" && unit2 === "Square mile")
            data = data * 2.491e-10;
        else if (unit1 === "Square inch" && unit2 === "Square yard")
            data = data * 0.000771605;
        else if (unit1 === "Square inch" && unit2 === "Square foot")
            data = data * 0.00694444;
        else if (unit1 === "Square inch" && unit2 === "Hectare")
            data = data * 6.4516e-8;
        else if (unit1 === "Square inch" && unit2 === "Acre")
            data = data * 1.5942e-7;
        else if (unit1 === "Hectare" && unit2 === "Square kilometer")
            data = data * 0.01;
        else if (unit1 === "Hectare" && unit2 === "Square meter")
            data = data * 10000;
        else if (unit1 === "Hectare" && unit2 === "Square mile")
            data = data * 0.00386102;
        else if (unit1 === "Hectare" && unit2 === "Square yard")
            data = data * 11959.9;
        else if (unit1 === "Hectare" && unit2 === "Square foot")
            data = data * 107639;
        else if (unit1 === "Hectare" && unit2 === "Square inch")
            data = data * 1.55e7;
        else if (unit1 === "Hectare" && unit2 === "Acre") data = data * 2.47105;
        else if (unit1 === "Acre" && unit2 === "Square kilometer")
            data = data * 0.00404686;
        else if (unit1 === "Acre" && unit2 === "Square meter")
            data = data * 4046.86;
        else if (unit1 === "Acre" && unit2 === "Square mile")
            data = data * 0.0015625;
        else if (unit1 === "Acre" && unit2 === "Square yard")
            data = data * 4840;
        else if (unit1 === "Acre" && unit2 === "Square foot")
            data = data * 43560;
        else if (unit1 === "Acre" && unit2 === "Square inch")
            data = data * 6.273e6;
        else if (unit1 === "Acre" && unit2 === "Hectare")
            data = data * 0.404686;

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
            {/*<GenIfElse options={options} />*/}
        </>
    );
});
