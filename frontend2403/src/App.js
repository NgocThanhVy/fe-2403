import React, { useEffect, useState } from "react";
import "./App.css";
import CardCoponent from "./components/ComponentA";
import CardComponent from "./components/ComponentA";
import Card1 from "./components/card1/card1";
import CardGroup from "./components/card/CardGroup";
import { Fragment } from "./components/Fragment";
import { Form4 } from "./components/Form4";
import { Question } from "./components/Question";
import FormPage from "./components/ComponentBottom/FormPage";
import InfoPage from "./components/InfoPage/InfoPage";
import Message from "./components/ConvertPage/Message";
import LifeCycle from "./components/LifeCycle";
import OuterComponent from "./components/LifeCycle/OuterComponent";


const App = () => {
  console.log("....App Component.....")
  const [count, setCount] = useState(0);
  const [data, setData] = useState();


  useEffect(() => {
    console.log(useEffect)
    async function fetchData() {
      const data = await fetch("https://reqres.in/api/users?page=2");
      const result = await data.json();
      setData(result);
      console.log("result", result);

    }
    fetchData();
  }, [])

  return (
    <div>
      <OuterComponent />
      {/* <FormPage />
      <InfoPage />
      < Message /> */}
      {/* <CardComponent />
      {/* <Card1 /> */}
      {/* <CardGroup /> */}
      {/* <Fragment /> */}
      {/* <Form4 />  */}
      {/* <Question /> */}

      {/* <LifeCycle count={count} /> */}
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Update Counter</button> */}


      {/* {
        data?.data?.map((item, index) => {
          return (
            <div key={item.id}>
              <p>Email: {item.email}</p>
              <p>FirstName: {item.first_name}</p>
              <p>Avt: src={item.avatar} alt="avt"</p>
            </div>
          );
        })} */}


    </div >
  );
};

export default App

