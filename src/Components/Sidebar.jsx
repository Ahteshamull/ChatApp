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
import { useNavigate } from "react-router-dom";

// =====================hj====================//
const Sidebar = () => {
  const navigate = useNavigate();
  let db = getDatabase();
  let dispatch = useDispatch();
  const auth = getAuth();
  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();

  let [imgModal, setImgModal] = useState(false);
  let [imageFile, setImageFile] = useState(null);
  const storage = getStorage();

  let data = useSelector((state) => state.userInfo.value);
  let [handleNavigate, setHandleNavigate] = useState("Home");
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
  useEffect(() => {
    if (handleNavigate === "Massage") {
      naviGate("/massage");
    } else if (handleNavigate === "Home") {
      naviGate("/");
    } else if (handleNavigate === "Notification") {
      naviGate("/notification");
    } else if (handleNavigate === "Setting") {
      naviGate("/setting");
    }
  }, [naviGate, handleNavigate]);
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
        <div
          className={`w-full h-[89px] relative mt-12 after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500 `}
          onClick={() => setHandleNavigate("Home")}
        >
          <div
            className={`w-[161px]  h-[89px] ${
              handleNavigate === "Home" ? "block" : "hidden"
            } bg-white ml-auto rounded-l-[20px]  `}
          ></div>

          <FcHome
            size={46}
            className="absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <div
          onClick={() => setHandleNavigate("Massage")}
          className="w-full h-[89px] relative mt-[57px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"
        >
          <div
            className={`w-[161px]  h-[89px] ${
              handleNavigate === "Massage" ? "block" : "hidden"
            } bg-white ml-auto rounded-l-[20px]  `}
          ></div>

          <FcSms
            size={46}
            className="absolute top-2/4 left-2/4   translate-x-[-50%] translate-y-[-50%] "
          />
        </div>
        <div
          onClick={() => setHandleNavigate("Notification")}
          className="w-full h-[89px] relative mt-[57px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"
        >
          <div
            className={`w-[161px]  h-[89px] ${
              handleNavigate === "Notification" ? "block" : "hidden"
            } bg-white ml-auto rounded-l-[20px]  `}
          ></div>

          <IoMdNotifications
            size={46}
            className="absolute top-2/4 left-2/4  text-red-600 translate-x-[-50%] translate-y-[-50%] "
          />
        </div>
        <div
          onClick={() => setHandleNavigate("Setting")}
          className="w-full h-[89px] relative mt-[57px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px] after:shadow-black after:shadow-black-500"
        >
          <div
            className={`w-[161px]  h-[89px] ${
              handleNavigate === "Setting" ? "block" : "hidden"
            } bg-white ml-auto rounded-l-[20px]  `}
          ></div>

          <IoSettingsSharp
            size={46}
            className="absolute top-2/4 left-2/4  text-black  translate-x-[-50%] translate-y-[-50%] "
          />
        </div>
        <div className="w-full h-[89px] relative">
          <ImExit
            size={46}
            className="absolute top-2/4 left-2/4 text-white  translate-x-[-50%] translate-y-[-50%] mt-[187px] "
          />
        </div>
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
  );
};

export default Sidebar;
