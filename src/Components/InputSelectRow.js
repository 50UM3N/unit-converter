import React from "react";

export default React.memo(function Select({
    amount,
    handleInput,
    handleSelect,
    selectedValue,
    options,
}) {
    return (
        <>
            <input
                className="input-control"
                value={amount}
                onClick={(e) => {
                    e.target.select();
                }}
                onChange={handleInput}
            />
            <select
                className="global-select-control select-control"
                value={selectedValue}
                onChange={handleSelect}
            >
                {options.map((option) => {
                    return (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </>
    );
});
