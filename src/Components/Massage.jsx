import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Astimg from "../assets/Ellipse 4.png";
import masimg from "../assets/2222.png";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { IoIosCamera, IoIosSend } from "react-icons/io";

const Massage = () => {
  return (
    <>
      <div className="flex px-5 mt-[40px] gap-10 ">
        <div>
          <div className=" relative w-[427px] h-[59px] shadow-xl rounded-[20px] ">
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
          <div className="flex justify-between gap-[26px]">
            <div>
              <div className="w-[427px]  shadow-xl rounded-[20px] mt-[35px] px-5 ">
                <div className="flex justify-between items-center ">
                  <h2 className="text-[20px] leading-[30px] font-semibold ">
                    Groups List
                  </h2>
                  <BsThreeDotsVertical />
                </div>
                <div className="w-full h-[347px]  rounded-[20px] overflow-y-scroll">
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                </div>
              </div>
              {/* ============= */}
              <div className="w-[427px]  shadow-xl rounded-[20px] px-5 mt-[43px] ">
                <div className="flex justify-between items-center ">
                  <h2 className="text-[20px] leading-[30px] font-semibold ">
                    Friend Request
                  </h2>
                  <BsThreeDotsVertical />
                </div>
                <div className="w-full h-[462px]  rounded-[20px] overflow-y-scroll">
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                      Accept
                    </button>
                  </div>
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                      Accept
                    </button>
                  </div>
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                      Accept
                    </button>
                  </div>
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                      Accept
                    </button>
                  </div>
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                      Accept
                    </button>
                  </div>
                  <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
                    <div className="flex items-center gap-[14px]">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={Astimg}
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
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[689px] h-[956px] shadow-xl rounded-[20px] px-5 mt-[50px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[20px] relative">
              <img className="relative" src={masimg} alt="masimg" />
              <div className="w-[15px] h-[15px] bg-green-500 rounded-full absolute bottom-[5px] right-[100px]">
                {" "}
              </div>
              <div>
                <h2 className="text-[24px] font-semibold">Swathi </h2>
                <p>Online</p>
              </div>
            </div>
            <BsThreeDotsVertical size={20} />
          </div>
          <hr className="w-[600px] bg-black/25 ml-6 mt-5" />
          
          <div className="absolute bottom-[26px] left-0 flex gap-5 ">
            <div className="relative w-[537px] h-[45px] shadow-xl rounded-[20px] ml-[54px]">
              <hr className="absolute bottom-[100px] w-[600px] bg-black/25 " />
              <input
                className=" w-full h-full pl-[10px] items-center  rounded-[20px] outline-none bg-[#F1F1F1]"
                type="text"
              />
              <BsEmojiHeartEyes
                size={19}
                className="absolute top-[50%] right-[60px] translate-y-[-50%] text-black/25 "
              />
              <IoIosCamera className="absolute top-[50%] right-[23px] translate-y-[-50%] text-[30px] text-black/25" />
            </div>
            <button className="bg-primary px-2 py-1 rounded-[10px]">
              <IoIosSend size={20} className="text-[#ffff]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Massage;
