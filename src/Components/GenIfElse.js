import React, { useState, useEffect } from "react";

export default function GenIfElse({ options }) {
    const [string, seString] = useState("");
    const [copy, setCopy] = useState("COPY");
    useEffect(() => {
        let arr = [];
        let str = "";
        let flg = 0;
        if (options.length > 0) {
            options.forEach((op) => {
                options.forEach((op2) => {
                    if (op === op2) return;
                    else arr.push(`unit1==="${op}" && unit2 === "${op2}"`);
                });
            });

            arr.forEach((a) => {
                if (flg === 0) {
                    str += `if ( ${a} ) 
    data=data*0;
`;
                    flg = 1;
                } else
                    str += `else if ( ${a} ) 
    data=data*0;
`;
            });
            console.log(str);
            seString(str);
        }
    }, [options]);
    const handleCopy = () => {
        navigator.clipboard.writeText(string);
        setCopy("COPIED !!");
        const timeOut = setTimeout(() => {
            setCopy("COPY");
            clearTimeout(timeOut);
        }, 2000);
    };
    if (string === "")
        return (
            <div>
                <p>Nothing to copy</p>
            </div>
        );
    else
        return (
            <div>
                <p>Open console press Ctrl + F12 to see the generated code </p>
                <p>And click copy button top copy the code in clipboard</p>
                <button onClick={handleCopy}>{copy}</button>
            </div>
        );
}
