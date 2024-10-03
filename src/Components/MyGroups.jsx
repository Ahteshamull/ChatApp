import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

const MyGroups = () => {
  let data = useSelector((state) => state.userInfo.value);
  const db = getDatabase();
  let [groupData, setGroupData] = useState([]);
  useEffect(() => {

    const groupRef = ref(db, "groupList/");
    onValue(groupRef, (snapshot) => {
      const Array = [];
      snapshot.forEach((item) => {
        if (data.displayName === item.val().admin) {
          Array.push(item.val());
        }
      });
      setGroupData(Array);
    });
  }, [db,data.displayName]);

  return (
    <div className="w-[344px]  shadow-xl rounded-[20px] px-5 mt-[43px]">
      <div className="flex justify-between items-center ">
        <h2 className="text-[20px] leading-[30px] font-semibold ">My Groups</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[462px]  rounded-[20px] overflow-y-scroll">
        {groupData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]"
          >
            <div className="flex items-center gap-[14px]">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={AstImg}
                alt="AstImg"
              />

              <div>
                <h3 className="text-[18px] leading-[30px] font-semibold ">
                  {item.name}
                </h3>
                <p className="text-[14px] leading-[30px] font-[500] text-gray-500">
                  {item.admin}
                </p>
              </div>
            </div>
            <h4 className="text-[10px] font-normal leading-4 text-black/50">
              {item.date}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGroups;
