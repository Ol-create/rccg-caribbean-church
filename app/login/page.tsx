import React from 'react'

export default function Login() {
  return (
    <>
      <div className="flex bg-[#291770] h-[59px] text-center items-center justify-center">
        <h2 className="text-white sm:text-[21px] font-bold text-md">
          THE REDEEMED CHRISTIAN CHURCH OF GOD CARRIBEAN PORTAL
        </h2>
      </div>
      {/* Image Section */}
      <div className="flex flex-col justify-center items-center mt-7">
        <img src="./image/rccg_logo.svg" alt="Redeem Logo" />
        <p className="text-[#006400] font-bold text-md">Divine Repositioning</p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center mt-11">
        <form className="w-[50%] mx-auto">
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              className="pl-7 mb-[12px] h-[51px] w-full border border-[#A5A5A5] rounded-lg shadow-lg"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="pl-7 h-[51px] w-full border border-[#A5A5A5] rounded-lg shadow-lg "
            />
          </div>
          <div className="mt-5">
            <p>Forgot Or New User? Click Here</p>
            <p className="mt-3">Having Login Errors? Click here To Resolve</p>
          </div>
          <button className="mt-[24px] bg-[#F0AD4E] text-white h-[51px] w-full border border-[#A5A5A5] rounded-lg">
            Login
          </button>
        </form>
      </div>
      {/* Contact Info Section */}
      <div className="bg-[#8D0D19] flex flex-col items-center justify-center rounded-lg mt-20 w-[50%] mx-auto text-white">
        <p className="mt-3  mb-6 underline ">CONTACT US</p>
        <div className="grid grid-cols-3 gap-x-9 mb-12">
          <div>
            <p>Call:</p>
            <p>00000000000</p>
            <p>00000000000</p>
          </div>
          <div>
            <p>Call Center No:</p>
            <p>00000000000</p>
          </div>
          <div>
            <p>Email:</p>
            <p>portal@rccgcarribean.org</p>
          </div>
        </div>
      </div>
      <div className=" flex border w-[50%] h-[51px] items-center shadow-lg rounded-lg justify-center mx-auto my-6">
        <p className="text-[#291770]" >
          Towards 100% Paperless Church Administration
        </p>
      </div>
    </>
  );
}
