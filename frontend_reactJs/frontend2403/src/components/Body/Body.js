import React, { useState } from "react";
import BodyH from "./BodyH";
import BodyV from "./BodyV";

const Body = () => {
    const [item, setBody] = useState(true);
    const bodyRender = () => {
        if (item) return <BodyH />
        return <BodyV />
    }


    return (
        <div className="body">

            <button onClick={() => setBody(true)}>Body way 1</button>
            <button onClick={() => setBody(false)}>Body way 2</button>
            <h1>Header</h1>
            {/* {item ? <BodyH /> : <BodyV />} */}
            {/* <BodyH />
            <BodyV /> */}
            {bodyRender()}
            <h1>Footer</h1>
        </div>


    )
}

export default Body;