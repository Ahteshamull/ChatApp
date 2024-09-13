import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';
import moment from 'moment';

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
                  alt=""
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
                    Friends
                  </p>
                </div>
              </div>
              <h4 className="text-[10px] font-normal leading-4 text-black/50">
                {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendList