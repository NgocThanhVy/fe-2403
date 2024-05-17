import React, { useState } from "react";

function Form4() {

    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [aboutYou, setAboutYou] = useState("");
    const [issubmit, setIsSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState([]);
    const [skill, setSkill] = useState([]);

    const onChangeFullName = (event) => {
        setFullName(event.target.value);

    }

    const onChangeAge = (event) => {
        setAge(event.target.value);

    }

    const handleChangeRender = (event) => {
        setGender(event.target.value)
    }

    const handleChangeAboutYou = (event) => {
        setAboutYou(event.target.value);

    }
    const handleChangeSkill = (event) => {
        const checked = event.target.checked;
        const value = event.target.value;

        setIsChecked(prev => {
            if (checked) {
                return [...prev, value];
            } else {
                return prev.filter(x => x !== value);
            }
        });
    }
    const handleClear = () => {
        setIsSubmit(false);
        setFullName('');
        setAge('');
        setAboutYou('');
        setGender('');
        setSkill([]);
    }
    // console.log("handleClear", handleClear());

    return (
        <div className="form-submit">
            <h2>Sample Form Container</h2>
            <div>
                <p>Full Name</p>
                <input
                    className="input-fullname"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={onChangeFullName}
                />
            </div>
            <div>
                <p>Age</p>
                <input
                    value={age}
                    className="input-age"
                    placeholder="Enter your age"
                    onChange={onChangeAge}
                />
            </div>
            <div>
                <p>Render</p>
                <select
                    className="input-render"
                    value={gender}
                    onChange={handleChangeRender}
                >
                    <option value="Select Render">Select Render</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div>
                <p>Skill</p>
                <label>
                    <input
                        type="checkbox"
                        value={skill}
                        onChange={handleChangeSkill}
                        checked={isChecked}
                    />
                    Programming
                </label>
                <label>
                    <input
                        type="checkbox"
                        value={skill}
                        onChange={handleChangeSkill}
                        checked={isChecked}
                    />
                    Development</label>
                <label>
                    <input
                        type="checkbox"
                        value={skill}
                        onChange={handleChangeSkill}
                        checked={isChecked}
                    /> Design
                </label>

                <label>
                    <input
                        type="checkbox"
                        value={skill}
                        onChange={handleChangeSkill}
                        checked={isChecked}
                    />
                    Testing
                </label>
            </div>
            <div>
                <p>About you.</p>
                <textarea
                    className="input-desc"
                    rows="5"
                    cols="30"
                    name="comment"
                    placeholder="Describe your past experience and skills"
                    value={aboutYou}
                    onChange={handleChangeAboutYou}
                />
            </div>
            <div className="button">
                <button className="btn-submit">Submit</button>
                <button onClick={handleClear}>Clear</button>
            </div>
        </div >
    )
}

export { Form4 };