import React from "react";

const VND = (props) => {

    return (
        <div>
            <label>VNĐ:</label>
            <input
                type="number"
                value={props.value}
                onChange={(event) => props.setData(event.target.value)}
            />
        </div>
    )
}

export default VND;