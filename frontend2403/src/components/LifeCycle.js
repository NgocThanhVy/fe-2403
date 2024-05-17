import React, { useState } from "react";

const LifeCycle = (props) => {
    console.log("....App Component.....")
    const [count, setCount] = useState(0);
    console.log("mouting component...........")
    return (
        <div>
            <h1>LifeCycle demo</h1>
            <h1>{props.count}</h1>
            {/* <button onClick={() => setCount((prev) => prev + 1)}>Update Counter</button> */}
        </div>

    )
}

export default LifeCycle;