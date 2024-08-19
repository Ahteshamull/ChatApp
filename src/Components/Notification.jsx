import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

const Notification = () => {
  return (
    <div className="py-9 w-[1141px] h-[869px] ">
      <div className="relative w-full h-[59px] shadow-xl rounded-[20px]">
        <input
          className=" w-full h-full pl-[78px] items-center  rounded-[20px]"
          type="search"
          placeholder="Search"
        />
        <FiSearch
          size={19}
          className="absolute top-[50%] left-[23px] translate-y-[-50%] "
        />
        <BsThreeDotsVertical className="absolute top-[50%] right-[23px] translate-y-[-50%]" />
      </div>
      <div className="w-full h-full shadow-lg mt-[26px] py-5 rounded-[20px] ">
        <div>
          <div className="flex items-center gap-[43px] px-10">
            <IoMdNotifications size={35} />
            <p className="text-[16px] font-normal w-[1011px] text-[#000000] leading-6">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </p>
          </div>
          <hr className="w-[1066px] ml-10 mt-5" />
        </div>
        <div className="mt-[35px]">
          <div className="flex items-center gap-[43px] px-10">
            <IoMdNotifications size={35} />
            <p className="text-[16px] font-normal text-[#000000] leading-6">
              So yes, the alcohol (ethanol) in hand sanitizers can be absorbed
              through the skin, but no, it would not cause intoxication.
            </p>
          </div>
          <hr className="w-[1066px] ml-10 mt-5" />
        </div>
        <div className="mt-[35px]">
          <div className="flex items-center gap-[43px] px-10">
            <IoMdNotifications size={35} />
            <p className="text-[16px] font-normal text-[#000000] leading-6">
              How a visual artist redefines success in graphic design
            </p>
          </div>
          <hr className="w-[1066px] ml-10 mt-5" />
        </div>
        <div className="mt-[35px]">
          <div className="flex items-center gap-[43px] px-10">
            <IoMdNotifications size={35} />
            <p className="text-[16px] w-[1011px] font-normal text-[#000000] leading-6">
              For athletes, high altitude produces two contradictory effects on
              performance. For explosive events (sprints up to 400 metres, long
              jump, triple jump) the reduction in atmospheric pressure means
              there is less resistance from the atmosphere and the athlete's
              performance will generally be better at high altitude.
            </p>
          </div>
          <hr className="w-[1066px] ml-10 mt-5" />
        </div>
        <div className="mt-[35px]">
          <div className="flex items-center gap-[43px] px-10">
            <IoMdNotifications size={35} />
            <p className="text-[16px] font-normal text-[#000000] leading-6">
              consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
              vitae congue
            </p>
          </div>
          <hr className="w-[1066px] ml-10 mt-5" />
        </div>
        <div className="mt-[35px]">
          <div className="flex items-center gap-[43px] px-10">
            <IoMdNotifications size={35} />
            <p className="text-[16px] font-normal text-[#000000] leading-6">
              In fermentum posuere urna nec
            </p>
          </div>
          <hr className="w-[1066px] ml-10 mt-5" />
        </div>
        <div className="mt-[35px]">
          <div className="flex items-center gap-[43px] px-10">
            <IoMdNotifications size={35} />
            <p className="text-[16px] font-normal text-[#000000] leading-6">
              ID: 22739
            </p>
          </div>
          <hr className="w-[1066px] ml-10 mt-5" />
        </div>
        <div className="mt-[35px]">
          <div className="flex items-center gap-[43px] px-10">
            <IoMdNotifications size={35} />
            <p className="text-[16px] font-normal text-[#000000] leading-6">
              How We Keep Brand Consistency in Our Visual Language — A Design
              System for Illustrations
            </p>
          </div>
          <hr className="w-[1066px] ml-10 mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
