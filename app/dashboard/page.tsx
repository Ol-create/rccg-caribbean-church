import React from 'react'

export default function page() {
  return (
    <div>
      <div className="flex relative bg-[#291770] h-[59px] w-full text-center items-center justify-center mr-9">
        <h2 className="text-white sm:text-[21px] font-bold text-md">
          THE REDEEMED CHRISTIAN CHURCH OF GOD CARIBBEAN PORTAL
        </h2>
        <div className=" absolute right-20 flex space-x-7">
          <img
            className="w-8 h-8 rounded-full"
            src="./image/avatar.svg"
            alt="Avatar"
          />
          <img
            className="w-8 h-8 rounded-full bg-white"
            src="./image/rccg_logo.svg"
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex justify-center w-64 h-full fixed bg-[#291770]  pr-3">
        <ul className="mt-8 flex-col space-y-4 text-sm text-white">
          <li className="flex">@00000000000</li>
          <li className="flex">
            Main Menu{" "}
            {/* <i className="material-icons text-2xl bg-red-700">change_history</i> */}
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
          <li className="flex">
            Remittance{" "}
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
          <li className="flex">
            Directory{" "}
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
          <li className="flex">
            Bank Account Manager{" "}
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
          <li className="flex">
            Birthdays And Events{" "}
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
          <li className="flex">
            Church And Pastor Manager{" "}
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
          <li className="flex">
            Payment Manager{" "}
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
          <li className="flex">
            Reports{" "}
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
          <li className="flex">
            Search And Excel
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
          <li className="flex">
            <a href="/login">Login</a>
            <img
              className="absolute right-2"
              src="./image/Vector.svg"
              alt="collapse"
            />
          </li>
        </ul>
      </div>
      {/* Welcome banner */}
      <div className=" ml-[400px] mt-4 grid grid-cols-8 gap-x-5">
        <div className="col-span-4 ">
          <div className="h-10 border border-[#A5A5A5] items-center pl-2 flex rounded-lg shadow-lg">
            <p className="text-sm text-[#3E3E3E]">
              Welcome! You are logged in as:{" "}
              <span className="text-black font-medium">PASTOR</span>
            </p>
          </div>
          <div className="relative flex items-center mr-16 mt-6 bg-[#A5A5A5] h-[51px] border rounded-lg shadow-lg">
            <div className="flex border-0 rounded-lg bg-[#291770] text-white px-3 py-1 ml-[10px]">
              <i className="material-icons">menu </i>
              <p>Toggle Menu</p>
            </div>
            <div className=" absolute right-9 flex space-x-2 text-[#291770]">
              <p>Back</p>
              <p>Remittance</p>
            </div>
          </div>
          <p className="mt-2">
            Period: December 2023. Remittance Status:{" "}
            <span className=" text-red-600"> UNPAID</span>{" "}
            <span className="text-[#291770]">details</span>
          </p>
          <div className="grid grid-cols-3 gap-y-2 mt-9">
            <div className="w-44 h-44 p-1 bg-gray-300 flex-col justify-center items-center">
              <img
                className="ml-7 mt-6"
                src="./image/money_bills.svg"
                alt=" Money Bills"
              />
              <p className="mt-6 ml-3 text-sm">Monthly Remittance</p>
            </div>
            <div className="w-44 h-44 p-1 bg-gray-300 flex-col justify-center items-center">
              <img
                className="ml-10 mt-6"
                src="./image/rccg_logo.svg"
                alt="RCCG Logo"
              />
              <p className="mt-6 ml-9 text-sm">Church Profile</p>
            </div>
            <div className="w-44 h-44 p-1 bg-gray-300 flex-col justify-center items-center">
              <img
                className="ml-11 mt-6"
                src="./image/excel_icon.svg"
                alt="Excel Icon"
              />
              <p className="mt-6 ml-6 text-sm">Download In Excel</p>
            </div>
            <div className="w-44 h-44 p-1 bg-gray-300 flex-col justify-center items-center">
              <img
                className="ml-9 mt-6"
                src="./image/money_transfer.svg"
                alt="Money Transfer"
              />
              <p className="mt-6 ml-8 text-sm">Income Report</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 gap-3">
          <div className="mb-4 flex items-center justify-center border border-[#A5A5A5] rounded-lg shadow-lg h-10">
            <p className="text-[#3E3E3E]">Top Events</p>
          </div>
          <div className="grid grid-rows-2 text-white">
            <div className="bg-[#006400] opacity-60 h-[155px] rounded-lg flex items-center justify-center">
              <p className="">Today’s Birthday</p>
            </div>
            <div className="bg-[#291770] -mt-4 opacity-60 h-[205px] rounded-lg flex items-center justify-center">
              <p>Upcoming Programs</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./image/chat_icon.svg" alt="Chat Icon"
        className='fixed right-10 bottom-12 '/>
    </div>
  );
}
