import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { getDatabase, ref, onValue } from "firebase/database";
import moment from "moment";
import { useSelector } from "react-redux";

const UserList = () => {
   let data = useSelector((state) => state.userInfo.value);
  let [UserList, setUserList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const UserListRef = ref(db, "users/");
    onValue(
      UserListRef,
      (snapshot) => {
        let array = [];
        snapshot.forEach((item) => {
          if (data.uid != item.key) {
            
            array.push(item.val());
          }
        });
        setUserList(array);
      })
    },
      []);

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
                  src={item.profile_picture}
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
              <button className="bg-primary px-2 py-1 text-white font-normal text-[18px] rounded-[5px]">
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
