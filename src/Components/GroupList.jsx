import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { FiSearch } from "react-icons/fi";

const GroupList = () => {
  return (
    <>
      <div className="relative w-[427px] h-[59px] shadow-xl rounded-[20px]">
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
      <div className="w-[427px]  shadow-xl rounded-[20px] mt-[43px] px-5 ">
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

        </div>
      </div>
    
    </>
  );
};

export default GroupList;
