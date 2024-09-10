import React, { useEffect, useState } from "react";
import GroupList from "./Components/GroupList";
import FriendList from "./Components/FriendList";
import UserList from "./Components/UserList";
import FriendRequest from "./Components/FriendRequest";
import MyGroups from "./Components/MyGroups";
import BlockedUsers from "./Components/BlockedUsers";
import Notification from "./Components/Notification";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUserInfo } from "./slices/userSlice";

const Home = () => {
 let dispatch = useDispatch()
  const auth = getAuth();
  let [verify, setVerify] = useState(false);
  let navigate = useNavigate();
  let data = useSelector((state) => state.userInfo.value);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(loginUserInfo(user))
       localStorage.setItem("user", JSON.stringify(user));
    } else {
      navigate("/login")
      setVerify(false)
    }
  });
  useEffect(() => {
    if (!data) {
      navigate("/login");
    } else if (!data.emailVerified) {
      setVerify(false);
    } else {
      setVerify(true);
    }
  }, []);

  return (
    <>
      {verify ? (
        <section className="py-8 flex w-full  justify-around">
          <div>
            <GroupList />
            <FriendRequest />
          </div>
          <div>
            <FriendList />
            <MyGroups />
          </div>
          <div>
            <UserList />
            <BlockedUsers />
          </div>
        </section>
      ) : (
        <div className="w-full h-screen bg-primary absolute top-0 left-0 flex justify-center items-center">
          <div className="w-[500px] flex justify-center items-center h-[200px] rounded-[20px] bg-red-400  ">
            <h1 className="text-white text-[30px]">Please verify Your E@mail...!😒</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
