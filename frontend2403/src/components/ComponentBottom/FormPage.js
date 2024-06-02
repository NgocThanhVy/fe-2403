import React from "react";
import ComponentTop from "./ComponentTop";
import Bottom from "./Bottom";
import { useState } from "react";
import "./FormPage.css";


const FormPage = () => {
    const [info, setInfo] = useState("");
    const onClick = (info) => {
        setInfo(info);
    };


    return (
        <div className="form-page">
            <ComponentTop handleOnclick={onClick} />
            <Bottom data={info} />
        </div>
    )
}

export default FormPage;