import React, { useState } from "react";


const ComponentTop = (props) => {
    const [info, setInfo] = useState("");


    return (
        <div className="form-page">
            <h1>Component Top</h1>
            <div className="form-top">
                <input
                    type="text"
                    placeholder="your text "
                    value={info}
                    onChange={(event) => setInfo(event.target.value)}
                />
                <button onClick={() => props.handleOnclick(info)}>Button</button>
            </div>
        </div>
    )
}

export default ComponentTop;