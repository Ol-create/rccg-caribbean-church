import React from 'react'

export default function page() {
  return (
    <div>
      <div className="flex relative bg-[#291770] h-[59px] text-center items-center justify-center mr-9">
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
    </div>
  );
}
