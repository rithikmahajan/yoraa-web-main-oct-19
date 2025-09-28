import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router"; 

const ForgotPassword = () => {
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
    if (/^[0-9]?$/.test(value)) { // Allow only single digit
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
          <h1 className=" text-2xl font-bold">Forgot password?</h1>
          
          <p className=" text-sm ">
            Enter email / Phone Number associated with <br /> your account and we’ll send and email with <br /> intructions to reset your password
          </p>


          <div className="relative">
            <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M19.222 1V9.75C19.222 10.4375 18.4766 11 17.5655 11H2.65655C1.74545 11 1 10.4375 1 9.75V1" stroke="#8D8D8D" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.222 1L11.0884 6.0875C10.5086 6.40625 9.72173 6.40625 9.14194 6.0875L1 1H19.222Z" stroke="#8D8D8D" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 1H19.222" stroke="#8D8D8D" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </button>
                    <input
                      className="px-9 py-1 pr-10 rounded-lg border-2 border-black w-full"
                      placeholder="Enter your email here"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    
                  </div>
          <div className="relative">
            <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                    >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.6486 1.21858L14.8913 1.68998C14.8913 1.68998 15.3627 5.93262 10.6486 10.6467C5.93457 15.3607 1.69101 14.8902 1.69101 14.8902L1.2196 10.6476L4.52035 8.76197L6.16981 10.4114C6.16981 10.4114 7.34832 10.1757 8.76253 8.76151C10.1767 7.34729 10.4124 6.16878 10.4124 6.16878L8.76299 4.51933L10.6486 1.21858Z" stroke="#8D8D8D"/>
</svg>
                    </button>
                    <input
                      className="px-9 py-1 pr-10 rounded-lg border-2 border-black w-full"
                      placeholder="Enter your phone number here"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    
                  </div>

            <button className="px-8 py-3 mt-3 mx-6 font-semibold text-center  rounded-3xl shadow-md text-white bg-black">
            Continue
          </button>

         
          

     
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;