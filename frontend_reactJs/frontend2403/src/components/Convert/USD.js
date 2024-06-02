import React from "react";

const USD = (props) => {
    return (
        <div>
            <label>USD:</label>
            <input type="Number"
                value={props.value}
                onChange={(event) => props.handleInput(event.target.value)}
                disabled={props.disabled}

            />
        </div>
    )
}

export default USD;