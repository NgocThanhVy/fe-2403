import React from "react";

const PersonsItem = (props) => {
    return (
        <div className='person'>
            <p>Name:{props?.persons?.Name}</p>
            <p>Age:{props?.persons?.Age}</p>

            <p> Slogan:{props?.persons?.Slogan || "default"}</p>
            {props.children}


        </div>

    )

}


export default PersonsItem;