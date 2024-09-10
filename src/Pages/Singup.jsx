import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from "react";
import SignUpImg from "../assets/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { DNA } from "react-loader-spinner";

const Singup = () => {

  let navigate = useNavigate();
  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [showPassword, setShowPassword] = useState(false);
  let [success, setSuccess] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handleName = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailerr("*Email is required !");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("invalid email");
    }
    if (!name) {
      setNameerr("*Name is required !");
    }
    if (!password) {
      setPassworderr("*Password is required !");
    }
    if (email && name && password) setSuccess(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: "/nullimg.jpg",
            }).then(() => {
              const user = userCredential.user;
              set(ref(db, "users/" + userCredential.user.uid), {
                username: userCredential.user.displayName,
                email: userCredential.user.email,
                image: "/nullimg.jpg",
                date: `${new Date().getFullYear()}/${
                  new Date().getMonth() + 1
                }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
              }).then(() => {
                setTimeout(() => {
                  setSuccess(false);
                  navigate("/login");
                });
              });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setTimeout(() => {
          setSuccess(false);
          const errorCode = error.code;
          const errorMessage = error.message;
        }, 2000);
      });
  };

  return (
    <>
      <div className="w-full h-screen flex">
        <div className="lg:w-2/4 h-full flex justify-end items-center">
          <div className="lg:mr-[69px]">
            <h1 className="lg:text-[34px] text-[25px] lg:font-[700] font-[500] text-secondary leading-[45px]">
              Get started with easily register !
            </h1>
            <p className="lg:text-xl font-normal text-black opacity-50">
              Free register and you can enjoy it
            </p>
            <div className="w-[368px] h-[81px] lg:mt-[61px] mt-[30px] relative">
              <label
                className={`text-sm font-semibold ${
                  emailerr ? "text-red-500" : "text-secondary/70"
                }  absolute top-[-11px] left-[50px] bg-white px-2`}
              >
                Email Address
              </label>
              <input
                onChange={handleEmail}
                className={`w-full h-full border ${
                  emailerr ? "border-red-500" : "border-secondary/50"
                }  rounded-lg pl-[50px]`}
                type="email"
                value={email}
                placeholder="Enter Your E@mail"
              />
              {emailerr && (
                <p className="text-red-400 text-[14px] font-normal absolute right-[0]">
                  {emailerr}
                </p>
              )}
            </div>
            <div className="w-[368px] h-[81px] mt-[34px] relative">
              <label
                className={`text-sm font-semibold ${
                  nameerr ? "text-red-500" : "text-secondary/70"
                }  absolute top-[-11px] left-[50px] bg-white px-2`}
              >
                Full name
              </label>
              <input
                onChange={handleName}
                className={`w-full h-full border ${
                  nameerr ? "border-red-500" : "border-secondary/50"
                }  rounded-lg pl-[50px]`}
                type="text"
                value={name}
                placeholder="Enter Your Name"
              />

              {nameerr && (
                <p className="text-red-400 text-[14px] font-normal absolute right-[0]">
                  {nameerr}
                </p>
              )}
            </div>
            <div className="w-[368px] h-[81px] mt-[34px] relative">
              <label
                className={`text-sm font-semibold ${
                  passworderr ? "text-red-500" : "text-secondary/70"
                }  absolute top-[-11px] left-[50px] bg-white px-2`}
              >
                Password
              </label>
              <input
                onChange={handlePassword}
                className={`w-full h-full border ${
                  passworderr ? "border-red-500" : "border-secondary/50"
                }  rounded-lg pl-[50px]`}
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter Your Password"
              />
              {showPassword ? (
                <IoEyeSharp
                  onClick={() => setShowPassword(false)}
                  className="text-2xl absolute top-2/4 right-5 translate-y-[-50%] cursor-pointer"
                />
              ) : (
                <BsEyeSlashFill
                  onClick={() => setShowPassword(true)}
                  className="text-2xl absolute top-2/4 right-5 translate-y-[-50%] cursor-pointer"
                />
              )}
              {passworderr && (
                <p className="text-red-400 text-[14px] font-normal absolute right-[0]">
                  {passworderr}
                </p>
              )}
            </div>
            {success ? (
              <div className="w-[368px] ">
                <DNA
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper mx-auto"
                />
              </div>
            ) : (
              <div className="text-center lg:text-left">
                <button
                  onClick={handleSubmit}
                  className="bg-primary lg:w-[368px] w-[300px] border border-primary lg:py-5 py-3 text-x font-semibold text-white rounded-[86px] mt-[50px] hover:bg-transparent hover:text-primary cursor-pointer transition-[.4s] hover:border hover:border-primary"
                >
                  Sign Up
                </button>
              </div>
            )}
            <p className="text-sm text-secondary text-center w-[368px] mt-[35px]">
              Already have an account ?{" "}
              <Link to="/login" className="text-[#EA6C00] font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className="lg:w-2/4 h-full hidden lg:block ">
          <img
            className="w-full h-full ml-auto object-cover"
            src={SignUpImg}
            alt="singup"
          />
        </div>
      </div>
    </>
  );
};

export default Singup;
