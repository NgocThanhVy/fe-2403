import React, { useState } from "react";


const FormComponent = (props) => {
    // const [info, setInfo] = useState("");
    console.log("props", props);

    return (
        <div className="form-page">
            <div className="form-top">
                Name:
                <input
                    type="text"
                    placeholder="your text "
                    value={props.info}
                    onChange={(event) => props.handle(event.target.value)}
                />
            </div>
        </div>

    )

}

export default FormComponent;