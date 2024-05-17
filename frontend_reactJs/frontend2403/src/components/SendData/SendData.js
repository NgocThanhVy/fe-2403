import React, { useState } from "react";

const SendData = (props) => {
    // const [info, setInfo] = useState("");
    //const [data, setData] = useState("");

    return (
        <div>
            <label>Name:</label>
            <input type="text"
                value={props.info}
                onChange={(event) => props.handleClick(event.target.value)}
            />
            {/* <button onClick={() => }>Send</button> */}
        </div>
    )
}

export default SendData;