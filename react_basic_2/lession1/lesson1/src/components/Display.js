import { Button } from "@mui/material";
import React from "react";

const Display = (props) => {
    console.log({ props });
    return (
        <>

            <h1>Intro: {props.intro}</h1>
            <h1>Count: {props.count}</h1>


        </>
    );
};

export default Display;