import  { useRef, useState } from "react";
import eyeLogo from "../../assets/eye.png";
import googleLogo from "../../assets/google.png";
import appleLogo from "../../assets/apple.png";
import { Link, useNavigate } from "react-router";

const Login = () => {
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
      <p className=" font-light text-end text-sm">SKIP</p>
        
        <h1 className=" font-bold text-2xl text-center my-4">Log into your account</h1>

        <div className="flex justify-end text-xs my-3 mx-3">
          <button
            onClick={() => {
              navigate("/login-phone")
              setActiveOption("phone")}}
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
          
          
          <p className="text-end text-black text-xs ">
           Forgot Password?
          </p>

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

export default Login;