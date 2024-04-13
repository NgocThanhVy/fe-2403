import React, { useState } from "react";
import "./styles/fragment.css";

function Fragment() {
    const [count, setCount] = useState(1);
    const [user, setUserName] = useState("");
    const [texts, setText] = useState("");
    const increase = () => {
        setCount((prevState) => {

            return prevState + 1;

        }
        );

    }

    const decrease = () => {
        setCount((nextState) => {

            return nextState - 1;

        });
    };

    const onChangeUserName = (event) => {
        setUserName(event.target.value)
    };
    // console.log("userName", user)

    const handleSubmit = () => {
        alert(user)
    };

    const onChangeSubmit = (event) => {
        setText(event.target.value)
    }
    const handleS = () => {
        alert("hello" + " " + texts)
        console.log(texts)
    };

    return (
        <>
            <h1 className={`heading ${count % 2 === 0 ? "odd" : "even"}`}>Count:{count}{""}</h1>
            <h1 className="heading">
                <button className="btn btn-incre" onClick={increase} disabled={count >= 10}>Increase count
                    +</button>
            </h1>
            <h1 className="heading">
                <button className="btn btn-decr" onClick={decrease} disabled={count === 0}>Decrease count -</button>
            </h1 >


            <div className="form">
                <div>
                    <label>User name:</label>
                    <input
                        placeholder="typing..."
                        onChange={onChangeUserName}
                        value={texts}
                    />
                </div>
                <button onClick={handleS} >Button</button>
            </div>

            <div className="form">
                <div>
                    <p>User name: {user}</p>

                    <input
                        placeholder="typing..."
                        onChange={onChangeUserName}
                        value={user}
                    />
                </div>



            </div>

        </>

    );
}

export { Fragment };