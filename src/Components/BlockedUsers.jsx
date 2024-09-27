import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AstImg from "../assets/Ellipse 2.png";
import { useSelector } from "react-redux";

import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import moment from "moment";
import { Bounce, ToastContainer, toast } from "react-toastify";
 
 import "react-toastify/dist/ReactToastify.css";


const BlockedUsers = () => {
  let data = useSelector((state) => state.userInfo.value);
  const [blocklist, setBlockList] = useState([]);
  const db = getDatabase();
  

  useEffect(() => {
    const blockListRef = ref(db, "blocklist/");
    onValue(blockListRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        const itemData = item.val()
        
           if (
             data.uid == item.val().blockById ||
             data.uid == item.val().blockedUserId) {
             
             array.push({
             ...itemData,key: item.key,
               date: `${new Date().getFullYear()}/${
                 new Date().getMonth() + 1
               }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
             });
           } 
             
           
           
        
      });
      setBlockList(array);
    });
  }, []);


  const handleUnBlock = (item) => {
   
    
   
    set(push(ref(db, "friendList/")), {
      senderId: data.uid,
      senderName: data.displayName,

      receiverId: item.blockedUserId,
      receiverName: item.blockedUser,

      date: `${new Date().getFullYear()}/${
        new Date().getMonth() + 1
      }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
    }).then(() => {
      remove(ref(db, "blocklist/" + item.key))
        .then(() => {
          toast.success("😉Unblocked", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        
      })
    });
  };



  return (
    <div className="w-[344px]  shadow-xl rounded-[20px] px-5 mt-[43px]">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= {Bounce}
/>

<ToastContainer />
      <div className="flex justify-between items-center ">
        <h2 className="text-[20px] leading-[30px] font-semibold ">
          Blocked Users
        </h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[462px]  rounded-[20px] overflow-y-scroll ">
        {blocklist.map((item) => (
          <div className="flex justify-between items-center border-b border-black/25 pb-[13px] mt-[17px]">
            <div className="flex items-center gap-[14px]">
              
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={item ? item.image : AstImg}
                alt="AstImg"
              />

              <div>
                {
                  data.uid === item.blockById
                    
                    ?
                  <h3 className="text-[18px] leading-[30px] font-semibold ">
                    {item.blockedUser}
                  </h3>
                    

                  :
                    
                  <h3 className="text-[18px] leading-[30px] font-semibold ">
                    {item.blockBy}
                  </h3>
                    
       }
                
  
                  
       
                
                    
            
               

                <p className="text-[14px] leading-[30px] font-[500] text-gray-500">
                  {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
                </p>
              </div>
            </div>
            {data.uid == item.blockById && (
              <button
                onClick={() => handleUnBlock(item)}
                className="bg-primary px-5 py-1 text-white font-normal text-[18px] rounded-[5px]"
              >
                UnBlock
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockedUsers;
