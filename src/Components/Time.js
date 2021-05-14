import React, { memo, useState } from "react";
import Select from "./InputSelectRow";
import GenIfElse from "./GenIfElse";

export default memo(function Time() {
    const [options] = useState([
        "Nanosecond",
        "Microsecond",
        "Millisecond",
        "Second",
        "Minute",
        "Hour",
        "Day",
        "Week",
        "Month",
        "Calendar year",
        "Decade",
        "Century",
    ]);
    const [select, setSelect] = useState(["Second", "Minute"]);
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
        // calculation section (pest the copy text)

        if (unit1 === "Nanosecond" && unit2 === "Microsecond")
            data = data * 0.001;
        else if (unit1 === "Nanosecond" && unit2 === "Millisecond")
            data = data * 1e-6;
        else if (unit1 === "Nanosecond" && unit2 === "Second")
            data = data * 1e-9;
        else if (unit1 === "Nanosecond" && unit2 === "Minute")
            data = data * 1.6667e-11;
        else if (unit1 === "Nanosecond" && unit2 === "Hour")
            data = data * 2.7778e-13;
        else if (unit1 === "Nanosecond" && unit2 === "Day")
            data = data * 1.1574e-14;
        else if (unit1 === "Nanosecond" && unit2 === "Week")
            data = data * 1.6534e-15;
        else if (unit1 === "Nanosecond" && unit2 === "Month")
            data = data * 3.8052e-16;
        else if (unit1 === "Nanosecond" && unit2 === "Calendar year")
            data = data * 3.171e-17;
        else if (unit1 === "Nanosecond" && unit2 === "Decade")
            data = data * 3.171e-18;
        else if (unit1 === "Nanosecond" && unit2 === "Century")
            data = data * 3.171e-19;
        else if (unit1 === "Microsecond" && unit2 === "Nanosecond")
            data = data * 1000;
        else if (unit1 === "Microsecond" && unit2 === "Millisecond")
            data = data * 0.001;
        else if (unit1 === "Microsecond" && unit2 === "Second")
            data = data * 1e-6;
        else if (unit1 === "Microsecond" && unit2 === "Minute")
            data = data * 1.6667e-8;
        else if (unit1 === "Microsecond" && unit2 === "Hour")
            data = data * 2.7778e-10;
        else if (unit1 === "Microsecond" && unit2 === "Day")
            data = data * 1.1574e-11;
        else if (unit1 === "Microsecond" && unit2 === "Week")
            data = data * 1.6534e-12;
        else if (unit1 === "Microsecond" && unit2 === "Month")
            data = data * 3.8052e-13;
        else if (unit1 === "Microsecond" && unit2 === "Calendar year")
            data = data * 3.171e-14;
        else if (unit1 === "Microsecond" && unit2 === "Decade")
            data = data * 3.171e-15;
        else if (unit1 === "Microsecond" && unit2 === "Century")
            data = data * 3.171e-16;
        else if (unit1 === "Millisecond" && unit2 === "Nanosecond")
            data = data * 1e6;
        else if (unit1 === "Millisecond" && unit2 === "Microsecond")
            data = data * 1000;
        else if (unit1 === "Millisecond" && unit2 === "Second")
            data = data * 0.001;
        else if (unit1 === "Millisecond" && unit2 === "Minute")
            data = data * 1.6667e-5;
        else if (unit1 === "Millisecond" && unit2 === "Hour")
            data = data * 2.7778e-7;
        else if (unit1 === "Millisecond" && unit2 === "Day")
            data = data * 1.1574e-8;
        else if (unit1 === "Millisecond" && unit2 === "Week")
            data = data * 1.6534e-9;
        else if (unit1 === "Millisecond" && unit2 === "Month")
            data = data * 3.8052e-10;
        else if (unit1 === "Millisecond" && unit2 === "Calendar year")
            data = data * 3.171e-11;
        else if (unit1 === "Millisecond" && unit2 === "Decade")
            data = data * 3.171e-12;
        else if (unit1 === "Millisecond" && unit2 === "Century")
            data = data * 3.171e-13;
        else if (unit1 === "Second" && unit2 === "Nanosecond")
            data = data * 1e9;
        else if (unit1 === "Second" && unit2 === "Microsecond")
            data = data * 1e6;
        else if (unit1 === "Second" && unit2 === "Millisecond")
            data = data * 1000;
        else if (unit1 === "Second" && unit2 === "Minute")
            data = data * 0.0166667;
        else if (unit1 === "Second" && unit2 === "Hour")
            data = data * 0.000277778;
        else if (unit1 === "Second" && unit2 === "Day") data = data * 1.1574e-5;
        else if (unit1 === "Second" && unit2 === "Week")
            data = data * 1.6534e-6;
        else if (unit1 === "Second" && unit2 === "Month")
            data = data * 3.8052e-7;
        else if (unit1 === "Second" && unit2 === "Calendar year")
            data = data * 3.171e-8;
        else if (unit1 === "Second" && unit2 === "Decade")
            data = data * 3.171e-9;
        else if (unit1 === "Second" && unit2 === "Century")
            data = data * 3.171e-10;
        else if (unit1 === "Minute" && unit2 === "Nanosecond")
            data = data * 6e10;
        else if (unit1 === "Minute" && unit2 === "Microsecond")
            data = data * 6e7;
        else if (unit1 === "Minute" && unit2 === "Millisecond")
            data = data * 60000;
        else if (unit1 === "Minute" && unit2 === "Second") data = data * 60;
        else if (unit1 === "Minute" && unit2 === "Hour")
            data = data * 0.0166667;
        else if (unit1 === "Minute" && unit2 === "Day")
            data = data * 0.000694444;
        else if (unit1 === "Minute" && unit2 === "Week")
            data = data * 9.9206e-5;
        else if (unit1 === "Minute" && unit2 === "Month")
            data = data * 2.2831e-5;
        else if (unit1 === "Minute" && unit2 === "Calendar year")
            data = data * 1.9026e-6;
        else if (unit1 === "Minute" && unit2 === "Decade")
            data = data * 1.9026e-7;
        else if (unit1 === "Minute" && unit2 === "Century")
            data = data * 1.9026e-8;
        else if (unit1 === "Hour" && unit2 === "Nanosecond")
            data = data * 3.6e12;
        else if (unit1 === "Hour" && unit2 === "Microsecond")
            data = data * 3.6e9;
        else if (unit1 === "Hour" && unit2 === "Millisecond")
            data = data * 3.6e6;
        else if (unit1 === "Hour" && unit2 === "Second") data = data * 3600;
        else if (unit1 === "Hour" && unit2 === "Minute") data = data * 60;
        else if (unit1 === "Hour" && unit2 === "Day") data = data * 0.0416667;
        else if (unit1 === "Hour" && unit2 === "Week") data = data * 0.00595238;
        else if (unit1 === "Hour" && unit2 === "Month")
            data = data * 0.00136986;
        else if (unit1 === "Hour" && unit2 === "Calendar year")
            data = data * 0.000114155;
        else if (unit1 === "Hour" && unit2 === "Decade")
            data = data * 1.1416e-5;
        else if (unit1 === "Hour" && unit2 === "Century")
            data = data * 1.1416e-6;
        else if (unit1 === "Day" && unit2 === "Nanosecond")
            data = data * 8.64e13;
        else if (unit1 === "Day" && unit2 === "Microsecond")
            data = data * 8.64e10;
        else if (unit1 === "Day" && unit2 === "Millisecond")
            data = data * 8.64e7;
        else if (unit1 === "Day" && unit2 === "Second") data = data * 86400;
        else if (unit1 === "Day" && unit2 === "Minute") data = data * 1440;
        else if (unit1 === "Day" && unit2 === "Hour") data = data * 24;
        else if (unit1 === "Day" && unit2 === "Week") data = data * 0.142857;
        else if (unit1 === "Day" && unit2 === "Month") data = data * 0.0328767;
        else if (unit1 === "Day" && unit2 === "Calendar year")
            data = data * 0.00273973;
        else if (unit1 === "Day" && unit2 === "Decade")
            data = data * 0.000273973;
        else if (unit1 === "Day" && unit2 === "Century")
            data = data * 2.7397e-5;
        else if (unit1 === "Week" && unit2 === "Nanosecond")
            data = data * 6.048e14;
        else if (unit1 === "Week" && unit2 === "Microsecond")
            data = data * 6.048e11;
        else if (unit1 === "Week" && unit2 === "Millisecond")
            data = data * 6.048e8;
        else if (unit1 === "Week" && unit2 === "Second") data = data * 604800;
        else if (unit1 === "Week" && unit2 === "Minute") data = data * 10080;
        else if (unit1 === "Week" && unit2 === "Hour") data = data * 168;
        else if (unit1 === "Week" && unit2 === "Day") data = data * 7;
        else if (unit1 === "Week" && unit2 === "Month") data = data * 0.230137;
        else if (unit1 === "Week" && unit2 === "Calendar year")
            data = data * 0.0191781;
        else if (unit1 === "Week" && unit2 === "Decade")
            data = data * 0.00191781;
        else if (unit1 === "Week" && unit2 === "Century")
            data = data * 0.000191781;
        else if (unit1 === "Month" && unit2 === "Nanosecond")
            data = data * 2.628e15;
        else if (unit1 === "Month" && unit2 === "Microsecond")
            data = data * 2.628e12;
        else if (unit1 === "Month" && unit2 === "Millisecond")
            data = data * 2.628e9;
        else if (unit1 === "Month" && unit2 === "Second") data = data * 2.628e6;
        else if (unit1 === "Month" && unit2 === "Minute") data = data * 43800;
        else if (unit1 === "Month" && unit2 === "Hour") data = data * 730.001;
        else if (unit1 === "Month" && unit2 === "Day") data = data * 30.4167;
        else if (unit1 === "Month" && unit2 === "Week") data = data * 4.34524;
        else if (unit1 === "Month" && unit2 === "Calendar year")
            data = data * 0.0833334;
        else if (unit1 === "Month" && unit2 === "Decade")
            data = data * 0.00833334;
        else if (unit1 === "Month" && unit2 === "Century")
            data = data * 0.000833334;
        else if (unit1 === "Calendar year" && unit2 === "Nanosecond")
            data = data * 3.154e16;
        else if (unit1 === "Calendar year" && unit2 === "Microsecond")
            data = data * 3.154e13;
        else if (unit1 === "Calendar year" && unit2 === "Millisecond")
            data = data * 3.154e10;
        else if (unit1 === "Calendar year" && unit2 === "Second")
            data = data * 3.154e7;
        else if (unit1 === "Calendar year" && unit2 === "Minute")
            data = data * 525600;
        else if (unit1 === "Calendar year" && unit2 === "Hour")
            data = data * 8760;
        else if (unit1 === "Calendar year" && unit2 === "Day")
            data = data * 365;
        else if (unit1 === "Calendar year" && unit2 === "Week")
            data = data * 52.1429;
        else if (unit1 === "Calendar year" && unit2 === "Month")
            data = data * 12;
        else if (unit1 === "Calendar year" && unit2 === "Decade")
            data = data * 0.1;
        else if (unit1 === "Calendar year" && unit2 === "Century")
            data = data * 0.01;
        else if (unit1 === "Decade" && unit2 === "Nanosecond")
            data = data * 3.154e17;
        else if (unit1 === "Decade" && unit2 === "Microsecond")
            data = data * 3.154e14;
        else if (unit1 === "Decade" && unit2 === "Millisecond")
            data = data * 3.154e11;
        else if (unit1 === "Decade" && unit2 === "Second")
            data = data * 3.154e8;
        else if (unit1 === "Decade" && unit2 === "Minute")
            data = data * 5.256e6;
        else if (unit1 === "Decade" && unit2 === "Hour") data = data * 87600;
        else if (unit1 === "Decade" && unit2 === "Day") data = data * 3650;
        else if (unit1 === "Decade" && unit2 === "Week") data = data * 521.429;
        else if (unit1 === "Decade" && unit2 === "Month") data = data * 120;
        else if (unit1 === "Decade" && unit2 === "Calendar year")
            data = data * 10;
        else if (unit1 === "Decade" && unit2 === "Century") data = data * 0.1;
        else if (unit1 === "Century" && unit2 === "Nanosecond")
            data = data * 3.154e18;
        else if (unit1 === "Century" && unit2 === "Microsecond")
            data = data * 3.154e15;
        else if (unit1 === "Century" && unit2 === "Millisecond")
            data = data * 3.154e12;
        else if (unit1 === "Century" && unit2 === "Second")
            data = data * 3.154e9;
        else if (unit1 === "Century" && unit2 === "Minute")
            data = data * 5.256e7;
        else if (unit1 === "Century" && unit2 === "Hour") data = data * 876000;
        else if (unit1 === "Century" && unit2 === "Day") data = data * 36500;
        else if (unit1 === "Century" && unit2 === "Week") data = data * 5214.29;
        else if (unit1 === "Century" && unit2 === "Month") data = data * 1200;
        else if (unit1 === "Century" && unit2 === "Calendar year")
            data = data * 100;
        else if (unit1 === "Century" && unit2 === "Decade") data = data * 10;

        // end calculation section
        if (data > 100000) data = data.toExponential(4);
        else if (data < 99999 && data > 0.000001)
            data = Number(data.toFixed(6));
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
            {/* <GenIfElse options={options} /> */}
        </>
    );
});
