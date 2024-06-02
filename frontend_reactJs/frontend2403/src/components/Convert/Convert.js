import React, { useState } from "react";
import VND from "./VND";
import USD from "./USD";

const Convert = () => {
    const [inputs, setInputs] = useState(0)
    const handleInput = (input) => {
        setInputs(input);
    }
    let vnd = inputs;
    let usd = inputs * 25000;
    return (
        <div>
            <VND handleInput={handleInput} value={vnd} />
            <USD handleInput={handleInput} value={usd} disabled={usd > 300 || usd < 100} />

            {usd > 300 ? "qua lon" : null}
            {usd < 100 ? "qua nho" : null}

        </div>
    )
}

export default Convert;