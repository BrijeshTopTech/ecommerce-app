import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

import "./AccountMenu.css";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Button
        className="myAccountWrap !text-[#000] cursor-pointer flex items-center gap-3"
        onClick={handleClick}
      >
        <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]">
          <FaRegUser className="text-[16px] text-[rgba(0,0,0,0.7)]" />
        </Button>

        <div className="info flex flex-col">
          <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.6)] font-[500] mb-0 capitalize text-left justifiy-start">
            Brijesh Kumar
          </h4>
          <span className="text-[13px] text-[rgba(0,0,0,0.6)] font-[400] normal-case text-left justify-start">
            brijesh.kumar@telusinternational.com
          </span>
        </div>
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/my-account">
          <MenuItem onClick={handleClose} className="flex gap-2">
            <FaRegUser className="text-[18px]" />{" "}
            <span className="text-[14px]">My Account</span>
          </MenuItem>
        </Link>
        <Link to="/my-orders">
          <MenuItem onClick={handleClose} className="flex gap-2">
            <IoBagHandleOutline className="text-[18px]" />{" "}
            <span className="text-[14px]">Orders</span>
          </MenuItem>
        </Link>
        <Link to="/my-list">
          <MenuItem onClick={handleClose} className="flex gap-2">
            <FaRegHeart className="text-[18px]" />{" "}
            <span className="text-[14px]">My List</span>
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose} className="flex gap-2">
          <HiOutlineLogout className="text-[18px]" />{" "}
          <span className="text-[14px]">Log Out</span>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
