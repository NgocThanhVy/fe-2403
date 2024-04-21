import React, { useState } from "react";
import "./styles/fragment.css";

function Question2() {
    const [count, setCount] = useState(0);

    const handleCopy = (event) => {
        event.preventDefault();

        alert("Don't copy it!");

        setCount(prev => prev + 1);
    }
    return (
        <>

            <p className="coppy" onCopy={handleCopy}>
                Copy me!
            </p>

            <p className="coppy">
                Copy count: {count}
            </p>
        </>
    )

}

export { Question2 };