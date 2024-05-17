import React, { useState } from "react";


const InnerComponent2 = (props) => {


    return (
        <div>
            <button onClick={() => props.handleClick(1)}>Page_1</button>
            <button onClick={() => props.handleClick(2)}>Page_2</button>
            {props?.list?.data?.map((item, index) => {
                return (
                    <div key={item.id}>
                        <p>Email: {item.email}</p>
                        <p>FirstName: {item.first_name}</p>
                        <img src='${.item.avatar}' />
                    </div>
                );
            })}
        </div>
    )
};

export default InnerComponent2;