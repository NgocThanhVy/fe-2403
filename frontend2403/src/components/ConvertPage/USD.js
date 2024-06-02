import React from "react";

const USD = (props) => {
    return (
        <div>
            <label>USD:</label>
            <input
                type="number"
                value={props.value}

                onChange={(event) => props.setData(event.target.value)}
            />
        </div>
    )
}

export default USD;