import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import counterReducer from "./counterSlice";
import colorReducer from "./colorSlice";
import userPage2Slice from "./userPage2Slice";
import userPage1Slice from "./userPage1Slice";


export default configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer,
        color: colorReducer,
        userPage2: userPage2Slice,
        userPage1: userPage1Slice,
    },
});