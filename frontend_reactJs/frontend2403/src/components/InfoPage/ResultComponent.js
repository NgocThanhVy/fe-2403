import React, { useState } from "react";
import InputComponent from "./InputComponent";

const ResultComponent = (props) => {

    return (
        <div>
            Name: {props.data}

        </div>
    )
}

export default ResultComponent;