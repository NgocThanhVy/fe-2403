import React, { useState } from "react";

import FormComponent from "./FormComponent";
import ResultComponent from "./ResultComponent";


const InfoPage = () => {

    const [info, setInfo] = useState("");
    const onhandle = (info) => {
        setInfo(info);
    };

    return (
        <div className="form-page">
            <FormComponent handle={onhandle} />
            <ResultComponent data={info} />
        </div>
    )
}

export default InfoPage;