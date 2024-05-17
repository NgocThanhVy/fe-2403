import React, { useState } from "react";
import "./styles/fragment.css";

function Fragment() {
    const [count, setCount] = useState(1);
    const [user, setUserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState('default');
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

    const onChangeFullName = (event) => {
        setFullName(event.target.value)

    }

    const onChangeAge = (event) => {
        setAge(event.target.value)
    }
    const onChangeAboutYou = (event) => {
        setAboutYou(event.target.value)
    }
    const onChangeGenner = (event) => {
        setGender(event.target.value)
        console.log(gender)
    }
    const handleSubmit1 = () => {
        setIsSubmit(true)
    }
    const handleClear = () => {
        setIsSubmit(false)
        setFullName('')
        setAge('')
        setAboutYou('')
        setGender('')
        setSelectedRoles([])
    }
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedRoles([...selectedRoles, value]);
        } else {
            setSelectedRoles(selectedRoles.filter((role) => role !== value));
        }
    };
    const content = (
        <div className="form-submit-result">
            <h2>Sample Form Container</h2>
            <div>
                <p>Full Name: {fullName}</p>
            </div>
            <div>
                <p>Age: {age}</p>
            </div>
            <div>
                <p>Render</p>
                <select className="input-render" name="myDrop"
                    value={gender}
                    onChange={onChangeGenner}
                    disabled>
                    <option value="default">Select Render</option>
                    <option value="giatri2">Male</option>
                    <option value="giatri3">Female</option>
                    <option value="giatri4">Others</option> </select>
            </div>
            <div>
                <p>Skill</p>
                <div>
                    <ul>
                        {selectedRoles.map((role) => (
                            <li key={role}>{role}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <p>About you</p>
                <p>{aboutYou}</p>
            </div>
        </div >
    )
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


            <div className="form-submit">
                <h2>Sample Form Container</h2>
                <div>
                    <p>Full Name</p>
                    <input className="input-fullname" placeholder="Enter your name"
                        onChange={onChangeFullName}
                        value={fullName}
                    />
                </div>
                <div>
                    <p>Age</p>
                    <input className="input-age" placeholder="Enter your age"
                        onChange={onChangeAge} value={age} />
                </div>
                <div>
                    <p>Render</p>
                    <select className="input-render" name="myDrop"
                        // placeholder={"Select Gender"}
                        onChange={onChangeGenner}
                        value={gender}
                    >
                        <option value="default">Select Render</option>
                        <option value="giatri1">Male</option>
                        <option value="giatri2">Female</option>
                        <option value="giatri3">Others</option>

                    </select>
                </div>
                <div>
                    <div>
                        <p>Skill</p>
                        <label>
                            <input
                                type="checkbox"
                                name="roles"
                                value="Programming"
                                checked={selectedRoles.includes('Programming')}
                                onChange={handleCheckboxChange}
                            />
                            Programming
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="roles"
                                value="Development"
                                checked={selectedRoles.includes('Development')}
                                onChange={handleCheckboxChange}
                            />
                            Development
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="roles"
                                value="Design"
                                checked={selectedRoles.includes('Design')}
                                onChange={handleCheckboxChange}
                            />
                            Design
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="roles"
                                value="Testing"
                                checked={selectedRoles.includes('Testing')}
                                onChange={handleCheckboxChange}
                            />
                            Testing
                        </label>


                    </div>
                </div>
                <div>
                    <p>About you.</p>
                    <textarea className="input-desc"
                        rows="5" cols="30"
                        name="comment"
                        placeholder="Describe your past experience and skills"
                        onChange={onChangeAboutYou}
                    ></textarea>
                </div>
                <div className="button">
                    <button className="btn-submit"
                        onClick={handleSubmit1}>Submit</button>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </div >
            {isSubmit ? content : null}
        </>

    );
}

export { Fragment };