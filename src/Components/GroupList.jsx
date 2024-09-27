import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { FiSearch } from "react-icons/fi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { getDatabase, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const GroupList = () => {
  let data = useSelector((state) => state.userInfo.value);
  let [group, setGroup] = useState(" ");
  let [groupModal, setGroupModal] = useState(false);
  let [groupName, setGroupName] = useState(" ");
  let [error, setError] = useState(" ");

  const db = getDatabase();

  let handleSearch = (e) => {
    let search = GroupList.filter((item) => item.name.includes(e.target.value));
  };

  let handleGroupCreate = (e) => {
    setGroup(e.target.value);
    setError(" ");
  };

  let handleGroupSubmit = () => {
    if (!group) {
      setError("*Group Name is required!");
    }
    if (group) {
      set(push(ref(db, "groupList/")), {
        name: groupName,
        adminId: data.uid,
        admin: data.displayName,
      }).then(() => {
        setGroupModal(false);
      });
    }

    // if (! groupModal) {
    //   setError("Invalid Group")
    // } else {
    //   // Add selected group to user's group list
    // }
  };
  return (
    <>
      <div className="relative w-[427px] h-[59px] shadow-xl rounded-[20px]">
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
      <div className="w-[427px]  shadow-xl rounded-[20px] mt-[43px] px-5 ">
        <div className="flex justify-between items-center ">
          <h2 className="text-[20px] leading-[30px] font-semibold ">
            Groups List
          </h2>
          {groupModal ? (
            <IoCloseCircleSharp
              className="cursor-pointer text-red-500"
              size={25}
              onClick={() => setGroupModal(false)}
            />
          ) : (
            <BsThreeDotsVertical
              className="cursor-pointer "
              onClick={() => setGroupModal(true)}
            />
          )}
        </div>
        <div className="w-full h-[451px]  rounded-[20px] overflow-y-scroll">
          {groupModal ? (
            <div className="px-3 py-5 relative">
              <h2 className="text-[20px] text-primary font-Nunito">
                Create Group
              </h2>
              <input
                onChange={
                    (e) => setGroupName(e.target.value)
                }
                className="border w-full py-2 px-4 mt-3 relative outline-none"
                type="text"
                placeholder="Create New Group"
              />
              {error && (
                <p className="text-red-400 text-[14px] font-normal absolute right-[0]">
                  {error}
                </p>
              )}
              <div>
                <IoIosSend
                  onClick={handleGroupSubmit}
                  size={20}
                  className="absolute bg-primary text-white w-[43px] h-[43px] right-[12px] bottom-[20px] cursor-pointer hover:bg-white hover:text-primary border"
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
              <div className="flex items-center gap-[14px]">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={AstImg}
                  alt="AstImg"
                />

                <div>
                  <h3 className="text-[18px] leading-[30px] font-semibold ">
                    Friends Reunion
                  </h3>
                  <p className="text-[14px] leading-[30px] font-[500] text-gray-500">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <button className="bg-primary px-5 py-1 text-white font-normal text-[18px] rounded-[5px]">
                Join
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GroupList;
