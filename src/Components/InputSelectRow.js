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
            <input value={amount} onChange={handleInput} />
            <select value={selectedValue} onChange={handleSelect}>
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
