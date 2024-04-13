import React, { useState } from "react";


function FormSubmit() {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [inputAddress, setInputAddress] = useState("");
    const [selectedObject, setSelectedObject] = useState([])
    const [selectedObjects, setSelectedObjects] = useState([])
    const [date, setDate] = useState(null);
    const [file, setFile] = useState('empty')
    const [isSubmit, setIsSubmit] = useState(false);

    const onChangeFullName = (event) => {
        setFullName(event.target.value)
    };

    const onChangeUserName = (event) => {
        setUserName(event.target.value)

    };

    const onChangePassword = (event) => {
        setPassword(event.target.value)

    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value)

    };

    const onChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)

    };


    const onChangeinputAddress = (event) => {
        setInputAddress(event.target.value)
    };

    const handleInputObject = (event) => {
        setSelectedObject(event.target.value)
    };

    const handleInputObjects = (event) => {
        const value = event.target.value
        const isChecked = event.target.checked

        if (isChecked) {
            setSelectedObjects([...selectedObjects, value])
        } else {
            setSelectedObjects(selectedObjects.filter((param) => param !== value))
        }
    };

    const onChangeDate = (event) => {
        setDate(event.target.value)
    };

    const onChangeFile = (event) => {
        const file = event.target.files[0];

        // Lấy tên file
        const fileName = file.name;

        setFile(fileName);

        console.log(fileName);
    };

    const handleSubmit = () => {
        setIsSubmit(true)
    };

    const display = (
        <div className='form-submit'>
            <h1>Register</h1>
            <p>Please fill in this form to create an account</p>
            <div>
                <p><strong>Full Name: </strong>{fullName}</p>

            </div>
            <div>
                <p><strong>User Name: </strong>{userName}</p>

            </div>
            <div>
                <p><strong>Password: </strong>{password}</p>

            </div>
            <div>
                <p><strong>Email: </strong>{email}</p>

            </div>
            <div>
                <p><strong>Telephone Number: </strong>{phoneNumber}</p>

            </div>

            <div>
                <div>
                    <p><strong>Input Object</strong></p>
                    <label>
                        <input
                            type='radio'
                            checked
                            disabled
                        />
                        {selectedObject}
                    </label>
                </div>
            </div>

            <div>
                <div>
                    <p><strong>Favorite</strong></p>

                    {selectedObjects.map((select) => (
                        <label>
                            <input
                                type="checkbox"
                                name="favorite"
                                checked
                                disabled
                            />{select}
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <p><strong>Address</strong></p>

                <select
                    name='address'
                    onChange={onChangeinputAddress}
                    value={inputAddress}
                    disabled
                >
                    <option value='' selected>Select Address</option>
                    <option value='1'>Long An</option>
                    <option value='2'>Ha Noi</option>
                    <option value='3'>Thanh pho HCM</option>
                </select>
            </div>

            <div>
                <label for='date'><strong>Chọn ngày:</strong></label>

                <input type='date' id='date'
                    name='date' value={date} disabled></input>
            </div>

            <div>

                <label for='file'><strong>Chọn file: </strong></label>

                {/* {file} */}
                {file && <div>{file}</div>}
            </div>

        </div >
    )

    return (
        <>
            <div className="form-submit">
                <h1>Register</h1>
                <p>Please fill in this form to create an account</p>
                <div>
                    <p>Full Name</p>
                    <input className="input-fullname" placeholder="Input your fullname"
                        onChange={onChangeFullName}
                        value={fullName}
                    />
                </div>
                <div>
                    <p>UserName</p>
                    <input className="input-username" placeholder="Input your username"
                        onChange={onChangeUserName}
                        value={userName}
                    />
                </div>
                <div>
                    <p>Password</p>
                    <input className="input-password" placeholder="Input your passsword"
                        onChange={onChangePassword}
                        value={password}
                    />
                </div>
                <div>
                    <p>Email</p>
                    <input className="input-email" placeholder="Input your email"
                        onChange={onChangeEmail}
                        value={email}
                    />
                </div>
                <div>
                    <p>Telephone Number</p>
                    <input className="input-phonenumber" placeholder="Input your phone number"
                        onChange={onChangePhoneNumber}
                        value={phoneNumber}
                    />
                </div>

                <div>
                    <div>
                        <p>Input Object</p>
                        <label>
                            <input
                                type="radio"
                                name="object"
                                value="Student"
                                checked={selectedObject === 'Student'}
                                onChange={handleInputObject}
                            />
                            Student
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="object"
                                value="Teacher"
                                checked={selectedObject === 'Teacher'}
                                onChange={handleInputObject}
                            />
                            Teacher
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Favorite</p>
                        <label>
                            <input
                                type="checkbox"
                                name="objects"
                                value="Badminton"
                                checked={selectedObjects.includes('Badminton')}
                                onChange={handleInputObjects}
                            />
                            Badminton
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="objects"
                                value="Volleyball"
                                checked={selectedObjects.includes('Volleyball')}
                                onChange={handleInputObjects}
                            />
                            Volleyball
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="objects"
                                value="Football"
                                checked={selectedObjects.includes('Football')}
                                onChange={handleInputObjects}
                            />
                            Football
                        </label>
                    </div>
                </div>
                <div>
                    <p>Address</p>
                    <select
                        className="input-address"
                        name="inputAddress"
                        onChange={onChangeinputAddress}
                        value={inputAddress}
                    >
                        <option value="" selected>Select Address</option>
                        <option value="1">Long An</option>
                        <option value="2">Ha Noi</option>
                        <option value="3">Thanh pho HCM</option>
                    </select>
                </div>

                <div>
                    <p for="date">Chọn ngày:</p>
                    <input type="date"
                        className="input-date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={onChangeDate}
                    ></input>
                </div>

                <div>
                    <label for="file">Chọn file:</label>
                    <input type="file"
                        id="file"
                        onChange={onChangeFile}
                    ></input>
                </div>

                <div className="button">
                    <button className="btn-submit"
                        onClick={handleSubmit}>Submit</button>
                </div>
            </div >

            {isSubmit ? display : null}
        </>
    )
}
export { FormSubmit };