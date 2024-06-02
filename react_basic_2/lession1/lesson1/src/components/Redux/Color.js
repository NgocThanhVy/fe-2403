import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../store/colorSlice";
import { changeFontSize } from "../../store/colorSlice";

const Color = () => {
    const dispatch = useDispatch();
    const color = useSelector((store) => store.color.color);
    const fontSize = useSelector((store) => store.color.fontSize);

    return <div>
        <p style={{ color: color }}>lorem issum </p>
        <button onClick={() => dispatch(change())}>Change</button>

        <p style={{ fontSize: fontSize }}>lorem issum </p>
        <button onClick={() => dispatch(changeFontSize())}>Change</button>
    </div>
}

export default Color;