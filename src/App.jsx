import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Singup from './Pages/Singup';
import Signin from './Pages/Signin';
import firebaseConfig from './FirebaseConfig';
import Home from './Home';
import Layout from './Layout/Layout';
import Notification from './Components/Notification';
import Setting from './Components/Setting';
import Massage from './Components/Massage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Signin />}></Route>
      <Route path="/singin" element={<Singup />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      <Route path="/massage" element={<Massage />}></Route>
      <Route path="/notification" element={<Notification />}></Route>
      <Route path="/setting" element={<Setting />}></Route>
      </Route>
    </>
  )
);

const  App = () => {
  return <RouterProvider router={router} />;
}

export default  App