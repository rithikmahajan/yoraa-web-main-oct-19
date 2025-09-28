import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router"; // Fixed import

const VerifyOtp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeOption, setActiveOption] = useState("phone");
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

  function submitHandler(e) {
    e.preventDefault();
    const fullOtp = otp.join(""); // Combine OTP digits
    console.log("Phone:", mobile);
    console.log("OTP:", fullOtp);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Subscribed to emails:", isSubscribed);
    // Add API call or navigation logic here
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center  py-16">
      <div className="w-2/6 rounded-xl bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-6">
        <div className="flex flex-col justify-center mt-5 mx-5 gap-3">
          <h1 className=" text-2xl font-bold">Verification code</h1>

          <p className=" text-sm ">
            Please enter the verification code we sent to <br /> your number
          </p>

          {/* OTP Input Fields */}
          <div className="flex justify-center gap-2 my-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-14 h-14 text-center text-lg font-bold border-2  rounded-full focus:border-gray-300 border-black focus:outline-none"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          <p className=" text-[#12142080] text-sm">
            Resend in <span className=" font-medium">00:10</span>{" "}
          </p>

          <p className="text-sm text-[#8D8D8D]">
            Please enter the 4 digit pin send to your <br /> registered email
            address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
