import React, { memo, useState } from "react";
import Select from "./InputSelectRow";
//import GenIfElse from "./GenIfElse";

export default memo(function DataTransferRate() {
    // this is the list you have to write
    const [options] = useState([
        "Bit per second",
        "Kilobit per second",
        "Kilobyte per second",
        "Kibibit per second",
        "Megabit per second",
        "Megabyte per second",
        "Mebibit per second",
        "Gigabit per second",
        "Gigabyte per second",
        "Gibibit per second",
        "Terabit per second",
        "Terabyte per second",
        "Tebibit per second",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState([
        "Bit per second",
        "Kilobit per second",
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
        if (unit1 === "Bit per second" && unit2 === "Kilobit per second")
            data = data * 0.001;
        else if (unit1 === "Bit per second" && unit2 === "Kilobyte per second")
            data = data * 0.000125;
        else if (unit1 === "Bit per second" && unit2 === "Kibibit per second")
            data = data * 0.000976563;
        else if (unit1 === "Bit per second" && unit2 === "Megabit per second")
            data = data * 1e-6;
        else if (unit1 === "Bit per second" && unit2 === "Megabyte per second")
            data = data * 1.25e-7;
        else if (unit1 === "Bit per second" && unit2 === "Mebibit per second")
            data = data * 9.5367e-7;
        else if (unit1 === "Bit per second" && unit2 === "Gigabit per second")
            data = data * 1e-9;
        else if (unit1 === "Bit per second" && unit2 === "Gigabyte per second")
            data = data * 1.25e-10;
        else if (unit1 === "Bit per second" && unit2 === "Gibibit per second")
            data = data * 9.3132e-10;
        else if (unit1 === "Bit per second" && unit2 === "Terabit per second")
            data = data * 1e-12;
        else if (unit1 === "Bit per second" && unit2 === "Terabyte per second")
            data = data * 1.25e-13;
        else if (unit1 === "Bit per second" && unit2 === "Tebibit per second")
            data = data * 9.0949e-13;
        else if (unit1 === "Kilobit per second" && unit2 === "Bit per second")
            data = data * 1000;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 0.125;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 0.976563;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 0.001;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 0.000125;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 0.000953674;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 1e-6;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 1.25e-7;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 9.3132e-7;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 1e-9;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 1.25e-10;
        else if (
            unit1 === "Kilobit per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 9.0949e-10;
        else if (unit1 === "Kilobyte per second" && unit2 === "Bit per second")
            data = data * 8000;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 8;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 7.8125;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 0.008;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 0.001;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 0.00762939;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 8e-6;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 1e-6;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 7.4506e-6;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 8e-9;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 1e-9;
        else if (
            unit1 === "Kilobyte per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 7.276e-9;
        else if (unit1 === "Kibibit per second" && unit2 === "Bit per second")
            data = data * 1024;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 1.024;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 0.128;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 0.001024;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 0.000128;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 0.000976563;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 1.024e-6;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 1.28e-7;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 9.5367e-7;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 1.024e-9;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 1.28e-10;
        else if (
            unit1 === "Kibibit per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 9.3132e-10;
        else if (unit1 === "Megabit per second" && unit2 === "Bit per second")
            data = data * 1e6;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 1000;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 125;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 976.563;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 0.125;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 0.953674;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 0.001;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 0.000125;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 0.000931323;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 1e-6;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 1.25e-7;
        else if (
            unit1 === "Megabit per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 9.0949e-7;
        else if (unit1 === "Megabyte per second" && unit2 === "Bit per second")
            data = data * 8e6;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 8000;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 1000;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 7812.5;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 8;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 7.62939;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 0.008;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 0.001;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 0.00745058;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 8e-6;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 1e-6;
        else if (
            unit1 === "Megabyte per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 7.276e-6;
        else if (unit1 === "Mebibit per second" && unit2 === "Bit per second")
            data = data * 1.049e6;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 1048.58;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 131.072;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 1024;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 1.04858;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 0.131072;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 0.00104858;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 0.000131072;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 0.000976563;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 1.0486e-6;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 1.3107e-7;
        else if (
            unit1 === "Mebibit per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 9.5367e-7;
        else if (unit1 === "Gigabit per second" && unit2 === "Bit per second")
            data = data * 1e9;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 1e6;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 125000;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 976563;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 1000;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 125;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 953.674;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 0.125;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 0.931323;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 0.001;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 0.000125;
        else if (
            unit1 === "Gigabit per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 0.000909495;
        else if (unit1 === "Gigabyte per second" && unit2 === "Bit per second")
            data = data * 8e9;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 8e6;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 1e6;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 7.813e6;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 8000;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 1000;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 7629.39;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 8;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 7.45058;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 0.008;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 0.001;
        else if (
            unit1 === "Gigabyte per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 0.00727596;
        else if (unit1 === "Gibibit per second" && unit2 === "Bit per second")
            data = data * 1.074e9;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 1.074e6;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 134218;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 1.049e6;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 1073.74;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 134.218;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 1024;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 1.07374;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 0.134218;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 0.00107374;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 0.000134218;
        else if (
            unit1 === "Gibibit per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 0.000976563;
        else if (unit1 === "Terabit per second" && unit2 === "Bit per second")
            data = data * 1e12;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 1e9;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 1.25e8;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 9.766e8;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 1e6;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 125000;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 953674;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 1000;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 125;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 931.323;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 0.125;
        else if (
            unit1 === "Terabit per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 0.909495;
        else if (unit1 === "Terabyte per second" && unit2 === "Bit per second")
            data = data * 8e12;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 8e9;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 1e9;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 7.813e9;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 8e6;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 1e6;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 7.629e6;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 8000;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 1000;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 7450.58;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 8;
        else if (
            unit1 === "Terabyte per second" &&
            unit2 === "Tebibit per second"
        )
            data = data * 7.27596;
        else if (unit1 === "Tebibit per second" && unit2 === "Bit per second")
            data = data * 1.1e12;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Kilobit per second"
        )
            data = data * 1.1e9;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Kilobyte per second"
        )
            data = data * 1.374e8;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Kibibit per second"
        )
            data = data * 1.074e9;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Megabit per second"
        )
            data = data * 1.1e6;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Megabyte per second"
        )
            data = data * 137439;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Mebibit per second"
        )
            data = data * 1.049e6;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Gigabit per second"
        )
            data = data * 1099.51;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Gigabyte per second"
        )
            data = data * 137.439;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Gibibit per second"
        )
            data = data * 1024;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Terabit per second"
        )
            data = data * 1.09951;
        else if (
            unit1 === "Tebibit per second" &&
            unit2 === "Terabyte per second"
        )
            data = data * 0.137439;

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
            <p>DataTransferRate</p>
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
