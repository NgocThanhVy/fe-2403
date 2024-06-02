import React from 'react';
import "../card/person.css";


const PersonDisplay = (props) => {

    return (
        <div className='person'>
            <p>Name:{props?.person?.name}</p>
            <p>Age:{props?.person?.age}</p>
            {/* <p>Slogan:{props?.person?.slogon || "defaul slogan"}</p> */}
            {props.children}
        </div>

    )
}

export default PersonDisplay;