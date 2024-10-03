import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import masimg from "../assets/nullimg.jpg";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { IoIosCamera, IoIosSend } from "react-icons/io";
import FriendList from "./FriendList";
import MyGroups from "./MyGroups";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import EmojiPicker from "emoji-picker-react";
import ScrollToBottom from "react-scroll-to-bottom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  getDownloadURL,
  getStorage,
  ref as Sref,
  uploadBytes,
} from "firebase/storage";

const Massage = () => {
  const storage = getStorage();
  let [imageModal, setImageModal] = useState(false);
  let [imageFile, setImageFile] = useState(null);
  let db = getDatabase();
  let [emojiPick, setEmojiPick] = useState(false);
  let [massage, setMassage] = useState("");
  let [massageList, setMassageList] = useState([]);
  let data = useSelector((state) => state.userInfo.value);
  let chatData = useSelector((state) => state.chatIngInfo.value);
  let handleMassage = (e) => {
    setMassage(e.target.value);
  };
  let handleMassageSubmit = () => {
    set(push(ref(db, "chatList/")), {
      sender: data.displayName,
      senderId: data.uid,
      receiver: chatData.name,
      receiverId: chatData.id,
      massage: massage,
      date: `${new Date().getFullYear()}/${
        new Date().getMonth() + 1
      }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
    }).then(() => {
      setMassage("");
    });
  };
  useEffect(() => {
    const massageRef = ref(db, "chatList/");
    onValue(massageRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (
          (data.uid === item.val().senderId &&
            chatData.id === item.val().receiverId) ||
          (chatData.id === item.val().senderId &&
            data.uid === item.val().receiverId)
        ) {
          array.push({ ...item.val(), key: item.key });
        }
      });
      setMassageList(array);
      setEmojiPick(false);
    });
  }, [data.uid, chatData?.id, db]);

  let HandleEmoji = (e) => {
    setMassage((prevent) => prevent + e.emoji);
  };
  let handleUpload = () => {
    const storageRef = Sref(storage, `UserImage/${Date.now()}`);

    const file = imageFile;
    uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
             set(push(ref(db, "chatList/")), {
               sender: data.displayName,
               senderId: data.uid,
               receiver: chatData.name,
               receiverId: chatData.id,
               image: downloadURL,
               date: `${new Date().getFullYear()}/${
                 new Date().getMonth() + 1
               }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
             }).then(() => {
               setImageModal(false)
             });
        });
    });
  };

  return (
    <>
      <div className="block">
        <FriendList />
        <MyGroups />
      </div>
      {chatData && (
        <div className="flex px-5 mt-[40px] gap-10  ">
          <div className="relative w-[689px] h-[956px] shadow-xl rounded-[20px] px-5 mt-[50px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[20px] relative">
                <img
                  className="relative w-[70px] h-[70px] rounded-full"
                  src={masimg}
                  alt="masimg"
                />
                {/* <div className="w-[15px] h-[15px] bg-green-500 rounded-full absolute bottom-[5px] right-[145px] "></div> */}
                <div>
                  <h2 className="text-[24px] font-semibold">
                    {chatData && chatData.name}{" "}
                  </h2>
                  <p>Online</p>
                </div>
              </div>
              <BsThreeDotsVertical size={20} />
            </div>
            <hr className="w-[600px] bg-black/25 ml-6 mt-5" />
            <ScrollToBottom className="pt-[30px] h-[80%] border-b-[1px] border-gray-300 overflow-y-scroll ">
              {massageList.map((item) =>
                data.uid === item.senderId ? (
                  <div className="flex items-end flex-col mt-[30px] ml-2 -inset-1 ">
                    <div className="pr-5">
                      {item.massage ? (
                        <p className="pt-[10px] pb-[10px] ps-[25px] pe-[25px] bg-blue-800 rounded-full font-Nunito font-medium text-[20px] text-white   ">
                          {item.massage}
                        </p>
                      ) : (
                        <PhotoProvider>
                          <PhotoView src={item.image}>
                            <img
                              className="w-[300px] h-auto rounded-md"
                              src={item.image}
                              alt=""
                            />
                          </PhotoView>
                        </PhotoProvider>
                      )}
                      <p className=" font-poppins font-medium text-[12px] text-textDeem text-left">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start flex-col mt-[30px] ml-2 ">
                    <div>
                      {item.massage ? (
                        <p className="pt-[10px] pb-[10px] ps-[25px] pe-[25px] bg-primary rounded-full font-Nunito font-medium text-[20px] text-white  ">
                          {item.massage}
                        </p>
                      ) : (
                        <PhotoProvider>
                          <PhotoView src={item.image}>
                            <img
                              className="w-[300px] h-auto rounded-md"
                              src={item.image}
                              alt=""
                            />
                          </PhotoView>
                        </PhotoProvider>
                      )}

                      <p className="font-poppins font-medium text-[12px] text-textDeem text-right">
                        {item.date}
                      </p>
                    </div>
                  </div>
                )
              )}
            </ScrollToBottom>

            <div className="absolute bottom-[26px] left-0 flex gap-5 ">
              <div className="relative w-[537px] h-[45px] shadow-xl rounded-[20px] ml-[54px] -inset-1">
                {/* <hr className="absolute bottom-[100px] w-[600px] bg-black/25 " /> */}
                <input
                  value={massage}
                  onChange={handleMassage}
                  className=" w-[450px] h-full pl-[10px] items-center  rounded-[20px] outline-none bg-gray-300 "
                  type="text"
                />
                <BsEmojiHeartEyes
                  onClick={() => setEmojiPick(!emojiPick)}
                  size={19}
                  className="absolute top-[50%] right-[60px] translate-y-[-50%] text-black/25 "
                />
                <IoIosCamera
                  onClick={() => setImageModal(!imageModal)}
                  className="absolute top-[50%] right-[23px] translate-y-[-50%] text-[30px] text-black/25 cursor-pointer"
                />
              </div>
              <button
                onClick={handleMassageSubmit}
                className="bg-primary px-2 py-1 rounded-[10px]"
              >
                <IoIosSend size={20} className="text-[#ffff]" />
              </button>
            </div>
          </div>
          {emojiPick && (
            <div className="absolute bottom-[100px]">
              <EmojiPicker onEmojiClick={HandleEmoji} />
            </div>
          )}
        </div>
      )}
      {imageModal && (
        <div className="w-full h-screen bg-black/90 absolute top-0 left-0 flex justify-center items-center">
          <div className="w-[500px] bg-white rounded-md p-10 justify-center items-center">
            <h1 className="font-Nunito text-2xl font-semibold text-primary mt-2">
              Upload A Picture
            </h1>
            <input
              onChange={(e) => setImageFile(e.target.files[0])}
              className="font-Nunito text-2xl font-semibold text-black mt-2"
              type="file"
            />

            <div className="flex gap-[10px]">
              <button
                onClick={handleUpload}
                className="w-[150px] h-[50px] mt-5 text-white bg-primary font-Nunito font-semibold rounded-md "
              >
                Submit
              </button>
              <button
                onClick={() => setImageModal(false)}
                className="w-[150px] h-[50px] mt-5 bg-red-500 text-white font-Nunito font-semibold rounded-md "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Massage;
