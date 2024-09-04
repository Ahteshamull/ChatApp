import React from "react";
import ProfileImg from "../assets/profile.png";
import { FcHome, FcSms } from "react-icons/fc";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { useSelector } from "react-redux";
import { IoMdCloudUpload } from "react-icons/io";

const Sidebar = () => {
  let data = useSelector((state) => state.userInfo.value);
  return (
    <div className=" h-screen py-8 px-9">
      <div className="w-[186px] h-full bg-primary rounded-[20px] ">
        <div className="text-center pt-9">
          <div className="w-[100px] h-[100px] group rounded-full mx-auto overflow-hidden relative">
            <img
              className=" w-full h-full"
              src={data.photoURL}
              alt="ProfileImg"
            />
            <div className="w-full h-full cursor-pointer bg-black/50 opacity-0 group-hover:opacity-100 absolute top-0 left-0 flex justify-center items-center">
              <IoMdCloudUpload size={25} className="text-white " />
            </div>
          </div>
        </div>
        <h2 className="text-[20px] text-white text-center font-Nunito font-bold mt-3">
          {data.displayName}
        </h2>
        <div className="w-full h-[89px] relative">
          <div className="w-[161px] relative h-[89px] bg-white ml-auto rounded-l-[20px] mt-[79px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"></div>

          <FcHome
            size={46}
            className="absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <div className="w-full h-[89px] relative mt-[57px]">
          <div className=" hidden  h-[89px] bg-white ml-auto rounded-l-[20px] mt-[57px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"></div>

          <FcSms
            size={46}
            className="absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%] "
          />
        </div>
        <div className="w-full h-[89px] relative mt-[57px]">
          <div className="hidden w-[161px] h-[89px] bg-white ml-auto rounded-l-[20px]  after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"></div>

          <IoMdNotifications
            size={46}
            className="absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%] text-[#BAD1FF]"
          />
        </div>
        <div className=" w-full h-[89px] relative mt-[57px]">
          <div className="hidden w-[161px] h-[89px] bg-white ml-auto rounded-l-[20px]  after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"></div>

          <IoSettingsSharp
            size={46}
            className="absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%] text-[#BAD1FF]"
          />
        </div>
        <div className="w-full h-[89px] relative">
          <ImExit
            size={46}
            className="absolute top-2/4 left-2/4 text-white  translate-x-[-50%] translate-y-[-50%] mt-[187px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
