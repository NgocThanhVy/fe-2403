import React, { useState } from "react";
import InnerComponent2 from "./InnerComponent2";


const InnerComponent = (props) => {

    return (
        <div>
            <InnerComponent2 list={props.list} handleClick={props.handleClick} />
        </div>
    )
};

export default InnerComponent;