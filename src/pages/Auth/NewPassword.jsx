import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import eyeLogo from "../../assets/eye.png";

const NewPassword = () => {
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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      // Allow only single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
      // Auto-focus previous input on backspace
      if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center  py-16">
      <div className="w-2/6 rounded-xl bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-6">
        <div className="flex flex-col justify-center mt-5 mx-5 gap-3">
          <h1 className=" text-2xl font-bold">Create new password</h1>

          <p className=" text-sm ">
            Your new password must be different <br />
from previously used password
          </p>

          <div className="relative">
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
            >
              <img src={eyeLogo} alt="" />
            </button>
            <input
              className="px-2 py-1 pr-10 rounded-lg border-2 border-black w-full"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
            >
              <img src={eyeLogo} alt="" />
            </button>
            <input
              className="px-2 py-1 pr-10 rounded-lg border-2 border-black w-full"
              placeholder="Re-enter password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="px-8 py-3 mt-3 mx-6 font-semibold text-center  rounded-3xl shadow-md text-white bg-black">
           Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
