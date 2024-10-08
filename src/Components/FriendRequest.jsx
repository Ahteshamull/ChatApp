import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { Bounce, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";
import moment from "moment";

const FriendRequest = () => {
  let data = useSelector((state) => state.userInfo.value);

  const [friendRequestList, setFriendRequestList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const friendRequest = ref(db, "friendRequest/");
    onValue(friendRequest, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().receiverId) {
          array.push({ ...item.val(), key: item.key });
        }
      });
      setFriendRequestList(array);
    });
  }, []);
  let handleFriend = (item) => {
    set(push(ref(db, "friendList/")), {
      ...item,
    })
      .then(() => {
        remove(ref(db, "friendRequest/" + item.key))
        .then(() => {
            toast.success("🤏Accepted!", {
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
        })
      })
  };

  // let handleDelete = (item) => {
  //    if (data.uid == item.re) {
  //   set(ref(db, "users/" + item.key), {
  //     senderId: data.uid,
  //     senderName: data.displayName,

  //     receiverId: item.blockedUserId,
  //     receiverName: item.blockedUser,

  //     date: `${new Date().getFullYear()}/${
  //       new Date().getMonth() + 1
  //     }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
  //   }).then(() => {
  //     remove(ref(db, "friendRequest/" + item.key));
  //   });
  //    } 
  // }

  return (
    <div>
      <div className="w-[427px]  shadow-xl rounded-[20px] px-5  mt-[45px]">
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
            Friends Request
          </h2>
          <BsThreeDotsVertical />
        </div>
        <div className="w-full h-[462px]  rounded-[20px] overflow-y-scroll">
          {friendRequestList.map((item) => (
            <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
              <div className="flex items-center gap-[14px]">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={item ? item.image : AstImg}
                  alt="AstImg"
                />

                <div>
                  <h3 className="text-[18px] leading-[30px] font-semibold ">
                    {item.senderName}
                  </h3>
                  <p className="text-[14px] leading-[30px] font-[500] text-gray-500">
                    {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleFriend(item)}
                className="bg-primary px-5 py-1 text-white font-normal text-[18px] rounded-[5px]"
              >
                Accept
              </button>
              {/* <button
                onClick={() => handleDelete(item)}
                className="bg-primary px-5 py-1 text-white font-normal text-[18px] rounded-[5px]"
              >
                Delete
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
