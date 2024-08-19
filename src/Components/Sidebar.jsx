import React from "react";
import ProfileImg from "../assets/profile.png";
import { FcHome, FcSms } from "react-icons/fc";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className=" h-screen py-8 px-9">
      <div className="w-[186px] h-full bg-primary rounded-[20px] ">
        <div className="text-center">
          <img
            className="w-[100px] h-[100px] rounded-full  mt-[38px] inline-block"
            src={ProfileImg}
            alt="ProfileImg"
          />
        </div>
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
