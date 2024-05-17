import React, { useState } from "react";
import VND from "./VND";
import USD from "./USD";

const Message = () => {
    const [inputs, setInputs] = useState(0)
    const setData = (data) => {
        setInputs(Number(data))
    }
    let vnd = inputs;
    let usd = inputs + 25000;

    return (
        <div>
            <VND setData={setData} value={vnd} />
            <USD setData={setData} value={usd}
            />
            {usd > 30000 && <alert>Quá lớn</alert>}
            {usd < 24000 && <alert>Quá nhỏ</alert>}



        </div>

    )
}

export default Message;