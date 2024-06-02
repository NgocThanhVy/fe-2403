import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayoutRoot from 'components/common/LayoutRoot';
import Login from 'components/common/Login';
import Register from 'components/common/Register';
import UserDetail from 'components/UserDetail';
import UserList from 'components/UserList';
import UserCreate from 'components/UserList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        path: "userlist",
        element: <UserList />,
      },
      {
        path: "user/:id",
        element: <UserDetail />,
      },
      {
        path: "user/create",
        element: <UserCreate />,
      },
     
      
    ],

    
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
