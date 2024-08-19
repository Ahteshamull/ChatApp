import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import primg from "../assets/1111111111.png";
import { FaUserEdit } from "react-icons/fa";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { TbPhotoEdit, TbProgressHelp } from "react-icons/tb";
import { FaKey } from "react-icons/fa6";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Setting = () => {
  return (
    <div>
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
        <div className="flex justify-between">
          <div className="w-[538px] h-[859px] shadow-xl mt-8 rounded-[20px] px-6 py-6 ">
            <div>
              <h1 className="text-[20px] font-semibold leading-6">
                Profile Settings
              </h1>
              <div className="flex items-center gap-[31px] mt-12">
                <div className="w-[100px] h-[100px] rounded-full ">
                  <img src={primg} alt="" />
                </div>
                <div>
                  <h3 className="text-[25px] font-semibold leading-6">
                    Wasim Mahamod Raza
                  </h3>
                  <p className="text-[20px] font-[400] mt-[2px]">
                    Stay home stay safe
                  </p>
                </div>
              </div>
              <hr className="w-[455px] mt-[29px]" />
              <div className="w-[285px] h-[231px]  mt-[43px] ml-9">
                <div className="flex items-center gap-5">
                  <FaUserEdit size={20} />
                  <h2 className="text-[20px] font-[400]">Edit Profile Name.</h2>
                </div>
                <div className="flex items-center gap-5 mt-9 ">
                  <BiMessageRoundedEdit size={20} />
                  <h2 className="text-[20px] font-[400]">
                    Edit Profile Status Info.
                  </h2>
                </div>
                <div className="flex items-center gap-5 mt-9">
                  <TbPhotoEdit size={20} />
                  <h2 className="text-[20px] font-[400]">
                    Edit Profile Photo.
                  </h2>
                </div>
                <div className="flex items-center gap-5 mt-9">
                  <TbProgressHelp size={20} />
                  <h2 className="text-[20px] font-[400]">Help.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[538px] h-[859px] shadow-xl mt-8 rounded-[20px] px-6 py-6 ">
            <div>
              <h1 className="text-[20px] font-semibold leading-6">
                Account Settings
              </h1>
              <div className="w-[285px] h-[231px]  mt-[43px] ml-9">
                <div className="flex items-center gap-5">
                  <FaKey size={20} />
                  <h2 className="text-[20px] font-[400]">Change Password</h2>
                </div>
                <div className="flex items-center gap-5 mt-9 ">
                  <MdFaceRetouchingNatural size={20} />
                  <h2 className="text-[20px] font-[400]">Theme.</h2>
                </div>
                <div className="flex items-center gap-5 mt-9">
                  <MdDelete size={20} />
                  <h2 className="text-[20px] font-[400]">Delete Account.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
