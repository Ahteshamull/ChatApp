import React, { useState } from "react";
import SigninImg from "../assets/login.jpg";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

const Signin = () => {
  const provider = new GoogleAuthProvider();
  const faceProvider = new FacebookAuthProvider();
  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [showPassword, setShowPassword] = useState(false);
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
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
    if (!password) {
      setPassworderr("*Password is required !");
    }
  };
  let handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let handleFacebook = () => {
    signInWithPopup(auth, faceProvider)
      .then((result) => {
        const user = result.user;

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  return (
    <>
      <div className="w-full h-screen lg:flex ">
        <div className="lg:w-2/4 h-full flex justify-end items-center ">
          <div className="lg:mr-[69px]">
            <h1 className="lg:text-[34px] lg:font-[700] font-[500] text-[29px] text-center text-secondary leading-[45px]">
              Login to your account!
            </h1>
            <div className=" items-center gap-5 flex  mt-5 ml-8">
              <FcGoogle
                onClick={handleGoogle}
                lg:size={35} size={30}
                className="cursor-pointer"
              />
              OR
              <FaFacebook
                onClick={handleFacebook}
                lg:size={35} size={30}
                className="text-blue-600 cursor-pointer"
              />
            </div>

            <div className="w-[368px] h-[81px] mt-[61px] relative">
              <label
                className={`text-sm font-semibold ${
                  emailerr ? "text-red-500" : "text-secondary/70"
                }  absolute top-[-11px] left-[50px] bg-white px-2`}
              >
                Email Address
              </label>
              <input
                onChange={handleEmail}
                className={`w-full h-full border-b ${
                  emailerr ? "border-red-500" : "border-secondary/50"
                }   pl-[50px]`}
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
                  passworderr ? "text-red-500" : "text-secondary/70"
                }  absolute top-[-11px] left-[50px] bg-white px-2`}
              >
                Password
              </label>
              <input
                onChange={handlePassword}
                className={`w-full h-full border-b ${
                  passworderr ? "border-red-500" : "border-secondary/50"
                }  pl-[50px]`}
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
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-primary lg:w-[368px] w-[300px] border border-primary lg:py-5 py-3 text-x font-semibold text-white rounded-[86px] mt-[50px] hover:bg-transparent hover:text-primary cursor-pointer transition-[.4s] hover:border border-primary"
              >
                Login to Continue
              </button>
            </div>
            <p className="text-sm text-secondary text-center w-[368px] mt-[35px]">
              Don’t have an account ?{" "}
              <Link to="/singup" className="text-[#EA6C00] font-bold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className=" hidden lg:block lg:w-2/4  h-full ">
          <img
            className="w-full hidden lg:block   h-full ml-auto object-cover"
            src={SigninImg}
            alt="singup"
          />
        </div>
      </div>
    </>
  );
};

export default Signin;