import React, { useState } from "react";
import { Link } from "react-router";

const Footer = () => {
  const [isShow, setIsShow] = useState({
    social: false,
    brand: false,
    cservices: false,
  });

  return (
    <>
      {/* "Mobile Footer" */}
      <div className=" sm:hidden block">
        <div className=" flex flex-col my-8 mx-4 bg-black rounded-xl">
          <div className=" flex flex-col text-white font-light px-3 py-2  gap-4">
            <div
              onClick={() =>
                setIsShow((prev) => ({ ...prev, social: !prev.social }))
              }
              className=" flex justify-between cursor-pointer items-center"
            >
              <h3 className=" text-sm">SOCIAL</h3>
              <div>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="22.24"
                    y="28.8521"
                    width="12"
                    height="1"
                    transform="rotate(-90 22.24 28.8521)"
                    fill="white"
                  />
                  <rect
                    x="16.74"
                    y="23.3521"
                    width="1"
                    height="12"
                    transform="rotate(-90 16.74 23.3521)"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {isShow.social && (
              <Link
                className=" text-xs text-[#999]"
                to="mailto:contact@yoraa.in"
              >
                contact@yoraa.in
              </Link>
            )}
            <hr className="h-px  mr-3 bg-white  " />
          </div>

          <div className=" flex flex-col text-white font-light p-3 gap-4">
            <div
              onClick={() =>
                setIsShow((prev) => ({ ...prev, brand: !prev.brand }))
              }
              className=" flex justify-between cursor-pointer items-center"
            >
              <h3 className=" text-sm">BRAND</h3>
              <div>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="22.24"
                    y="28.8521"
                    width="12"
                    height="1"
                    transform="rotate(-90 22.24 28.8521)"
                    fill="white"
                  />
                  <rect
                    x="16.74"
                    y="23.3521"
                    width="1"
                    height="12"
                    transform="rotate(-90 16.74 23.3521)"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {isShow.brand && (
              <ul className=" flex flex-col gap-3 text-xs text-[#999]">
                <Link to="/about-us">
                  <li>About Us</li>
                </Link>
                <Link to="/contact-us">
                  <li>Contact Us</li>
                </Link>

                <Link to="https://yoraa.app/">
                  <li>Terms & Conditions</li>
                </Link>
                <Link to="https://www.yoraa.co/">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            )}
            <hr className="h-px  mr-3 bg-white  " />
          </div>

          <div className=" flex flex-col text-white font-light p-3 gap-4">
            <div
              onClick={() =>
                setIsShow((prev) => ({ ...prev, cservices: !prev.cservices }))
              }
              className=" flex justify-between cursor-pointer items-center"
            >
              <h3 className=" text-sm">CLIENT SERVICES</h3>
              <div>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="22.24"
                    y="28.8521"
                    width="12"
                    height="1"
                    transform="rotate(-90 22.24 28.8521)"
                    fill="white"
                  />
                  <rect
                    x="16.74"
                    y="23.3521"
                    width="1"
                    height="12"
                    transform="rotate(-90 16.74 23.3521)"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {isShow.cservices && (
              <ul className=" flex flex-col gap-3 text-xs text-[#999] ">
                <Link to="/refund-cancel">
                  <li>Refund And Cancel Policy</li>
                </Link>
                <li>Payment Policy</li>

                <Link to="/shipping-and-delivery">
                  <li>Shipping And Delivery Policy</li>
                </Link>
                <li>FAQs</li>
                <li>Track Order</li>
                <li>Exchange & Returns</li>
                <Link to="/remove-account">
                  <li>Delete Account</li>
                </Link>
              </ul>
            )}
            <hr className="h-px  mr-3 bg-white  " />
          </div>
          <div>
            <p className=" py-4 text-white w-full font-light text-center text-xs">
              © 2025 YORA. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* "Large Screen Footer" */}
      <div className=" hidden sm:block">
        <div className=" grid sm:grid-cols-3  mx-7 my-8 bg-black  rounded-l-2xl rounded-r-2xl">
          <div className=" min-h-64  col-span-1 rounded-l-2xl">
            <div className=" flex flex-col text-white font-light ml-6 mt-8 gap-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="115" height="25" viewBox="0 0 115 25" fill="none">
  <path d="M0.201172 0C0.201172 0 1.10157 0.587271 2.90627 3.29545C4.71097 6.00362 8.94672 13.2529 8.94672 13.2529V19.6979C8.94672 19.6979 8.71184 22.9559 7.88974 24.3287H12.9867C12.9867 24.3287 12.0864 21.7851 12.0472 19.9186V13.1818C12.0472 13.1818 17.9115 2.66703 18.5261 1.59349C19.1446 0.52368 19.908 0 19.908 0H14.9676C14.9676 0 15.0576 1.23439 14.9089 1.86655C14.7601 2.4987 10.497 10.2978 10.497 10.2978C10.497 10.2978 5.90888 2.22564 5.73271 1.45508C5.55655 0.684526 5.76403 0 5.76403 0H0.205087H0.201172Z" fill="white"/>
  <path d="M114.525 24.3287C114.525 24.3287 112.877 22.6829 112.024 21.1417C111.198 19.653 102.495 1.24561 101.935 0.0598492V0.0411462C101.935 0.0411462 101.935 0.0448867 101.932 0.0523678C101.932 0.0448867 101.932 0.0486274 101.928 0.0411462V0.0598492C101.368 1.24561 91.9998 19.653 91.1738 21.1417C90.751 21.9011 90.1364 22.6866 89.6235 23.2888C89.1068 22.6866 88.4922 21.9011 88.0733 21.1417C87.2473 19.653 78.5448 1.24561 77.985 0.0598492V0.0411462C77.985 0.0411462 77.985 0.0448867 77.9811 0.0523678C77.9811 0.0448867 77.9811 0.0486274 77.9772 0.0411462V0.0598492C77.4174 1.24561 68.0494 19.653 67.2233 21.1417C66.8084 21.8899 66.2094 22.6604 65.6966 23.2589C64.8275 22.4996 63.5905 21.2727 62.0911 19.3687C59.0337 15.4897 58.0119 13.4736 58.0119 13.4736C58.0119 13.4736 63.3047 11.9399 63.2264 6.59089C63.1481 1.04362 55.5417 0 55.5417 0H48.9141C48.9141 0 50.0024 1.34661 50.0024 2.7194V19.7166C50.0024 19.7166 49.9436 22.709 49.2977 24.3287H54.5043C54.5043 24.3287 53.3299 21.0594 53.2399 19.3313V1.87029C53.2399 1.87029 58.5209 1.79548 59.5465 5.69316C60.3412 8.71928 58.7988 11.7566 53.4278 12.9985C53.4278 12.9985 54.0541 13.6942 55.7805 16.0359C57.5069 18.3775 62.416 23.8873 63.5631 24.3287H70.637C70.637 24.3287 70.1946 22.4061 71.3143 20.0196C71.6118 19.3837 72.2264 18.0932 72.9624 16.5446H82.4596C83.129 18.0932 83.6927 19.3837 83.9902 20.0196C85.1059 22.4098 84.6675 24.3287 84.6675 24.3287H94.5953C94.5953 24.3287 94.1529 22.4061 95.2725 20.0196C95.57 19.3837 96.1847 18.0932 96.9206 16.5446H106.418C107.087 18.0932 107.651 19.3837 107.948 20.0196C109.064 22.4098 108.626 24.3287 108.626 24.3287H114.537H114.525ZM74.2112 13.9149C76.0041 10.1669 77.9184 6.16821 77.9772 6.02607C78.0359 6.16821 79.7192 10.1631 81.3243 13.9149H74.2151H74.2112ZM98.1655 13.9149C99.9585 10.1669 101.873 6.16821 101.932 6.02607C101.99 6.16821 103.674 10.1631 105.279 13.9149H98.1694H98.1655Z" fill="white"/>
  <path d="M101.908 0C101.908 0 101.92 0.0228814 101.927 0.0419494V0H101.908Z" fill="white"/>
  <path d="M101.936 0V0.0419494C101.943 0.0228814 101.955 0 101.955 0H101.936Z" fill="white"/>
  <path d="M77.9531 0C77.9531 0 77.9646 0.0228814 77.9722 0.0419494V0H77.9531Z" fill="white"/>
  <path d="M77.9805 0V0.0419494C77.9881 0.0228814 77.9996 0 77.9996 0H77.9805Z" fill="white"/>
  <path d="M33.1445 0.0449219C26.1919 0.0449219 20.5547 5.47998 20.5547 12.1868C20.5547 18.8937 26.1919 24.3287 33.1445 24.3287C40.0971 24.3287 45.7344 18.8937 45.7344 12.1868C45.7344 5.47998 40.0971 0.0449219 33.1445 0.0449219ZM34.8866 21.9946C29.9305 22.739 25.1506 18.9199 24.2072 13.4586C23.2637 7.99739 26.5169 2.97005 31.4729 2.22194C36.429 1.47756 41.2089 5.29669 42.1524 10.7579C43.0958 16.2192 39.8427 21.2465 34.8866 21.9946Z" fill="white"/>
</svg>
              </div>
              <p className="text-sm text-[#999]">Subscribe to indulge in the exclusive updates and events.</p>
              <div className=" flex gap-2">
                <input className=" bg-black border-white border px-8 py-3 rounded-3xl text-sm"  placeholder="enter your email..." type="text" />
                <button className=" bg-white text-black px-6 text-sm font-medium py-3 rounded-3xl">JOIN</button>
              </div>
              <h3 className=" text-sm">SOCIAL</h3>
              <Link
                className=" text-xs text-[#999]"
                to="mailto:contact@yoraa.in"
              >
                contact@yoraa.in
              </Link>
            </div>
          </div>
          <div className=" min-h-64 bg-black  col-span-1">
            <div className=" flex flex-col text-white font-light ml-6 mt-8 gap-4">
              <h3 className=" text-sm">BRAND</h3>

              <ul className=" flex flex-col gap-3 text-xs text-[#999]">
                <Link to="/about-us">
                  <li>About Us</li>
                </Link>
                <Link to="/contact-us">
                  <li>Contact Us</li>
                </Link>

                <Link to="https://yoraa.app/">
                  <li>Terms & Conditions</li>
                </Link>
                <Link to="https://www.yoraa.co/">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className=" min-h-64 bg-black col-span-1 rounded-r-2xl">
            <div className=" flex flex-col text-white font-light ml-6 mt-8 gap-4 ">
              <h3 className=" text-sm">CLIENT SERVICES</h3>

              <ul className=" flex flex-col gap-3 text-xs text-[#999] ">
                <Link to="/refund-cancel">
                  <li>Refund And Cancel Policy</li>
                </Link>
                <li>Payment Policy</li>
                <Link to="/shipping-and-delivery">
                  <li>Shipping And Delivery Policy</li>
                </Link>
                <li>FAQs</li>
                  <Link to="/order">  
                <li>Track Order</li>
                  </Link>
                <li>Exchange & Returns</li>
                <Link to="/remove-account">
                  <li>Delete Account</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className=" py-3 col-span-3 ">
            <hr className="h-px  mx-10 bg-white " />
            <p className=" py-4 pt-6 text-white w-full font-light text-center text-xs">
              © 2025 YORA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
