import React, { useState } from "react";
import "./homepage.css";
import Header from "./Header";
import Footer from "./Footer";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";


const HomePage = () => {
    const [bodyVisible, setBodyVisible] = useState(1);

    const bodyRendering = () => {
        if (bodyVisible === 1) {
            return <Body1 />;
        } else if (bodyVisible === 2) {
            return <Body2 />;
        }
        return <Body3 />;
    };
    return (
        <div className="homepage">
            <div>
                <button onClick={() => setBodyVisible(1)}>Display way 1</button>
                <button onClick={() => setBodyVisible(2)}>Display way 2</button>
                <button onClick={() => setBodyVisible(3)}>Display way  3</button>
            </div>
            <Header />
            {bodyRendering()}
            <Footer />

        </div>


    )

}

export default HomePage;