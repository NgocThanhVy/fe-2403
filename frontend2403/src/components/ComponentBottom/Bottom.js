import React from "react";


const Bottom = (props) => {
    return (
        <div className="form-page">
            <h1>Bottom</h1>
            <div>
                <textarea
                    type="text"
                    placeholder="your text "
                    rows={10}
                    cols={50}
                    value={props.data}
                />
            </div>

        </div>
    )
}

export default Bottom;