import React, { useState } from "react";
import ResultComponent from "./ResultComponent";
import InputComponent from "./InputComponent";

const InfoPage = () => {
    const [data, setData] = useState("");
    const onClick = (inputValue) => {
        setData(inputValue);
    };
    return (
        <div>
            <InputComponent handleClick={onClick} />
            <ResultComponent data={data} />
        </div>

    );

};

export default InfoPage;