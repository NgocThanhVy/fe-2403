import React, { useState } from "react";
import "./styles/fragment.css";

function Form() {
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [aboutYou, setAboutYou] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState([])

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
        console.log("gender", gender)
    }
    const handleSubmit = () => {
        setIsSubmit(true);
        alert(`
        FullName: ${fullName}, 
        Age: ${age},  
        Gender: ${gender} 
        Skill: ${selectedSkill}, 
        About you: ${aboutYou}
        `)

    }
    const handleClear = () => {
        setIsSubmit(false);
        setFullName('');
        setAge('');
        setAboutYou('');
        setGender('');
        setSelectedSkill([]);
    }
    const handleCheckSkill = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedSkill([...selectedSkill, value]);
        } else {
            setSelectedSkill(selectedSkill.filter((param) => param !== value));
        }
    };
    // const display = (
    //     <div className="form-submit-result">
    //         <h2>Sample Form Container</h2>
    //         <div>
    //             <p>Full Name: {fullName}</p>
    //         </div>
    //         <div>
    //             <p>Age: {age}</p>
    //         </div>
    //         <div>
    //             <p>Render</p>
    //             <select className="input-render" name="myRender"
    //                 value={gender}
    //                 onChange={onChangeGenner}
    //                 disabled>
    //                 {/* <option value="default">Select Render</option> */}
    //                 <option value="Select Gender" selected>Select Gender</option>
    //                 <option value="Male">Male</option>
    //                 <option value="Female">Female</option>
    //                 <option value="Others">Others</option> </select>
    //         </div>
    //         <div>
    //             <p>Skill</p>
    //             <div>
    //                 <ul>
    //                     {selectedSkill.map((select) => (select))}
    //                 </ul>
    //             </div>
    //         </div>
    //         <div>
    //             <p>About you</p>
    //             <p>{aboutYou}</p>
    //         </div>
    //     </div >
    // )
    return (
        <>
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
                    <select
                        className="input-render"
                        name="myrender"
                        className="input-render"
                        onChange={onChangeGenner}
                        value={gender}
                    >

                        <option value="Select Gender" selected>Select Gender</option>

                        <option value="Male">Male</option>

                        <option value="Female">Female</option>

                        <option value="Others">Others</option>
                    </select>

                </div>
                <div>
                    <div>
                        <p>Skill</p>
                        <label>
                            <input
                                type="checkbox"
                                name="select"
                                value="Programming"
                                checked={selectedSkill.includes('Programming')}
                                onChange={handleCheckSkill}
                            />
                            Programming
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="select"
                                value="Development"
                                checked={selectedSkill.includes('Development')}
                                onChange={handleCheckSkill}
                            />
                            Development
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="select"
                                value="Design"
                                checked={selectedSkill.includes('Design')}
                                onChange={handleCheckSkill}
                            />
                            Design
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="select"
                                value="Testing"
                                checked={selectedSkill.includes('Testing')}
                                onChange={handleCheckSkill}
                            />
                            Testing
                        </label>


                    </div>
                </div>
                <div>
                    <p>About you.</p>
                    <textarea className="input-desc"
                        rows="5"
                        cols="30"
                        name="comment"
                        placeholder="Describe your past experience and skills"
                        value={aboutYou}
                        onChange={onChangeAboutYou}
                    />
                </div>
                <div className="button">
                    <button className="btn-submit"
                        onClick={handleSubmit}>Submit </button>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </div >
            {/* {isSubmit ? display : null} */}
        </>

    )
}

export { Form };