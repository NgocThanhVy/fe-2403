import React from "react";
import "./App.css";
import CardCoponent from "./components/ComponentA";
import CardComponent from "./components/ComponentA";
import Card1 from "./components/card1/card1";
import CardGroup from "./components/card/CardGroup";
import { Fragment } from "./components/Fragment";

const App = () => {
  const showMessage = () => {
    console.log("hell world");
  }

  const styleOject = {
    color: "white",
    backgroundColor: "red",
    padding: "20px 30px",
    fontSize: "20px",
  };

  const user = {
    firstName: "Đào Tuấn",
    lastName: "Anh",
    showFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  const name = {
    fName: "Đào Tuấn",
    lName: "Anh",
    fullName: "Đào Tuấn Anh",
    showName() {
      return `${this.fullName}`;
    },
  };



  return (
    <div>
      <div className="App">
        <h1>
          Hello World
        </h1>
        <p>My first paragraph</p>
      </div>
      <div>
        <div>
          <h2>DANH SÁCH LỚP HỌC</h2>
          <ol>
            <li>Nguyễn Ngọc Duy</li>
            <li>Tống Quang Anh</li>
            <li>Đinh Thu Loan</li>
            <li>Hà Văn Tiến</li>
            <li>Nguyễn Hải Đăng</li>
            <li>Nguyễn Tiến Quang</li>
            <li>Nguyễn Văn Chiến</li>
          </ol>
        </div>
        <div>
          <ol>
            <li>Cơm trưa
              <ul>
                <li>đậu bắp</li>
                <li></li>
                <li></li>

              </ul>
            </li>
            <li>Tráng miệng</li>

          </ol>
          <p>
            <button type="button" onClick={showMessage}>Show hello world button</button>
          </p>
          <p style={styleOject}>This is text 1</p>
          <p className="text-3">This is text 2</p>
          <p>This is text 3</p>
          <div>Fullname: {user.showFullName()}</div>
          <div>Name: {name.showName()}</div>
        </div>


        <div>

        </div>
      </div>
      <CardComponent />
      {/* <Card1 /> */}
      <CardGroup />
      <Fragment />
    </div >
  )
}

export default App

