import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import moment from "moment";
import { useSelector } from "react-redux";


const UserList = () => {
  let data = useSelector((state) => state.userInfo.value);
  let [UserList, setUserList] = useState([]);
  let [requestList, setRequestList] = useState([]);
  let [friendList, setFriendList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const UserListRef = ref(db, "users/");
    onValue(UserListRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid != item.key) {
          array.push({ ...item.val(), uid: item.key });
        }
      });
      setUserList(array);
    });
  }, []);

  useEffect(() => {
    const friendRequest = ref(db, "friendRequest/");
    onValue(friendRequest, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
      array.push(item.val().senderId + item.val().receiverId)
      });
     setRequestList(array)
    });
  }, []);
  useEffect(() => {
    const friendRequest = ref(db, "friendList/");
    onValue(friendRequest, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
      array.push(item.val().senderId + item.val().receiverId)
      });
     setFriendList(array);
    });
  }, []);

  let handleRequest = (item) => {
    set(push(ref(db, "friendRequest/")), {
      senderId: data.uid,
      senderName: data.displayName,
      senderEmail: data.email,
      receiverId: item.uid,
      receiverName: item.username,
      receiverEmail: item.email,
      date: `${new Date().getFullYear()}/${
        new Date().getMonth() + 1
      }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
    }).then(() => {
      alert("success");
    });
  };

  return (
    <div>
      <div className="w-[344px]  shadow-xl rounded-[20px] px-5 ">
        <div className="flex justify-between items-center ">
          <h2 className="text-[20px] leading-[30px] font-semibold ">
            User List
          </h2>
          <BsThreeDotsVertical />
        </div>
        <div className="w-full h-[451px]  rounded-[20px] overflow-y-scroll">
          {UserList.map((item) => (
            <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
              <div className="flex items-center gap-[14px]">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={item ? item.image : AstImg}
                  alt="AstImg"
                />

                <div>
                  <h3 className="text-[18px] leading-[30px] font-semibold ">
                    {item.username}
                  </h3>
                  <p className="text-[14px] leading-[30px] font-[500] text-gray-500">
                    {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
                  </p>
                </div>
              </div>
              {friendList.includes(data.uid + item.uid) ||
              friendList.includes(item.uid + data.uid) ? (
                <button className="bg-blue-500 px-2 py-1 text-white font-normal text-[18px] rounded-[5px]">
                  F
                </button>
              ) : requestList.includes(data.uid + item.uid) ||
                requestList.includes(item.uid + data.uid) ? (
                <button className="bg-blue-500 px-2 py-1 text-white font-normal text-[18px] rounded-[5px]">
                  p
                </button>
              ) : (
                <button
                  onClick={() => handleRequest(item)}
                  className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
