import React from 'react'

export default function page() {
  return (
    <div>
      <div className="flex relative bg-[#291770] h-[59px] w-full text-center items-center justify-center mr-9">
        <h2 className="text-white sm:text-[21px] font-bold text-md">
          THE REDEEMED CHRISTIAN CHURCH OF GOD CARRIBEAN PORTAL
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
      <div className="flex justify-center w-64 h-full fixed bg-blue-600">
        <ul className="mt-8 flex-col space-y-4 text-sm text-white">
          <li>@00000000000</li>
          <li className="bg-yellow-700 flex items-center">
            Main Menu{" "}
            <i className="material-icons text-2xl bg-red-700">change_history</i>
          </li>
          <li>Remittance</li>
          <li>Directory</li>
          <li>Bank Account Manager</li>
          <li>Birthdays And Events</li>
          <li>Church And Pastor Manager</li>
          <li>Payment Manager</li>
          <li>Reports</li>
          <li>Search And Excel</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="relative flex items-center ml-80 mr-16 mt-6 bg-[#A5A5A5] h-[51px] border rounded-lg shadow-lg">
        <div className="flex border-0 rounded-lg bg-[#291770] text-white px-3 py-1 ml-[10px]">
          <i className="material-icons">menu </i>
          <p>Toggle Menu</p>
        </div>
        <div className=" absolute right-9 flex space-x-2 text-[#291770]">
          <p>Back</p>
          <p>Change Phone Number</p>
          <p className="text-[#3E3E3E]">Skip update for now</p>
        </div>
      </div>
      <p className="ml-80 mt-7 text-xl text-[#3E3E3E] font-bold">
        A/P OLUWAFEMI GIDEON TAIWO PROFILE (23456789311)
      </p>
      <p className="ml-80 mt-2 text-sm text-[#3E3E3E]">Skip update for now</p>
      <div className="ml-80 mt-7 font-medium bg-[#FF0000] rounded-lg w-[570px] h-12 flex items-center">
        <p className="text-white pl-3">
          IMPORTANT: Your Profile is not updated. Kindly update
        </p>
      </div>

      {/* Container for showing work progress */}
      <div className="relative">
        {/* Horizontal ruler/ bar line */}
        <div>
          <img
            className=" ml-[410px] mt-6 z-10"
            src="./image/ruler.svg"
            alt="Horizontal Bar"
          />
        </div>
        <div className="grid grid-cols-3 absolute -bottom-2">
          {/* 1st column */}
          <div>
            <div className="ml-[410px] w-6 h-6 border-4 border-[#427142] rounded-full flex-col justify-center items-center bg-white">
              <p className="text-center">1</p>
              <img
                className='text-3xl'
                src="./image/pointer.svg" alt="Pointer Triangle" />
              <p className="bg-[#427142] rounded-lg text-white inline-block p-2 -ml-8 mt-3">Personal</p>
            </div>
          </div>
          {/* 2nd column */}
          <div></div>
          {/* 3rd column */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
