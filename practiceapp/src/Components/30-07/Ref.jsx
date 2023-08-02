import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function Ref() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    const renderCount = useRef(0)

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    return (
        <>
            <h1>Render count - {renderCount.current}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}


export default Ref