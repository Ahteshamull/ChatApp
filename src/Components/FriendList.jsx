import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { useDispatch, useSelector,  } from "react-redux";
import { useLocation } from "react-router-dom";
import { BsMessenger } from "react-icons/bs";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import moment from "moment";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { chatInfo } from "../slices/chatSlice";

const FriendList = () => {
  let dispatch = useDispatch();
  let location = useLocation();
  let data = useSelector((state) => state.userInfo.value);

  const [friendList, setFriendList] = useState([]);
  let [searchList, setSearchList] = useState([]);
  let [searchBar, setSearchBar] = useState(false);

  const db = getDatabase();
  useEffect(() => {
    const friendRef = ref(db, "friendList/");
    onValue(friendRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (
          data.uid == item.val().senderId ||
          data.uid == item.val().receiverId
        ) {
          array.push({ ...item.val(), key: item.key });
        }
      });
      setFriendList(array);
    });
  }, []);

  const handleBlock = (item) => {
    if (data.uid == item.senderId) {
      set(push(ref(db, "blocklist/")), {
        blockById: item.senderId,
        blockBy: item.senderName,
        blockedUserId: item.receiverId,
        blockedUser: item.receiverName,
        date: `${new Date().getFullYear()}/${
          new Date().getMonth() + 1
        }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
      }).then(() => {
        remove(ref(db, "friendList/" + item.key)).then(() => {
          toast.success("🤬Blocked!", {
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
      });
    } else {
      set(push(ref(db, "blocklist/")), {
        blockById: item.receiverId,
        blockBy: item.receiverName,
        blockedUserId: item.senderId,
        blockedUser: item.senderName,
        date: `${new Date().getFullYear()}/${
          new Date().getMonth() + 1
        }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
      }).then(() => {
        remove(ref(db, "friendList/" + item.key)).then(() => {
          toast.success("🤬Blocked!", {
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
      });
    }
  };
  let handleSearch = (e) => {
    let search = friendList.filter(
      (item) =>
        item.receiverName ||
        senderName.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchList(search);
  };

  let handleChat = (item) => {
    if (data.uid === item.senderId) {
      
      dispatch(chatInfo({ name: item.receiverName, id: item.receiverId }));
     
    }
    else {
       dispatch(chatInfo({ name: item.senderName, id: item.senderId }));
    }
  }
  return (
    <div>
      <div className="relative w-[344px] h-[59px] shadow-xl rounded-[20px] z-[-1]">
        <input
       
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
      <div className="w-[344px]  shadow-xl rounded-[20px] px-5 mt-[43px] ">
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
          <h2 className="text-[20px] leading-[30px] font-semibold ">Friends</h2>
          <BsThreeDotsVertical className="cursor-pointer" />
        </div>
        {searchBar ? (
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
        ) : (
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
                        {data.uid == item.senderId ? (
                          <h3 className="text-[18px] leading-[30px] font-semibold ">
                            {item.receiverName}
                          </h3>
                        ) : (
                          <h3 className="text-[18px] leading-[30px] font-semibold ">
                            {item.senderName}
                          </h3>
                        )}
                        <p className="text-[14px] leading-[30px] font-[500] text-gray-500">
                          {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleBlock(item)}
                      className="bg-primary px-5 py-1 text-white font-normal text-[18px] rounded-[5px]"
                    >
                      Block
                    </button>
                  </div>
                ))
              : friendList.map((item) => (
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={item ? item.image : AstImg}
                        alt="AstImg"
                      />

                      <div>
                        {data.uid == item.senderId ? (
                          <h3 className="text-[18px] leading-[30px] font-semibold ">
                            {item.receiverName}
                          </h3>
                        ) : (
                          <h3 className="text-[18px] leading-[30px] font-semibold ">
                            {item.senderName}
                          </h3>
                        )}
                        <p className="text-[14px] leading-[30px] font-[500] text-gray-500">
                          {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
                        </p>
                      </div>
                    </div>
                    {location.pathname == "/massage" ? (
                      <button
                        onClick={() => handleChat(item)}
                        className="bg-primary px-3 py-2 text-white font-normal text-[18px] rounded-[5px]"
                      >
                        <BsMessenger />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBlock(item)}
                        className="bg-primary px-5 py-1 text-white font-normal text-[18px] rounded-[5px]"
                      >
                        Block
                      </button>
                    )}
                  </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendList;
