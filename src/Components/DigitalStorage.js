import React, { memo, useState } from "react";
import Select from "./InputSelectRow";
//import GenIfElse from "./GenIfElse";

export default memo(function DigitalStorage() {
    // this is the list you have to write
    const [options] = useState([
        "Bit",
        "Kilobit",
        "Kibbit",
        "Megabit",
        "Mebibit",
        "Gigabit",
        "Gibibit",
        "Terabit",
        "Tebibit",
        "Petabit",
        "Pebibit",
        "Byte",
        "Kilobyte",
        "Kibibyte",
        "Megabyte",
        "Mebibyte",
        "Gigabyte",
        "Gibibyte",
        "Terabyte",
        "Tebibyte",
        "Petabyte",
        "Pebibyte",
    ]);

    // this is the two default unite that shows in google
    const [select, setSelect] = useState(["Byte", "Kilobyte"]);
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

        if (unit1 === "Bit" && unit2 === "Kilobit") data = data * 0.001;
        else if (unit1 === "Bit" && unit2 === "Kibbit")
            data = data * 0.000976563;
        else if (unit1 === "Bit" && unit2 === "Megabit") data = data * 1e-6;
        else if (unit1 === "Bit" && unit2 === "Mebibit")
            data = data * 9.5367e-7;
        else if (unit1 === "Bit" && unit2 === "Gigabit") data = data * 1e-9;
        else if (unit1 === "Bit" && unit2 === "Gibibit")
            data = data * 9.3132e-10;
        else if (unit1 === "Bit" && unit2 === "Terabit") data = data * 1e-12;
        else if (unit1 === "Bit" && unit2 === "Tebibit")
            data = data * 9.0949e-13;
        else if (unit1 === "Bit" && unit2 === "Petabit") data = data * 1e-15;
        else if (unit1 === "Bit" && unit2 === "Pebibit")
            data = data * 8.8818e-16;
        else if (unit1 === "Bit" && unit2 === "Byte") data = data * 0.125;
        else if (unit1 === "Bit" && unit2 === "Kilobyte")
            data = data * 0.000125;
        else if (unit1 === "Bit" && unit2 === "Kibibyte")
            data = data * 0.00012207;
        else if (unit1 === "Bit" && unit2 === "Megabyte") data = data * 1.25e-7;
        else if (unit1 === "Bit" && unit2 === "Mebibyte")
            data = data * 1.1921e-7;
        else if (unit1 === "Bit" && unit2 === "Gigabyte")
            data = data * 1.25e-10;
        else if (unit1 === "Bit" && unit2 === "Gibibyte")
            data = data * 1.1642e-10;
        else if (unit1 === "Bit" && unit2 === "Terabyte")
            data = data * 1.25e-13;
        else if (unit1 === "Bit" && unit2 === "Tebibyte")
            data = data * 1.1369e-13;
        else if (unit1 === "Bit" && unit2 === "Petabyte")
            data = data * 1.25e-16;
        else if (unit1 === "Bit" && unit2 === "Pebibyte")
            data = data * 1.1102e-16;
        else if (unit1 === "Kilobit" && unit2 === "Bit") data = data * 1000;
        else if (unit1 === "Kilobit" && unit2 === "Kibbit")
            data = data * 0.976563;
        else if (unit1 === "Kilobit" && unit2 === "Megabit")
            data = data * 0.001;
        else if (unit1 === "Kilobit" && unit2 === "Mebibit")
            data = data * 0.000953674;
        else if (unit1 === "Kilobit" && unit2 === "Gigabit") data = data * 1e-6;
        else if (unit1 === "Kilobit" && unit2 === "Gibibit")
            data = data * 9.3132e-7;
        else if (unit1 === "Kilobit" && unit2 === "Terabit") data = data * 1e-9;
        else if (unit1 === "Kilobit" && unit2 === "Tebibit")
            data = data * 9.0949e-10;
        else if (unit1 === "Kilobit" && unit2 === "Petabit")
            data = data * 1e-12;
        else if (unit1 === "Kilobit" && unit2 === "Pebibit")
            data = data * 8.8818e-13;
        else if (unit1 === "Kilobit" && unit2 === "Byte") data = data * 125;
        else if (unit1 === "Kilobit" && unit2 === "Kilobyte")
            data = data * 0.125;
        else if (unit1 === "Kilobit" && unit2 === "Kibibyte")
            data = data * 0.12207;
        else if (unit1 === "Kilobit" && unit2 === "Megabyte")
            data = data * 0.000125;
        else if (unit1 === "Kilobit" && unit2 === "Mebibyte")
            data = data * 0.000119209;
        else if (unit1 === "Kilobit" && unit2 === "Gigabyte")
            data = data * 1.25e-7;
        else if (unit1 === "Kilobit" && unit2 === "Gibibyte")
            data = data * 1.1642e-7;
        else if (unit1 === "Kilobit" && unit2 === "Terabyte")
            data = data * 1.25e-10;
        else if (unit1 === "Kilobit" && unit2 === "Tebibyte")
            data = data * 1.1369e-10;
        else if (unit1 === "Kilobit" && unit2 === "Petabyte")
            data = data * 1.25e-13;
        else if (unit1 === "Kilobit" && unit2 === "Pebibyte")
            data = data * 1.1102e-13;
        else if (unit1 === "Kibbit" && unit2 === "Bit") data = data * 1024;
        else if (unit1 === "Kibbit" && unit2 === "Kilobit") data = data * 1.024;
        else if (unit1 === "Kibbit" && unit2 === "Megabit")
            data = data * 0.001024;
        else if (unit1 === "Kibbit" && unit2 === "Mebibit")
            data = data * 0.000976563;
        else if (unit1 === "Kibbit" && unit2 === "Gigabit")
            data = data * 1.024e-6;
        else if (unit1 === "Kibbit" && unit2 === "Gibibit")
            data = data * 9.5367e-7;
        else if (unit1 === "Kibbit" && unit2 === "Terabit")
            data = data * 1.024e-9;
        else if (unit1 === "Kibbit" && unit2 === "Tebibit")
            data = data * 9.3132e-10;
        else if (unit1 === "Kibbit" && unit2 === "Petabit")
            data = data * 1.024e-12;
        else if (unit1 === "Kibbit" && unit2 === "Pebibit")
            data = data * 9.0949e-13;
        else if (unit1 === "Kibbit" && unit2 === "Byte") data = data * 128;
        else if (unit1 === "Kibbit" && unit2 === "Kilobyte")
            data = data * 0.128;
        else if (unit1 === "Kibbit" && unit2 === "Kibibyte")
            data = data * 0.125;
        else if (unit1 === "Kibbit" && unit2 === "Megabyte")
            data = data * 0.000128;
        else if (unit1 === "Kibbit" && unit2 === "Mebibyte")
            data = data * 0.00012207;
        else if (unit1 === "Kibbit" && unit2 === "Gigabyte")
            data = data * 1.28e-7;
        else if (unit1 === "Kibbit" && unit2 === "Gibibyte")
            data = data * 1.1921e-7;
        else if (unit1 === "Kibbit" && unit2 === "Terabyte")
            data = data * 1.28e-10;
        else if (unit1 === "Kibbit" && unit2 === "Tebibyte")
            data = data * 1.1642e-10;
        else if (unit1 === "Kibbit" && unit2 === "Petabyte")
            data = data * 1.28e-13;
        else if (unit1 === "Kibbit" && unit2 === "Pebibyte")
            data = data * 1.1369e-13;
        else if (unit1 === "Megabit" && unit2 === "Bit") data = data * 1e6;
        else if (unit1 === "Megabit" && unit2 === "Kilobit") data = data * 1000;
        else if (unit1 === "Megabit" && unit2 === "Kibbit")
            data = data * 976.563;
        else if (unit1 === "Megabit" && unit2 === "Mebibit")
            data = data * 0.953674;
        else if (unit1 === "Megabit" && unit2 === "Gigabit")
            data = data * 0.001;
        else if (unit1 === "Megabit" && unit2 === "Gibibit")
            data = data * 0.000931323;
        else if (unit1 === "Megabit" && unit2 === "Terabit") data = data * 1e-6;
        else if (unit1 === "Megabit" && unit2 === "Tebibit")
            data = data * 9.0949e-7;
        else if (unit1 === "Megabit" && unit2 === "Petabit") data = data * 1e-9;
        else if (unit1 === "Megabit" && unit2 === "Pebibit")
            data = data * 8.8818e-10;
        else if (unit1 === "Megabit" && unit2 === "Byte") data = data * 125000;
        else if (unit1 === "Megabit" && unit2 === "Kilobyte") data = data * 125;
        else if (unit1 === "Megabit" && unit2 === "Kibibyte")
            data = data * 122.07;
        else if (unit1 === "Megabit" && unit2 === "Megabyte")
            data = data * 0.125;
        else if (unit1 === "Megabit" && unit2 === "Mebibyte")
            data = data * 0.119209;
        else if (unit1 === "Megabit" && unit2 === "Gigabyte")
            data = data * 0.000125;
        else if (unit1 === "Megabit" && unit2 === "Gibibyte")
            data = data * 0.000116415;
        else if (unit1 === "Megabit" && unit2 === "Terabyte")
            data = data * 1.25e-7;
        else if (unit1 === "Megabit" && unit2 === "Tebibyte")
            data = data * 1.1369e-7;
        else if (unit1 === "Megabit" && unit2 === "Petabyte")
            data = data * 1.25e-10;
        else if (unit1 === "Megabit" && unit2 === "Pebibyte")
            data = data * 1.1102e-10;
        else if (unit1 === "Mebibit" && unit2 === "Bit") data = data * 1.049e6;
        else if (unit1 === "Mebibit" && unit2 === "Kilobit")
            data = data * 1048.58;
        else if (unit1 === "Mebibit" && unit2 === "Kibbit") data = data * 1024;
        else if (unit1 === "Mebibit" && unit2 === "Megabit")
            data = data * 1.04858;
        else if (unit1 === "Mebibit" && unit2 === "Gigabit")
            data = data * 0.00104858;
        else if (unit1 === "Mebibit" && unit2 === "Gibibit")
            data = data * 0.000976563;
        else if (unit1 === "Mebibit" && unit2 === "Terabit")
            data = data * 1.0486e-6;
        else if (unit1 === "Mebibit" && unit2 === "Tebibit")
            data = data * 9.5367e-7;
        else if (unit1 === "Mebibit" && unit2 === "Petabit")
            data = data * 1.0486e-9;
        else if (unit1 === "Mebibit" && unit2 === "Pebibit")
            data = data * 9.3132e-10;
        else if (unit1 === "Mebibit" && unit2 === "Byte") data = data * 131072;
        else if (unit1 === "Mebibit" && unit2 === "Kilobyte")
            data = data * 131.072;
        else if (unit1 === "Mebibit" && unit2 === "Kibibyte") data = data * 128;
        else if (unit1 === "Mebibit" && unit2 === "Megabyte")
            data = data * 0.131072;
        else if (unit1 === "Mebibit" && unit2 === "Mebibyte")
            data = data * 0.125;
        else if (unit1 === "Mebibit" && unit2 === "Gigabyte")
            data = data * 0.000131072;
        else if (unit1 === "Mebibit" && unit2 === "Gibibyte")
            data = data * 0.00012207;
        else if (unit1 === "Mebibit" && unit2 === "Terabyte")
            data = data * 1.3107e-7;
        else if (unit1 === "Mebibit" && unit2 === "Tebibyte")
            data = data * 1.1921e-7;
        else if (unit1 === "Mebibit" && unit2 === "Petabyte")
            data = data * 1.3107e-10;
        else if (unit1 === "Mebibit" && unit2 === "Pebibyte")
            data = data * 1.1642e-10;
        else if (unit1 === "Gigabit" && unit2 === "Bit") data = data * 1e9;
        else if (unit1 === "Gigabit" && unit2 === "Kilobit") data = data * 1e6;
        else if (unit1 === "Gigabit" && unit2 === "Kibbit")
            data = data * 976563;
        else if (unit1 === "Gigabit" && unit2 === "Megabit") data = data * 1000;
        else if (unit1 === "Gigabit" && unit2 === "Mebibit")
            data = data * 953.674;
        else if (unit1 === "Gigabit" && unit2 === "Gibibit")
            data = data * 0.931323;
        else if (unit1 === "Gigabit" && unit2 === "Terabit")
            data = data * 0.001;
        else if (unit1 === "Gigabit" && unit2 === "Tebibit")
            data = data * 0.000909495;
        else if (unit1 === "Gigabit" && unit2 === "Petabit") data = data * 1e-6;
        else if (unit1 === "Gigabit" && unit2 === "Pebibit")
            data = data * 8.8818e-7;
        else if (unit1 === "Gigabit" && unit2 === "Byte") data = data * 1.25e8;
        else if (unit1 === "Gigabit" && unit2 === "Kilobyte")
            data = data * 125000;
        else if (unit1 === "Gigabit" && unit2 === "Kibibyte")
            data = data * 122070;
        else if (unit1 === "Gigabit" && unit2 === "Megabyte") data = data * 125;
        else if (unit1 === "Gigabit" && unit2 === "Mebibyte")
            data = data * 119.209;
        else if (unit1 === "Gigabit" && unit2 === "Gigabyte")
            data = data * 0.125;
        else if (unit1 === "Gigabit" && unit2 === "Gibibyte")
            data = data * 0.116415;
        else if (unit1 === "Gigabit" && unit2 === "Terabyte")
            data = data * 0.000125;
        else if (unit1 === "Gigabit" && unit2 === "Tebibyte")
            data = data * 0.000113687;
        else if (unit1 === "Gigabit" && unit2 === "Petabyte")
            data = data * 1.25e-7;
        else if (unit1 === "Gigabit" && unit2 === "Pebibyte")
            data = data * 1.1102e-7;
        else if (unit1 === "Gibibit" && unit2 === "Bit") data = data * 1.074e9;
        else if (unit1 === "Gibibit" && unit2 === "Kilobit")
            data = data * 1.074e6;
        else if (unit1 === "Gibibit" && unit2 === "Kibbit")
            data = data * 1.049e6;
        else if (unit1 === "Gibibit" && unit2 === "Megabit")
            data = data * 1073.74;
        else if (unit1 === "Gibibit" && unit2 === "Mebibit") data = data * 1024;
        else if (unit1 === "Gibibit" && unit2 === "Gigabit")
            data = data * 1.07374;
        else if (unit1 === "Gibibit" && unit2 === "Terabit")
            data = data * 0.00107374;
        else if (unit1 === "Gibibit" && unit2 === "Tebibit")
            data = data * 0.000976563;
        else if (unit1 === "Gibibit" && unit2 === "Petabit")
            data = data * 1.0737e-6;
        else if (unit1 === "Gibibit" && unit2 === "Pebibit")
            data = data * 9.5367e-7;
        else if (unit1 === "Gibibit" && unit2 === "Byte") data = data * 1.342e8;
        else if (unit1 === "Gibibit" && unit2 === "Kilobyte")
            data = data * 134218;
        else if (unit1 === "Gibibit" && unit2 === "Kibibyte")
            data = data * 131072;
        else if (unit1 === "Gibibit" && unit2 === "Megabyte")
            data = data * 134.218;
        else if (unit1 === "Gibibit" && unit2 === "Mebibyte") data = data * 128;
        else if (unit1 === "Gibibit" && unit2 === "Gigabyte")
            data = data * 0.134218;
        else if (unit1 === "Gibibit" && unit2 === "Gibibyte")
            data = data * 0.125;
        else if (unit1 === "Gibibit" && unit2 === "Terabyte")
            data = data * 0.000134218;
        else if (unit1 === "Gibibit" && unit2 === "Tebibyte")
            data = data * 0.00012207;
        else if (unit1 === "Gibibit" && unit2 === "Petabyte")
            data = data * 1.3422e-7;
        else if (unit1 === "Gibibit" && unit2 === "Pebibyte")
            data = data * 1.1921e-7;
        else if (unit1 === "Terabit" && unit2 === "Bit") data = data * 1e12;
        else if (unit1 === "Terabit" && unit2 === "Kilobit") data = data * 1e9;
        else if (unit1 === "Terabit" && unit2 === "Kibbit")
            data = data * 9.766e8;
        else if (unit1 === "Terabit" && unit2 === "Megabit") data = data * 1e6;
        else if (unit1 === "Terabit" && unit2 === "Mebibit")
            data = data * 953674;
        else if (unit1 === "Terabit" && unit2 === "Gigabit") data = data * 1000;
        else if (unit1 === "Terabit" && unit2 === "Gibibit")
            data = data * 931.323;
        else if (unit1 === "Terabit" && unit2 === "Tebibit")
            data = data * 0.909495;
        else if (unit1 === "Terabit" && unit2 === "Petabit")
            data = data * 0.001;
        else if (unit1 === "Terabit" && unit2 === "Pebibit")
            data = data * 0.000888178;
        else if (unit1 === "Terabit" && unit2 === "Byte") data = data * 1.25e11;
        else if (unit1 === "Terabit" && unit2 === "Kilobyte")
            data = data * 1.25e8;
        else if (unit1 === "Terabit" && unit2 === "Kibibyte")
            data = data * 1.221e8;
        else if (unit1 === "Terabit" && unit2 === "Megabyte")
            data = data * 125000;
        else if (unit1 === "Terabit" && unit2 === "Mebibyte")
            data = data * 119209;
        else if (unit1 === "Terabit" && unit2 === "Gigabyte") data = data * 125;
        else if (unit1 === "Terabit" && unit2 === "Gibibyte")
            data = data * 116.415;
        else if (unit1 === "Terabit" && unit2 === "Terabyte")
            data = data * 0.125;
        else if (unit1 === "Terabit" && unit2 === "Tebibyte")
            data = data * 0.113687;
        else if (unit1 === "Terabit" && unit2 === "Petabyte")
            data = data * 0.000125;
        else if (unit1 === "Terabit" && unit2 === "Pebibyte")
            data = data * 0.000111022;
        else if (unit1 === "Tebibit" && unit2 === "Bit") data = data * 1.1e12;
        else if (unit1 === "Tebibit" && unit2 === "Kilobit")
            data = data * 1.1e9;
        else if (unit1 === "Tebibit" && unit2 === "Kibbit")
            data = data * 1.074e9;
        else if (unit1 === "Tebibit" && unit2 === "Megabit")
            data = data * 1.1e6;
        else if (unit1 === "Tebibit" && unit2 === "Mebibit")
            data = data * 1.049e6;
        else if (unit1 === "Tebibit" && unit2 === "Gigabit")
            data = data * 1099.51;
        else if (unit1 === "Tebibit" && unit2 === "Gibibit") data = data * 1024;
        else if (unit1 === "Tebibit" && unit2 === "Terabit")
            data = data * 1.09951;
        else if (unit1 === "Tebibit" && unit2 === "Petabit")
            data = data * 0.00109951;
        else if (unit1 === "Tebibit" && unit2 === "Pebibit")
            data = data * 0.000976563;
        else if (unit1 === "Tebibit" && unit2 === "Byte")
            data = data * 1.374e11;
        else if (unit1 === "Tebibit" && unit2 === "Kilobyte")
            data = data * 1.374e8;
        else if (unit1 === "Tebibit" && unit2 === "Kibibyte")
            data = data * 1.342e8;
        else if (unit1 === "Tebibit" && unit2 === "Megabyte")
            data = data * 137439;
        else if (unit1 === "Tebibit" && unit2 === "Mebibyte")
            data = data * 131072;
        else if (unit1 === "Tebibit" && unit2 === "Gigabyte")
            data = data * 137.439;
        else if (unit1 === "Tebibit" && unit2 === "Gibibyte") data = data * 128;
        else if (unit1 === "Tebibit" && unit2 === "Terabyte")
            data = data * 0.137439;
        else if (unit1 === "Tebibit" && unit2 === "Tebibyte")
            data = data * 0.125;
        else if (unit1 === "Tebibit" && unit2 === "Petabyte")
            data = data * 0.000137439;
        else if (unit1 === "Tebibit" && unit2 === "Pebibyte")
            data = data * 0.00012207;
        else if (unit1 === "Petabit" && unit2 === "Bit") data = data * 1e15;
        else if (unit1 === "Petabit" && unit2 === "Kilobit") data = data * 1e12;
        else if (unit1 === "Petabit" && unit2 === "Kibbit")
            data = data * 9.766e11;
        else if (unit1 === "Petabit" && unit2 === "Megabit") data = data * 1e9;
        else if (unit1 === "Petabit" && unit2 === "Mebibit")
            data = data * 9.537e8;
        else if (unit1 === "Petabit" && unit2 === "Gigabit") data = data * 1e6;
        else if (unit1 === "Petabit" && unit2 === "Gibibit")
            data = data * 931323;
        else if (unit1 === "Petabit" && unit2 === "Terabit") data = data * 1000;
        else if (unit1 === "Petabit" && unit2 === "Tebibit")
            data = data * 909.495;
        else if (unit1 === "Petabit" && unit2 === "Pebibit")
            data = data * 0.888178;
        else if (unit1 === "Petabit" && unit2 === "Byte") data = data * 1.25e14;
        else if (unit1 === "Petabit" && unit2 === "Kilobyte")
            data = data * 1.25e11;
        else if (unit1 === "Petabit" && unit2 === "Kibibyte")
            data = data * 1.221e11;
        else if (unit1 === "Petabit" && unit2 === "Megabyte")
            data = data * 1.25e8;
        else if (unit1 === "Petabit" && unit2 === "Mebibyte")
            data = data * 1.192e8;
        else if (unit1 === "Petabit" && unit2 === "Gigabyte")
            data = data * 125000;
        else if (unit1 === "Petabit" && unit2 === "Gibibyte")
            data = data * 116415;
        else if (unit1 === "Petabit" && unit2 === "Terabyte") data = data * 125;
        else if (unit1 === "Petabit" && unit2 === "Tebibyte")
            data = data * 113.687;
        else if (unit1 === "Petabit" && unit2 === "Petabyte")
            data = data * 0.125;
        else if (unit1 === "Petabit" && unit2 === "Pebibyte")
            data = data * 0.111022;
        else if (unit1 === "Pebibit" && unit2 === "Bit") data = data * 1.126e15;
        else if (unit1 === "Pebibit" && unit2 === "Kilobit")
            data = data * 1.126e12;
        else if (unit1 === "Pebibit" && unit2 === "Kibbit")
            data = data * 1.1e12;
        else if (unit1 === "Pebibit" && unit2 === "Megabit")
            data = data * 1.126e9;
        else if (unit1 === "Pebibit" && unit2 === "Mebibit")
            data = data * 1.074e9;
        else if (unit1 === "Pebibit" && unit2 === "Gigabit")
            data = data * 1.126e6;
        else if (unit1 === "Pebibit" && unit2 === "Gibibit")
            data = data * 1.049e6;
        else if (unit1 === "Pebibit" && unit2 === "Terabit")
            data = data * 1125.9;
        else if (unit1 === "Pebibit" && unit2 === "Tebibit") data = data * 1024;
        else if (unit1 === "Pebibit" && unit2 === "Petabit")
            data = data * 1.1259;
        else if (unit1 === "Pebibit" && unit2 === "Byte")
            data = data * 1.407e14;
        else if (unit1 === "Pebibit" && unit2 === "Kilobyte")
            data = data * 1.407e11;
        else if (unit1 === "Pebibit" && unit2 === "Kibibyte")
            data = data * 1.374e11;
        else if (unit1 === "Pebibit" && unit2 === "Megabyte")
            data = data * 1.407e8;
        else if (unit1 === "Pebibit" && unit2 === "Mebibyte")
            data = data * 1.342e8;
        else if (unit1 === "Pebibit" && unit2 === "Gigabyte")
            data = data * 140737;
        else if (unit1 === "Pebibit" && unit2 === "Gibibyte")
            data = data * 131072;
        else if (unit1 === "Pebibit" && unit2 === "Terabyte")
            data = data * 140.737;
        else if (unit1 === "Pebibit" && unit2 === "Tebibyte") data = data * 128;
        else if (unit1 === "Pebibit" && unit2 === "Petabyte")
            data = data * 0.140737;
        else if (unit1 === "Pebibit" && unit2 === "Pebibyte")
            data = data * 0.125;
        else if (unit1 === "Byte" && unit2 === "Bit") data = data * 8;
        else if (unit1 === "Byte" && unit2 === "Kilobit") data = data * 0.008;
        else if (unit1 === "Byte" && unit2 === "Kibbit")
            data = data * 0.0078125;
        else if (unit1 === "Byte" && unit2 === "Megabit") data = data * 8e-6;
        else if (unit1 === "Byte" && unit2 === "Mebibit")
            data = data * 7.6294e-6;
        else if (unit1 === "Byte" && unit2 === "Gigabit") data = data * 8e-9;
        else if (unit1 === "Byte" && unit2 === "Gibibit")
            data = data * 7.4506e-9;
        else if (unit1 === "Byte" && unit2 === "Terabit") data = data * 8e-12;
        else if (unit1 === "Byte" && unit2 === "Tebibit")
            data = data * 7.276e-12;
        else if (unit1 === "Byte" && unit2 === "Petabit") data = data * 8e-15;
        else if (unit1 === "Byte" && unit2 === "Pebibit")
            data = data * 7.1054e-15;
        else if (unit1 === "Byte" && unit2 === "Kilobyte") data = data * 0.001;
        else if (unit1 === "Byte" && unit2 === "Kibibyte")
            data = data * 0.000976563;
        else if (unit1 === "Byte" && unit2 === "Megabyte") data = data * 1e-6;
        else if (unit1 === "Byte" && unit2 === "Mebibyte")
            data = data * 9.5367e-7;
        else if (unit1 === "Byte" && unit2 === "Gigabyte") data = data * 1e-9;
        else if (unit1 === "Byte" && unit2 === "Gibibyte")
            data = data * 9.3132e-10;
        else if (unit1 === "Byte" && unit2 === "Terabyte") data = data * 1e-12;
        else if (unit1 === "Byte" && unit2 === "Tebibyte")
            data = data * 9.0949e-13;
        else if (unit1 === "Byte" && unit2 === "Petabyte") data = data * 1e-15;
        else if (unit1 === "Byte" && unit2 === "Pebibyte")
            data = data * 8.8818e-16;
        else if (unit1 === "Kilobyte" && unit2 === "Bit") data = data * 8000;
        else if (unit1 === "Kilobyte" && unit2 === "Kilobit") data = data * 8;
        else if (unit1 === "Kilobyte" && unit2 === "Kibbit")
            data = data * 7.8125;
        else if (unit1 === "Kilobyte" && unit2 === "Megabit")
            data = data * 0.008;
        else if (unit1 === "Kilobyte" && unit2 === "Mebibit")
            data = data * 0.00762939;
        else if (unit1 === "Kilobyte" && unit2 === "Gigabit")
            data = data * 8e-6;
        else if (unit1 === "Kilobyte" && unit2 === "Gibibit")
            data = data * 7.4506e-6;
        else if (unit1 === "Kilobyte" && unit2 === "Terabit")
            data = data * 8e-9;
        else if (unit1 === "Kilobyte" && unit2 === "Tebibit")
            data = data * 7.276e-9;
        else if (unit1 === "Kilobyte" && unit2 === "Petabit")
            data = data * 8e-12;
        else if (unit1 === "Kilobyte" && unit2 === "Pebibit")
            data = data * 7.1054e-12;
        else if (unit1 === "Kilobyte" && unit2 === "Byte") data = data * 1000;
        else if (unit1 === "Kilobyte" && unit2 === "Kibibyte")
            data = data * 0.976563;
        else if (unit1 === "Kilobyte" && unit2 === "Megabyte")
            data = data * 0.001;
        else if (unit1 === "Kilobyte" && unit2 === "Mebibyte")
            data = data * 0.000953674;
        else if (unit1 === "Kilobyte" && unit2 === "Gigabyte")
            data = data * 1e-6;
        else if (unit1 === "Kilobyte" && unit2 === "Gibibyte")
            data = data * 9.3132e-7;
        else if (unit1 === "Kilobyte" && unit2 === "Terabyte")
            data = data * 1e-9;
        else if (unit1 === "Kilobyte" && unit2 === "Tebibyte")
            data = data * 9.0949e-10;
        else if (unit1 === "Kilobyte" && unit2 === "Petabyte")
            data = data * 1e-12;
        else if (unit1 === "Kilobyte" && unit2 === "Pebibyte")
            data = data * 8.8818e-13;
        else if (unit1 === "Kibibyte" && unit2 === "Bit") data = data * 8192;
        else if (unit1 === "Kibibyte" && unit2 === "Kilobit")
            data = data * 8.192;
        else if (unit1 === "Kibibyte" && unit2 === "Kibbit") data = data * 8;
        else if (unit1 === "Kibibyte" && unit2 === "Megabit")
            data = data * 0.008192;
        else if (unit1 === "Kibibyte" && unit2 === "Mebibit")
            data = data * 0.0078125;
        else if (unit1 === "Kibibyte" && unit2 === "Gigabit")
            data = data * 8.192e-6;
        else if (unit1 === "Kibibyte" && unit2 === "Gibibit")
            data = data * 7.6294e-6;
        else if (unit1 === "Kibibyte" && unit2 === "Terabit")
            data = data * 8.192e-9;
        else if (unit1 === "Kibibyte" && unit2 === "Tebibit")
            data = data * 7.4506e-9;
        else if (unit1 === "Kibibyte" && unit2 === "Petabit")
            data = data * 8.192e-12;
        else if (unit1 === "Kibibyte" && unit2 === "Pebibit")
            data = data * 7.276e-12;
        else if (unit1 === "Kibibyte" && unit2 === "Byte") data = data * 1024;
        else if (unit1 === "Kibibyte" && unit2 === "Kilobyte")
            data = data * 1.024;
        else if (unit1 === "Kibibyte" && unit2 === "Megabyte")
            data = data * 0.001024;
        else if (unit1 === "Kibibyte" && unit2 === "Mebibyte")
            data = data * 0.000976563;
        else if (unit1 === "Kibibyte" && unit2 === "Gigabyte")
            data = data * 1.024e-6;
        else if (unit1 === "Kibibyte" && unit2 === "Gibibyte")
            data = data * 9.5367e-7;
        else if (unit1 === "Kibibyte" && unit2 === "Terabyte")
            data = data * 1.024e-9;
        else if (unit1 === "Kibibyte" && unit2 === "Tebibyte")
            data = data * 9.3132e-10;
        else if (unit1 === "Kibibyte" && unit2 === "Petabyte")
            data = data * 1.024e-12;
        else if (unit1 === "Kibibyte" && unit2 === "Pebibyte")
            data = data * 9.0949e-13;
        else if (unit1 === "Megabyte" && unit2 === "Bit") data = data * 8e6;
        else if (unit1 === "Megabyte" && unit2 === "Kilobit")
            data = data * 8000;
        else if (unit1 === "Megabyte" && unit2 === "Kibbit")
            data = data * 7812.5;
        else if (unit1 === "Megabyte" && unit2 === "Megabit") data = data * 8;
        else if (unit1 === "Megabyte" && unit2 === "Mebibit")
            data = data * 7.62939;
        else if (unit1 === "Megabyte" && unit2 === "Gigabit")
            data = data * 0.008;
        else if (unit1 === "Megabyte" && unit2 === "Gibibit")
            data = data * 0.00745058;
        else if (unit1 === "Megabyte" && unit2 === "Terabit")
            data = data * 8e-6;
        else if (unit1 === "Megabyte" && unit2 === "Tebibit")
            data = data * 7.276e-6;
        else if (unit1 === "Megabyte" && unit2 === "Petabit")
            data = data * 8e-9;
        else if (unit1 === "Megabyte" && unit2 === "Pebibit")
            data = data * 7.1054e-9;
        else if (unit1 === "Megabyte" && unit2 === "Byte") data = data * 1e6;
        else if (unit1 === "Megabyte" && unit2 === "Kilobyte")
            data = data * 1000;
        else if (unit1 === "Megabyte" && unit2 === "Kibibyte")
            data = data * 976.563;
        else if (unit1 === "Megabyte" && unit2 === "Mebibyte")
            data = data * 0.953674;
        else if (unit1 === "Megabyte" && unit2 === "Gigabyte")
            data = data * 0.001;
        else if (unit1 === "Megabyte" && unit2 === "Gibibyte")
            data = data * 0.000931323;
        else if (unit1 === "Megabyte" && unit2 === "Terabyte")
            data = data * 1e-6;
        else if (unit1 === "Megabyte" && unit2 === "Tebibyte")
            data = data * 9.0949e-7;
        else if (unit1 === "Megabyte" && unit2 === "Petabyte")
            data = data * 1e-9;
        else if (unit1 === "Megabyte" && unit2 === "Pebibyte")
            data = data * 8.8818e-10;
        else if (unit1 === "Mebibyte" && unit2 === "Bit") data = data * 8.389e6;
        else if (unit1 === "Mebibyte" && unit2 === "Kilobit")
            data = data * 8388.61;
        else if (unit1 === "Mebibyte" && unit2 === "Kibbit") data = data * 8192;
        else if (unit1 === "Mebibyte" && unit2 === "Megabit")
            data = data * 8.38861;
        else if (unit1 === "Mebibyte" && unit2 === "Mebibit") data = data * 8;
        else if (unit1 === "Mebibyte" && unit2 === "Gigabit")
            data = data * 0.00838861;
        else if (unit1 === "Mebibyte" && unit2 === "Gibibit")
            data = data * 0.0078125;
        else if (unit1 === "Mebibyte" && unit2 === "Terabit")
            data = data * 8.3886e-6;
        else if (unit1 === "Mebibyte" && unit2 === "Tebibit")
            data = data * 7.6294e-6;
        else if (unit1 === "Mebibyte" && unit2 === "Petabit")
            data = data * 8.3886e-9;
        else if (unit1 === "Mebibyte" && unit2 === "Pebibit")
            data = data * 7.4506e-9;
        else if (unit1 === "Mebibyte" && unit2 === "Byte")
            data = data * 1.049e6;
        else if (unit1 === "Mebibyte" && unit2 === "Kilobyte")
            data = data * 1048.58;
        else if (unit1 === "Mebibyte" && unit2 === "Kibibyte")
            data = data * 1024;
        else if (unit1 === "Mebibyte" && unit2 === "Megabyte")
            data = data * 1.04858;
        else if (unit1 === "Mebibyte" && unit2 === "Gigabyte")
            data = data * 0.00104858;
        else if (unit1 === "Mebibyte" && unit2 === "Gibibyte")
            data = data * 0.000976563;
        else if (unit1 === "Mebibyte" && unit2 === "Terabyte")
            data = data * 1.0486e-6;
        else if (unit1 === "Mebibyte" && unit2 === "Tebibyte")
            data = data * 9.5367e-7;
        else if (unit1 === "Mebibyte" && unit2 === "Petabyte")
            data = data * 1.0486e-9;
        else if (unit1 === "Mebibyte" && unit2 === "Pebibyte")
            data = data * 9.3132e-10;
        else if (unit1 === "Gigabyte" && unit2 === "Bit") data = data * 8e9;
        else if (unit1 === "Gigabyte" && unit2 === "Kilobit") data = data * 8e6;
        else if (unit1 === "Gigabyte" && unit2 === "Kibbit")
            data = data * 7.813e6;
        else if (unit1 === "Gigabyte" && unit2 === "Megabit")
            data = data * 8000;
        else if (unit1 === "Gigabyte" && unit2 === "Mebibit")
            data = data * 7629.39;
        else if (unit1 === "Gigabyte" && unit2 === "Gigabit") data = data * 8;
        else if (unit1 === "Gigabyte" && unit2 === "Gibibit")
            data = data * 7.45058;
        else if (unit1 === "Gigabyte" && unit2 === "Terabit")
            data = data * 0.008;
        else if (unit1 === "Gigabyte" && unit2 === "Tebibit")
            data = data * 0.00727596;
        else if (unit1 === "Gigabyte" && unit2 === "Petabit")
            data = data * 8e-6;
        else if (unit1 === "Gigabyte" && unit2 === "Pebibit")
            data = data * 7.1054e-6;
        else if (unit1 === "Gigabyte" && unit2 === "Byte") data = data * 1e9;
        else if (unit1 === "Gigabyte" && unit2 === "Kilobyte")
            data = data * 1e6;
        else if (unit1 === "Gigabyte" && unit2 === "Kibibyte")
            data = data * 976563;
        else if (unit1 === "Gigabyte" && unit2 === "Megabyte")
            data = data * 1000;
        else if (unit1 === "Gigabyte" && unit2 === "Mebibyte")
            data = data * 953.674;
        else if (unit1 === "Gigabyte" && unit2 === "Gibibyte")
            data = data * 0.931323;
        else if (unit1 === "Gigabyte" && unit2 === "Terabyte")
            data = data * 0.001;
        else if (unit1 === "Gigabyte" && unit2 === "Tebibyte")
            data = data * 0.000909495;
        else if (unit1 === "Gigabyte" && unit2 === "Petabyte")
            data = data * 1e-6;
        else if (unit1 === "Gigabyte" && unit2 === "Pebibyte")
            data = data * 8.8818e-7;
        else if (unit1 === "Gibibyte" && unit2 === "Bit") data = data * 8.59e9;
        else if (unit1 === "Gibibyte" && unit2 === "Kilobit")
            data = data * 8.59e6;
        else if (unit1 === "Gibibyte" && unit2 === "Kibbit")
            data = data * 8.389e6;
        else if (unit1 === "Gibibyte" && unit2 === "Megabit")
            data = data * 8589.93;
        else if (unit1 === "Gibibyte" && unit2 === "Mebibit")
            data = data * 8192;
        else if (unit1 === "Gibibyte" && unit2 === "Gigabit")
            data = data * 8.58993;
        else if (unit1 === "Gibibyte" && unit2 === "Gibibit") data = data * 8;
        else if (unit1 === "Gibibyte" && unit2 === "Terabit")
            data = data * 0.00858993;
        else if (unit1 === "Gibibyte" && unit2 === "Tebibit")
            data = data * 0.0078125;
        else if (unit1 === "Gibibyte" && unit2 === "Petabit")
            data = data * 8.5899e-6;
        else if (unit1 === "Gibibyte" && unit2 === "Pebibit")
            data = data * 7.6294e-6;
        else if (unit1 === "Gibibyte" && unit2 === "Byte")
            data = data * 1.074e9;
        else if (unit1 === "Gibibyte" && unit2 === "Kilobyte")
            data = data * 1.074e6;
        else if (unit1 === "Gibibyte" && unit2 === "Kibibyte")
            data = data * 1.049e6;
        else if (unit1 === "Gibibyte" && unit2 === "Megabyte")
            data = data * 1073.74;
        else if (unit1 === "Gibibyte" && unit2 === "Mebibyte")
            data = data * 1024;
        else if (unit1 === "Gibibyte" && unit2 === "Gigabyte")
            data = data * 1.07374;
        else if (unit1 === "Gibibyte" && unit2 === "Terabyte")
            data = data * 0.00107374;
        else if (unit1 === "Gibibyte" && unit2 === "Tebibyte")
            data = data * 0.000976563;
        else if (unit1 === "Gibibyte" && unit2 === "Petabyte")
            data = data * 1.0737e-6;
        else if (unit1 === "Gibibyte" && unit2 === "Pebibyte")
            data = data * 9.5367e-7;
        else if (unit1 === "Terabyte" && unit2 === "Bit") data = data * 8e12;
        else if (unit1 === "Terabyte" && unit2 === "Kilobit") data = data * 8e9;
        else if (unit1 === "Terabyte" && unit2 === "Kibbit")
            data = data * 7.813e9;
        else if (unit1 === "Terabyte" && unit2 === "Megabit") data = data * 8e6;
        else if (unit1 === "Terabyte" && unit2 === "Mebibit")
            data = data * 7.629e6;
        else if (unit1 === "Terabyte" && unit2 === "Gigabit")
            data = data * 8000;
        else if (unit1 === "Terabyte" && unit2 === "Gibibit")
            data = data * 7450.58;
        else if (unit1 === "Terabyte" && unit2 === "Terabit") data = data * 8;
        else if (unit1 === "Terabyte" && unit2 === "Tebibit")
            data = data * 7.27596;
        else if (unit1 === "Terabyte" && unit2 === "Petabit")
            data = data * 0.008;
        else if (unit1 === "Terabyte" && unit2 === "Pebibit")
            data = data * 0.00710543;
        else if (unit1 === "Terabyte" && unit2 === "Byte") data = data * 1e12;
        else if (unit1 === "Terabyte" && unit2 === "Kilobyte")
            data = data * 1e9;
        else if (unit1 === "Terabyte" && unit2 === "Kibibyte")
            data = data * 9.766e8;
        else if (unit1 === "Terabyte" && unit2 === "Megabyte")
            data = data * 1e6;
        else if (unit1 === "Terabyte" && unit2 === "Mebibyte")
            data = data * 953674;
        else if (unit1 === "Terabyte" && unit2 === "Gigabyte")
            data = data * 1000;
        else if (unit1 === "Terabyte" && unit2 === "Gibibyte")
            data = data * 931.323;
        else if (unit1 === "Terabyte" && unit2 === "Tebibyte")
            data = data * 0.909495;
        else if (unit1 === "Terabyte" && unit2 === "Petabyte")
            data = data * 0.001;
        else if (unit1 === "Terabyte" && unit2 === "Pebibyte")
            data = data * 0.000888178;
        else if (unit1 === "Tebibyte" && unit2 === "Bit")
            data = data * 8.796e12;
        else if (unit1 === "Tebibyte" && unit2 === "Kilobit")
            data = data * 8.796e9;
        else if (unit1 === "Tebibyte" && unit2 === "Kibbit")
            data = data * 8.59e9;
        else if (unit1 === "Tebibyte" && unit2 === "Megabit")
            data = data * 8.796e6;
        else if (unit1 === "Tebibyte" && unit2 === "Mebibit")
            data = data * 8.389e6;
        else if (unit1 === "Tebibyte" && unit2 === "Gigabit")
            data = data * 8796.09;
        else if (unit1 === "Tebibyte" && unit2 === "Gibibit")
            data = data * 8192;
        else if (unit1 === "Tebibyte" && unit2 === "Terabit")
            data = data * 8.79609;
        else if (unit1 === "Tebibyte" && unit2 === "Tebibit") data = data * 8;
        else if (unit1 === "Tebibyte" && unit2 === "Petabit")
            data = data * 0.00879609;
        else if (unit1 === "Tebibyte" && unit2 === "Pebibit")
            data = data * 0.0078125;
        else if (unit1 === "Tebibyte" && unit2 === "Byte") data = data * 1.1e12;
        else if (unit1 === "Tebibyte" && unit2 === "Kilobyte")
            data = data * 1.1e9;
        else if (unit1 === "Tebibyte" && unit2 === "Kibibyte")
            data = data * 1.074e9;
        else if (unit1 === "Tebibyte" && unit2 === "Megabyte")
            data = data * 1.1e6;
        else if (unit1 === "Tebibyte" && unit2 === "Mebibyte")
            data = data * 1.049e6;
        else if (unit1 === "Tebibyte" && unit2 === "Gigabyte")
            data = data * 1099.51;
        else if (unit1 === "Tebibyte" && unit2 === "Gibibyte")
            data = data * 1024;
        else if (unit1 === "Tebibyte" && unit2 === "Terabyte")
            data = data * 1.09951;
        else if (unit1 === "Tebibyte" && unit2 === "Petabyte")
            data = data * 0.00109951;
        else if (unit1 === "Tebibyte" && unit2 === "Pebibyte")
            data = data * 0.000976563;
        else if (unit1 === "Petabyte" && unit2 === "Bit") data = data * 8e15;
        else if (unit1 === "Petabyte" && unit2 === "Kilobit")
            data = data * 8e12;
        else if (unit1 === "Petabyte" && unit2 === "Kibbit")
            data = data * 7.813e12;
        else if (unit1 === "Petabyte" && unit2 === "Megabit") data = data * 8e9;
        else if (unit1 === "Petabyte" && unit2 === "Mebibit")
            data = data * 7.629e9;
        else if (unit1 === "Petabyte" && unit2 === "Gigabit") data = data * 8e6;
        else if (unit1 === "Petabyte" && unit2 === "Gibibit")
            data = data * 7.451e6;
        else if (unit1 === "Petabyte" && unit2 === "Terabit")
            data = data * 8000;
        else if (unit1 === "Petabyte" && unit2 === "Tebibit")
            data = data * 7275.96;
        else if (unit1 === "Petabyte" && unit2 === "Petabit") data = data * 8;
        else if (unit1 === "Petabyte" && unit2 === "Pebibit")
            data = data * 7.10543;
        else if (unit1 === "Petabyte" && unit2 === "Byte") data = data * 1e15;
        else if (unit1 === "Petabyte" && unit2 === "Kilobyte")
            data = data * 1e12;
        else if (unit1 === "Petabyte" && unit2 === "Kibibyte")
            data = data * 9.766e11;
        else if (unit1 === "Petabyte" && unit2 === "Megabyte")
            data = data * 1e9;
        else if (unit1 === "Petabyte" && unit2 === "Mebibyte")
            data = data * 9.537e8;
        else if (unit1 === "Petabyte" && unit2 === "Gigabyte")
            data = data * 1e6;
        else if (unit1 === "Petabyte" && unit2 === "Gibibyte")
            data = data * 931323;
        else if (unit1 === "Petabyte" && unit2 === "Terabyte")
            data = data * 1000;
        else if (unit1 === "Petabyte" && unit2 === "Tebibyte")
            data = data * 909.495;
        else if (unit1 === "Petabyte" && unit2 === "Pebibyte")
            data = data * 0.888178;
        else if (unit1 === "Pebibyte" && unit2 === "Bit")
            data = data * 9.007e15;
        else if (unit1 === "Pebibyte" && unit2 === "Kilobit")
            data = data * 9.007e12;
        else if (unit1 === "Pebibyte" && unit2 === "Kibbit")
            data = data * 8.796e12;
        else if (unit1 === "Pebibyte" && unit2 === "Megabit")
            data = data * 9.007e9;
        else if (unit1 === "Pebibyte" && unit2 === "Mebibit")
            data = data * 8.59e9;
        else if (unit1 === "Pebibyte" && unit2 === "Gigabit")
            data = data * 9.007e6;
        else if (unit1 === "Pebibyte" && unit2 === "Gibibit")
            data = data * 8.389e6;
        else if (unit1 === "Pebibyte" && unit2 === "Terabit")
            data = data * 9007.2;
        else if (unit1 === "Pebibyte" && unit2 === "Tebibit")
            data = data * 8192;
        else if (unit1 === "Pebibyte" && unit2 === "Petabit")
            data = data * 9.0072;
        else if (unit1 === "Pebibyte" && unit2 === "Pebibit") data = data * 8;
        else if (unit1 === "Pebibyte" && unit2 === "Byte")
            data = data * 1.126e15;
        else if (unit1 === "Pebibyte" && unit2 === "Kilobyte")
            data = data * 1.126e12;
        else if (unit1 === "Pebibyte" && unit2 === "Kibibyte")
            data = data * 1.1e12;
        else if (unit1 === "Pebibyte" && unit2 === "Megabyte")
            data = data * 1.126e9;
        else if (unit1 === "Pebibyte" && unit2 === "Mebibyte")
            data = data * 1.074e9;
        else if (unit1 === "Pebibyte" && unit2 === "Gigabyte")
            data = data * 1.126e6;
        else if (unit1 === "Pebibyte" && unit2 === "Gibibyte")
            data = data * 1.049e6;
        else if (unit1 === "Pebibyte" && unit2 === "Terabyte")
            data = data * 1125.9;
        else if (unit1 === "Pebibyte" && unit2 === "Tebibyte")
            data = data * 1024;
        else if (unit1 === "Pebibyte" && unit2 === "Petabyte")
            data = data * 1.1259;

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
            <p>DigitalStorage</p>
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
