import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import moment from "moment";

const FriendList = () => {
  let data = useSelector((state) => state.userInfo.value);

  const [friendList, setFriendList] = useState([]);
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
        blockById: data.uid,
        blockBy: data.displayName,
        blockedUserId: item.receiverId,
        blockedUser: item.receiverName,
        date: `${new Date().getFullYear()}/${
          new Date().getMonth() + 1
        }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
      }).then(() => {
        remove(ref(db, "friendList/" + item.key));
      });
    } else {
      set(push(ref(db, "blocklist/")), {
        blockById: data.uid,
        blockBy: data.displayName,
        blockedUserId: item.senderId,
        blockedUser: item.senderName,
        date: `${new Date().getFullYear()}/${
          new Date().getMonth() + 1
        }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
      }).then(() => {
        remove(ref(db, "friendList/" + item.key));
      });
    }
  };

  return (
    <div>
      <div className="w-[344px]  shadow-xl rounded-[20px] px-5 ">
        <div className="flex justify-between items-center ">
          <h2 className="text-[20px] leading-[30px] font-semibold ">Friends</h2>
          <BsThreeDotsVertical />
        </div>
        <div className="w-full h-[451px]  rounded-[20px] overflow-y-scroll">
          {friendList.map((item) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
