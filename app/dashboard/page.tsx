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
          <li className='bg-yellow-700 flex items-center'>
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
    </div>
  );
}
