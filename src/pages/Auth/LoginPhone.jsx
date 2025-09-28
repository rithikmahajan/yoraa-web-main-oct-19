import React, { useRef, useState } from "react";
import googleLogo from "../../assets/google.png";
import appleLogo from "../../assets/apple.png";
import indiaLogo from "../../assets/india.png";
import { Link, useNavigate } from "react-router";

const LoginPhone = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeOption, setActiveOption] = useState("phone");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  function submitHandler(e) {
    e.preventDefault();
    console.log(password);
    console.log(mobile);
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 py-16">
      <div className="w-2/6 rounded-xl bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-6">
        <p className=" font-light text-end text-sm">SKIP</p>

        <h1 className=" font-bold text-2xl text-center my-4">
          Log into your account
        </h1>

        <div className="flex justify-end text-xs my-3 mx-3">
          <button
            onClick={() => setActiveOption("phone")}
            className={`
              relative flex items-center space-x-2 pl-4 pr-5 py-2 rounded-full transition-all duration-300 ease-in-out
              ${
                activeOption === "phone"
                  ? "text-white bg-black shadow-md border-2 border-black z-20"
                  : "text-gray-600 border hover:text-gray-800 z-10"
              }
            `}
          >
            <span className="font-medium">Phone</span>
          </button>
          <button
            onClick={() =>{
                navigate("/login")
                setActiveOption("email")
            } }
            className={`
              relative flex items-center pl-5 pr-4 py-2 rounded-full transition-all duration-300 ease-in-out -ml-[19px]
              ${
                activeOption === "email"
                  ? "text-white bg-black shadow-md border-2 border-black z-20"
                  : "text-gray-600 border hover:text-gray-800 z-10"
              }
            `}
          >
            
            
            <span className="font-medium">Email</span>
            
          </button>
        </div>

        <div className="flex flex-col justify-center mt-5 mx-10 gap-3">
          <div className="text-sm gap-1 mx-3 rounded-lg flex py-2 items-center justify-center bg-[#FAFAFA] border border-[#EEEEEE]">

            <div>
                <img src={indiaLogo} alt="indiaLogo" />
            </div>

            <p className=" font-semibold">+91</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#848688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="34" viewBox="0 0 2 34" fill="none">
  <path d="M1 0L1 34" stroke="#E9E9E9"/>
</svg>
          </div>
            
            <input placeholder="Sign Up with Google"  className="  bg-[#FAFAFA] " />
          </div>

          <button className="px-8 py-3 mt-3 mx-6 text-center font-semibold text-sm rounded-3xl shadow-md text-white bg-black">
            LOGIN
          </button>
          <p className="text-xs text-gray-500 text-center">
            Don't have an account?
            <Link to={"/signup"}>
            
            <span className="underline text-center text-black">Sign Up</span>
            </Link>
          </p>
          <button className="text-sm gap-2 mx-10 rounded-lg flex py-2 items-center justify-center bg-[#FAFAFA] border border-[#EEEEEE]">
            <img src={googleLogo} alt="googleLogo" />
            Sign Up with Google
          </button>
          <button className="text-sm gap-2 mx-10 mb-12 rounded-lg flex py-2 items-center justify-center bg-[#FAFAFA] border border-[#EEEEEE]">
            <img src={appleLogo} alt="appleLogo" />
            Sign Up with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPhone;
