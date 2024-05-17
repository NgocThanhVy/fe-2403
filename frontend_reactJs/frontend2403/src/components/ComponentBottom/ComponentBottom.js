import React from "react";




const ComponentBottom = (props) => {
    return (
        <div className="bottom">
            <h1>Component Bottom</h1>
            <div className="border_top">
                <textarea type="text" placeholder="Hello VTI"
                    value={props.value}
                />

            </div>

        </div>

    );
};

export default ComponentBottom;