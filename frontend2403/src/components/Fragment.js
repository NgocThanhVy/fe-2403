import React, { useState } from "react";
import "./styles/fragment.css";

function Fragment() {
    const [count, setCount] = useState(1);
    const [user, setUserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

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
    console.log("userName", user)

    const handleSubmit = () => {
        alert(user)
    };

    const onChangeFullName = () => {

    }

    const onChangeAge = () => {
    }

    const onChangeGenner = () => {
    }
    return (
        <>
            <h1 className={`heading ${count % 2 === 0 ? "odd" : "even"}`}>Count:{count}</h1>
            <h1 className="heading">
                <button className="btn btn-incre" onClick={increase} disabled={count === 10}>Increase count
                    +</button>
            </h1>
            <h1 className="heading">
                <button className="btn btn-decr" onClick={decrease} disabled={count === 0}>Decrease count -</button>
            </h1>

            <div className="form">
                <div className="form_input">
                    <lable>User name:</lable>
                    <input placeholder="Typing your name ....."
                        onChange={onChangeUserName} />

                </div>
                <div className="form-btn">
                    <button onClick={handleSubmit}>Submit form</button>
                </div>
            </div>

            <div>

            </div>

            {/* <div className="form-submit">
                <h2>Sample Form Container</h2>
                <div>
                    <p>Full Name</p>
                    <input className="input-fullname" placeholder="Enter your name"
                        onChange={onChangeFullName} />
                </div>
                <div>
                    <p>Age</p>
                    <input className="input-age" placeholder="Enter your age"
                        onChange={onChangeAge} />
                </div>
                <div>
                    <p>Render</p>
                    <select className="input-render" name="myDrop" placeholder={"Select Gender"}>
                        <option value="">Select Render</option>
                        <option value="giatri2">Male</option>
                        <option value="giatri3">Female</option>
                        <option value="giatri4">Others</option> </select>
                </div>
                <div>
                    <p>Skill</p>
                    <label><input type="checkbox" name="roles" />Programming</label>
                    <lable><input type="checkbox" name="roles" /> Development</lable>
                    <lable><input type="checkbox" name="roles" /> Design</lable>
                    <lable><input type="checkbox" name="roles" /> Testing</lable>
                </div>
                <div>
                    <p>About you.</p>
                    <textarea className="input-desc" rows="5" cols="30" name="comment" placeholder="Describe your past experience and skills"></textarea>
                </div>
                <div className="button">
                    <button className="btn-submit">Submit</button>
                    <button>Clear</button>
                </div>
            </div > */}

        </>

    );
}

export { Fragment };