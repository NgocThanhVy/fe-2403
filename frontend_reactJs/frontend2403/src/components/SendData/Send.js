import React, { useState } from "react";
import SendData from "./SendData";
import SendDataItem from "./SendDataItem";

const Send = () => {
    const [info, setInfo] = useState("")

    const onchange = (info) => {
        setInfo(info)
    };

    return (
        <div>
            <SendData handleClick={onchange} />
            <SendDataItem data={info} />

        </div>
    )
}

export default Send;