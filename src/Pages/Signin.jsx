import React, { useState } from "react";
import SigninImg from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { getDatabase, ref, set } from "firebase/database";


import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUserInfo } from "../slices/userSlice";

const Signin = () => {
  let navigate = useNavigate();
  const db = getDatabase();
  const provider = new GoogleAuthProvider();
  const faceProvider = new FacebookAuthProvider();
  const auth = getAuth();
  const dispatch = useDispatch();
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
    if (email && password) {
      let user = {
        email: email,
        password: password,
        profile_picture: "/nullimg.jpg",
      };
      localStorage.setItem("user", JSON.stringify(user));
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(loginUserInfo(user));
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/")
        })
        .catch((error) => {
          const errorCode = error.code;
          if (error.code.includes("auth/Invalid-credential")) {
            setEmailerr("Invalid-credential");
          }
        });
    }
  };
  let handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        set(ref(db, "users/" + userCredential.user.uid), {
          username: userCredential.user.displayName,
          email: userCredential.user.email,
          profile_picture: userCredential.user.photoURL,
          date: `${new Date().getFullYear()}/${
            new Date().getMonth() + 1
          }/${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`,
        }).then(() => {
          setTimeout(() => {
            navigate("/");
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let handleFacebook = () => {
    signInWithPopup(auth, faceProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
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
                lg:size={35}
                size={30}
                className="cursor-pointer"
              />
              OR
              <FaFacebook
                onClick={handleFacebook}
                lg:size={35}
                size={30}
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
                className="bg-primary lg:w-[368px] w-[300px] border border-primary lg:py-5 py-3 text-x font-semibold text-white rounded-[86px] mt-[50px] hover:bg-transparent hover:text-primary cursor-pointer transition-[.4s] hover:border hover:border-primary"
              >
                Login to Continue
              </button>
            </div>
            <p className="text-sm text-secondary text-center w-[368px] mt-[35px]">
              Don’t have an account ?{" "}
              <Link to="/singin" className="text-[#EA6C00] font-bold">
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
