import React, { useState } from "react";
import "./styles/fragment.css";

function Fragment() {
    const [count, setCount] = useState(1);
    const [user, setUserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [aboutYou, setAboutYou] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState([])
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


    return (
        <>
            <h1 className={`heading ${count % 2 === 0 ? "odd" : "even"}`}>Count:{count}</h1>
            <h1 className="heading">
                <button className="btn btn-incre" onClick={increase} disabled={count >= 10}>Increase count
                    +</button>
            </h1>
            <h1 className="heading">
                <button className="btn btn-decr" onClick={decrease} disabled={count <= 0}>Decrease count -</button>
            </h1>


        </>

    );
}

export { Fragment };