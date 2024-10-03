import React, { createRef, useEffect, useState } from "react";
import ProfileImg from "../assets/profile.png";
import { FcHome, FcSms } from "react-icons/fc";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";

import { IoMdCloudUpload } from "react-icons/io";
import {
  getDownloadURL,
  getStorage,
  uploadString,
  ref,
} from "firebase/storage";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginUserInfo } from "../slices/userSlice";
import { update, ref as dref, getDatabase } from "firebase/database";
import { Link, useNavigate ,useLocation} from "react-router-dom";

// =====================hj====================//
const Sidebar = () => {

  let location = useLocation()

  let db = getDatabase();
  let dispatch = useDispatch();
  const auth = getAuth();
  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();

  let [imgModal, setImgModal] = useState(false);
  const storage = getStorage();

  let data = useSelector((state) => state.userInfo.value);

  let naviGate = useNavigate();
  let handleImgFile = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  let handleUpload = () => {
    const storageRef = ref(storage, `UserData/${Date.now()}`);
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const message4 = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          })
            .then(() => {
              dispatch(loginUserInfo(auth.currentUser));

              update(dref(db, "users/" + data.uid), {
                image: downloadURL,
              });
            })
            .then(() => {
              setImgModal(false);
              setImage(" ");
              setCropData(" ");
            })
            .then(() => {
              updateProfile(true);
              alert("Updated");
            });
        });
      });
    }
  };

  return (
    <div className=" h-screen py-8 px-9">
      <div className="w-[186px] h-full bg-primary rounded-[20px] ">
        <div className="text-center pt-9">
          <div className="w-[100px] h-[100px] group rounded-full mx-auto overflow-hidden relative">
            <img
              className=" w-full h-full"
              src={data && data.photoURL}
              alt=""
            />
            <div
              onClick={() => setImgModal(true)}
              className="w-full h-full cursor-pointer bg-black/50 opacity-0 group-hover:opacity-100 absolute top-0 left-0 flex justify-center items-center"
            >
              <IoMdCloudUpload size={25} className="text-white " />
            </div>
          </div>
        </div>
        <h2 className="text-[20px] text-white text-center font-Nunito font-bold mt-3">
          {data && data.displayName}
        </h2>
        <div className="w-full  h-[89px] relative mt-[78px] ">
          <Link to={"/"}>
            <div
              className={`${
                location.pathname == "/" &&
                "w-[161px] h-[89px] bg-white ml-auto rounded-l-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"
              } `}
            ></div>
            <FcHome
              size={46}
              className={`${
                location.pathname == "/"
                  ? "absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%]"
                  : "absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%]"
              }`}
            />
          </Link>
        </div>
        <div className="w-full  h-[89px] relative mt-[78px] ">
          <Link to={"/massage"}>
            <div
              className={`${
                location.pathname == "/massage" &&
                "w-[161px] h-[89px] bg-white ml-auto rounded-l-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"
              } `}
            ></div>
            <FcSms
              size={46}
              className={`${
                location.pathname == "/massage"
                  ? "absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%]"
                  : "absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%]"
              }`}
            />
          </Link>
        </div>
        <div className=" w-full  h-[89px] relative mt-[78px] ">
          <Link to={"/notification"}>
            <div
              className={`${
                location.pathname == "/notification" &&
                "w-[161px] h-[89px] bg-white ml-auto rounded-l-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"
              } `}
            ></div>
            <IoMdNotifications
              size={46}
              className={`${
                location.pathname == "/notification"
                  ? "absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%] text-green-700"
                  : "absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%]"
              }`}
            />
          </Link>
        </div>
        <div className="w-full  h-[89px] relative mt-[78px] ">
          <Link to={"/setting"}>
            <div
              className={`${
                location.pathname == "/setting" &&
                "w-[161px] h-[89px] bg-white ml-auto rounded-l-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"
              } `}
            ></div>
            <IoSettingsSharp
              size={46}
              className={`${
                location.pathname == "/setting"
                  ? "absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%] text-blue-700"
                  : "absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%]"
              }`}
            />
          </Link>
        </div>

        <div className="w-full h-[89px] relative">
          <ImExit
            size={46}
            className="absolute top-2/4 left-2/4 text-white  translate-x-[-50%] translate-y-[-50%] mt-[187px] "
          />
        </div>

        <div>
          {imgModal && (
            <div className="w-full h-screen bg-black/90 absolute top-0 left-0 flex justify-center items-center">
              <div className="w-[500px] bg-white rounded-md p-10 justify-center items-center">
                <h1 className="font-Nunito text-2xl font-semibold text-primary mt-2">
                  Upload Your Picture
                </h1>
                <input
                  onChange={handleImgFile}
                  className="font-Nunito text-2xl font-semibold text-black mt-2"
                  type="file"
                />
                {image && (
                  <Cropper
                    ref={cropperRef}
                    style={{ height: 400, width: "100%" }}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                    guides={true}
                  />
                )}
                <div className="flex gap-[10px]">
                  <button
                    onClick={() => setImgModal(false)}
                    className="w-[150px] h-[50px] mt-5 bg-red-500 text-white font-Nunito font-semibold rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpload}
                    className="w-[150px] h-[50px] mt-5 bg-primary text-white font-Nunito font-semibold rounded-md"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
