import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from './store/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserList from './components/UserList/UserList';
import PostLog from './components/PostLog/PostLog';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "user-list",
    element: <UserList />
  },
  {
    path: "post-log",
    element: <PostLog />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "sign-up",
    element: <SignUp />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
    </React.StrictMode>

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

