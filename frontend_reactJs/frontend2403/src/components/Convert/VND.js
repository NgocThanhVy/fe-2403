import React from "react";

const VND = (props) => {
    return (
        <div>
            <label>VND:</label>
            <input type="Number"
                value={props.value}
                onChange={(event) => props.handleInput(event.target.value)}

            />
        </div>
    )
}

export default VND;