import React, { useState } from "react";
import "./styles/fragment.css";

function Question4() {


    const [inputs, setInputs] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState("");


    const capitalize = (inputs) => {
        return String(inputs).charAt(0).toUpperCase() + String(inputs).slice(1)
    }

    const onChangeInputs = (event) => {
        setInputs(capitalize(event.target.value))

    };

    const capitalizeSentence = (sentence) => {
        let words = sentence.split(' ')

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)

        }

        return words.joim('')
    }

    const onSubmits = () => {

        if (!inputs.length) {
            setError("this is not a valid")
        } else {
            setDisplayName(capitalizeSentence(inputs))
            setError('')
        }

    }



    return (
        <>
            <p className="displays"> {displayName}</p>
            <div className="inputs">
                <div>
                    <input className="inputs" placeholder="abc"
                        onChange={onChangeInputs}

                        value={inputs}
                    />
                </div>
                <div>
                    <button onClick={onSubmits}>Button</button>
                </div>
            </div>
        </>

    )
}

export { Question4 };