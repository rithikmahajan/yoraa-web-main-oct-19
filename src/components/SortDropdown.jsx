import { useState } from "react";

export const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex items-center relative mr-3">
      <p className="text-xs hidden sm:block ">SORT BY:</p>
      <button
        onClick={toggleDropdown}
        className="hover:text-primary-700 hidden sm:flex w-full items-center justify-center rounded-lg bg-white px-3 py-2 text-xs font-medium text-gray-900 sm:w-auto"
      >
        Date, New To Old
        <svg
          className="-me-0.5 ms-2 h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

   {/* "Mobile button" */}
      <button
       onClick={toggleDropdown}
       className="sm:hidden bg-gray-300 flex items-center w-24 py-[6px] justify-center  rounded-sm ">
        <p className=" text-xs font-semibold">SORT BY</p>
      <svg
          className="-me-0.5 ms-2 h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownSort1"
          className="z-50 absolute top-full mt-2 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow "
        >
          <ul
            className="p-2 text-left text-sm font-medium text-gray-500 "
            aria-labelledby="sortDropdownButton"
          >
            <li>
              <a
                href="#"
                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                Featured
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                Best selling
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                Alphabetically, A-Z
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                Alphabetically, Z-A
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                Price, low to high
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                Price, high to low
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                Date, old to new
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                Date, new to old
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};