import Button from "@mui/material/Button";
import React from "react";
import { FaCloudUploadAlt, FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const MyList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="products-section-heading mb-6 text-3xl text-black-900 text-center">
          <hr />
          My List
          <hr />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[25%_75%] gap-4">
          <div className="bg-white shadow-xl">
            <div className="w-full flex items-center justify-center flex-col p-5">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative group">
                <img
                  src="/images/men.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="overlay bg-[rgba(0,0,0,0.6)] w-[100%] h-[100%] absolute top-0 left-0 z-50 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
                  <FaCloudUploadAlt className="text-white text-[22px]" />
                  <input
                    type="file"
                    className="opacity-0 w-full h-full absolute top-0 left-0"
                  />
                </div>
              </div>
              <h3 className="font-[500]">Brijesh Kumar</h3>
              <h5 className="text-[14px] font-[400]">
                brijesh.kumar@telusinternational.com
              </h5>
            </div>
            <ul className="list-none pb-5">
              <li className="w-full">
                <NavLink to="/my-account" activeClassName="isActive">
                  <Button className="w-full !text-left !justify-start !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <FaRegUser className="text-[16px]" /> My Profile
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink to="/my-list">
                  <Button className="w-full !text-left !justify-start !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <FaRegHeart className="text-[16px]" /> My List
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <Button className="w-full !text-left !justify-start !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                  <IoBagCheckOutline className="text-[18px] " /> My Orders
                </Button>
              </li>
              <li className="w-full">
                <Button className="w-full !text-left !justify-start !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                  <IoIosLogOut className="text-[18px]" /> Logout
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
