import React, { useRef, useState } from "react";
import eyeLogo from "../../assets/eye.png";
import googleLogo from "../../assets/google.png";
import appleLogo from "../../assets/apple.png";
import { Link, useNavigate } from "react-router";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeOption, setActiveOption] = useState("email");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate()

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
        <div className="flex justify-center my-6 gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="50"
            viewBox="0 0 32 50"
            fill="none"
          >
            <path
              d="M17.5111 40.2085L11.9847 50L10.1588 45.6935L15.687 35.902L17.5111 40.2085Z"
              fill="black"
            />
            <path
              d="M11.9325 15.6367L17.2431 22.6168L21.2242 15.9154H25.5147L15.0394 33.5687H14.3306L14.7335 34.0828L7.48909 46.2909H3.19676L15.1473 26.154H17.9069L16.5973 24.4814L13.9978 24.447L7.24443 15.5733L11.9325 15.6367Z"
              fill="black"
            />
            <path
              d="M24.7556 27.6112L19.2273 37.4027L17.4032 33.0962L22.9296 23.3047L24.7556 27.6112Z"
              fill="black"
            />
            <path
              d="M32 15.0139L26.4718 24.8054L24.6476 20.4989L30.174 10.7074L32 15.0139Z"
              fill="black"
            />
            <path
              d="M31.1563 4.2703L25.8188 14.1613L23.9119 9.88921L29.2512 0L31.1563 4.2703Z"
              fill="black"
            />
            <path
              d="M4.6881 4.84052L11.4396 13.7124L6.75332 13.649L0 4.77535L4.6881 4.84052Z"
              fill="black"
            />
          </svg>
          <p className="text-lg font-inter font-bold">BECOME A YORAA MEMBER</p>
        </div>
        <p className="text-center text-[#8D8D8D] text-[14px]">
          Create your profile and get first access to the <br /> very best
          products and inspirations.
        </p>

        <div className="flex justify-end text-xs my-3 mx-3">
          <button
            onClick={() => {
              navigate("/signup-phone")
              setActiveOption("phone")
            } }
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
            onClick={() => setActiveOption("email")}
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
          <input
            className="px-2 py-1 rounded-lg border-2 border-black"
            placeholder="Email"
            type="email"
          />
          <div className="relative">
            <input
              className="px-2 py-1 pr-10 rounded-lg border-2 border-black w-full"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
            >
              <img
                src={eyeLogo}
                alt="toggle password visibility"
                className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
          <div className="relative">
            <input
              className="px-2 py-1 pr-10 rounded-lg border-2 border-black w-full"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
            >
              <img
                src={eyeLogo}
                alt="toggle confirm password visibility"
                className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <input
              className="text-black border-gray-500"
              type="checkbox"
              id="scales"
              name="scales"
              checked
            />
            <p className="text-xs">
              Sign up for emails to get updates on YORAA products, offers and your
              Member benefits
            </p>
          </div>
          <p className="text-center text-gray-500 text-xs">
            By creating an account, you agree to the{" "}
            <span className="underline">Privacy <br /> Policy</span> and{" "}
            <span className="underline">Terms of Use.</span>
          </p>

          <button className="px-8 py-3 mt-3 mx-6 text-center text-sm rounded-3xl shadow-md text-white bg-black">
            SIGN UP
          </button>
          <p className="text-xs text-gray-500 text-center">
            Already a Member?
            <Link to={"/login"}>
            
            <span className="underline text-center text-black">Sign In</span>
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

export default Signup;