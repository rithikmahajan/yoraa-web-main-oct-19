

import { Link, useNavigate } from "react-router";


const AcceptTermsAndConditions = () => {


  const navigate = useNavigate();



  return (
    <div className="w-full min-h-screen flex justify-center items-center  py-16">
      <div className="w-2/6 rounded-xl bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-6">
        <div className="flex flex-col justify-center mt-5 mx-5 gap-3">
         
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <input
              className="text-black border-gray-500"
              type="checkbox"
              id="scales"
              name="scales"
              checked
            />
            <p className="text-sm text-black">
             I have read and accepted the privacy <br /> polices and understand the purchase condition.
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <button className="px-12 py-2 mt-3 mx-6 font-semibold text-center  rounded-3xl shadow-md text-white bg-black">
           Read
          </button>
            <button className="px-12 py-2 mt-3 mx-6 font-semibold text-center  rounded-3xl shadow-md text-black border border-black bg-white">
           Yes
          </button>

          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AcceptTermsAndConditions;
