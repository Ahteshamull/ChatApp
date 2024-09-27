import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import moment from "moment";
import { useSelector } from "react-redux";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";

import "react-toastify/dist/ReactToastify.css";

const UserList = () => {
  let data = useSelector((state) => state.userInfo.value);
  let [userList, setUserList] = useState([]);
  let [requestList, setRequestList] = useState([]);
  let [friendList, setFriendList] = useState([]);
  let [blocklist, setBlockList] = useState([]);
  let [searchList, setSearchList] = useState([]);
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
        array.push(item.val().senderId + item.val().receiverId);
      });
      setRequestList(array);
    });
  }, []);
  useEffect(() => {
    const friendRequest = ref(db, "friendList/");
    onValue(friendRequest, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().senderId + item.val().receiverId);
      });
      setFriendList(array);
    });
  }, []);

  useEffect(() => {
    const blockList = ref(db, "blocklist/");
    onValue(blockList, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().blockById + item.val().blockedUserId);
      });
      setBlockList(array);
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
      toast.success("🦄Friend Request Send", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
  };

  let handleSearch = (e) => {
    let search = userList.filter((item) =>

     
      item.username.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchList(search);
  };



  return (
    <div>
      <div className="relative w-[344px] h-[59px] shadow-xl rounded-[20px]">
        <input
          onChange={handleSearch}
          className=" w-full h-full pl-[78px] items-center  rounded-[20px]"
          type="text "
          placeholder="Search"
        />
        <FiSearch
          size={19}
          className="absolute top-[50%] left-[23px] translate-y-[-50%] "
        />
        <BsThreeDotsVertical className="absolute top-[50%] right-[23px] translate-y-[-50%]" />
      </div>
      <div className="w-[344px]  shadow-xl rounded-[20px] px-5  mt-[43px]">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        {/* Same as */}
        <ToastContainer />
        <div className="flex justify-between items-center ">
          <h2 className="text-[20px] leading-[30px] font-semibold ">
            User List
          </h2>
          <BsThreeDotsVertical />
        </div>
        <div className="w-full h-[451px]  rounded-[20px] overflow-y-scroll">
          {searchList.length > 0
            ? searchList.map((item) => (
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
                  {blocklist.includes(data.uid + item.uid) ||
                  blocklist.includes(item.uid + data.uid) ? (
                    <button className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]">
                      Blocked
                    </button>
                  ) : friendList.includes(data.uid + item.uid) ||
                    friendList.includes(item.uid + data.uid) ? (
                    <button className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]">
                      Friends
                    </button>
                  ) : requestList.includes(data.uid + item.uid) ||
                    requestList.includes(item.uid + data.uid) ? (
                    <button className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]">
                      Pending
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRequest(item)}
                      className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]"
                    >
                      Add
                    </button>
                  )}
                </div>
              ))
            : userList.map((item) => (
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
                  {blocklist.includes(data.uid + item.uid) ||
                  blocklist.includes(item.uid + data.uid) ? (
                    <button className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]">
                      Blocked
                    </button>
                  ) : friendList.includes(data.uid + item.uid) ||
                    friendList.includes(item.uid + data.uid) ? (
                    <button className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]">
                      Friends
                    </button>
                  ) : requestList.includes(data.uid + item.uid) ||
                    requestList.includes(item.uid + data.uid) ? (
                    <button className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]">
                      Pending
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRequest(item)}
                      className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]"
                    >
                      Add
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
