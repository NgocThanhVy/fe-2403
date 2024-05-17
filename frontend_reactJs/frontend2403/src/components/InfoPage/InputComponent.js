import React, { useState } from "react";

const InputComponent = (props) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <label>Name:</label>
            <input type="text"
                placeholder="Your name here"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={() => props.handleClick(inputValue)}>
                Send dât to parent component (info page)
            </button>
        </div>

    )
}

export default InputComponent;