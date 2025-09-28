import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router"; 

const VerifyEmail = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]); // State for 4 OTP digits
  const [isSubscribed, setIsSubscribed] = useState(true); // State for checkbox
  const inputRefs = useRef([]); // Refs for OTP inputs

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center  py-16">
      <div className="w-2/6 rounded-xl bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-6">
      
      



        <div className="flex flex-col justify-center mt-5 mx-11 gap-3">
          <h1 className=" text-2xl font-bold">Verify your email address</h1>
          
          <p className=" text-sm mb-6 ">
         <span className=" font-semibold underline">Click here</span> if you did not receive an email or <br /> would like to change the email address you <br /> registered with
          </p>
          <p className=" text-sm ">
          We’ve sent an email to <span className=" underline">yoraa@gmail.com</span>  to <br /> verify your email address and activate your <br /> account. the link in the email will expire in 24 hr.
          </p>



            <button className="px-8 py-3 mt-3 mx-6 font-semibold text-center  rounded-3xl shadow-md text-white bg-black">
            Continue
          </button>

         
          

     
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;