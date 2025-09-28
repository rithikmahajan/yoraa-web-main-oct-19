
import { Link, useNavigate } from "react-router";


const PasswordChanged = () => {


  const navigate = useNavigate();



  return (
    <div className="w-full min-h-screen flex justify-center items-center  py-16">
      <div className="w-2/6 rounded-xl bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-6">
        <div className="flex flex-col justify-center mt-5 mx-5 gap-3">
          <h1 className=" text-2xl font-bold">Your password has been changed</h1>

          <p className=" text-sm ">
            Welcome back! Discover now!
          </p>

          <button className="px-8 py-3 mt-3 mx-6 font-semibold text-center  rounded-3xl shadow-md text-white bg-black">
           Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChanged;
