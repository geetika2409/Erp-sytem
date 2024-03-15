import React from 'react'
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { RiDashboardFill, RiLogoutBoxRLine} from "react-icons/ri";
import { MdProductionQuantityLimits, MdBorderColor } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = () => {

  // State to control sidebar open/close
  const [open, setOpen] = useState(true);

  // Array containing sidebar menu items
  const Menus = [
    {title : "Dashboard", path : "/"},
    { title: "Products", icon: <MdProductionQuantityLimits />, path : "/products"},
    { title: "Order", icon: <MdBorderColor /> , path : "/orders"},
    { title: "Settings", spacing: true, icon: <IoMdSettings />},
    { title: "Logout", icon: <RiLogoutBoxRLine />},
  ];

  return (
    <div className='sidebar-container flex'>
        {/* Sidebar container */}
        <div className = {`bg-dark-blue h-full text-white p-5 pt-8 ${open ? "w-72" : "w-20"} relative duration-300`}>
          {/* Sidebar toggle button */}
          <BsArrowLeftShort 
            className={`arrow-icon bg-white text-dark-blue text-3xl rounded-full 
              absolute -right-3 top-9 border border-dark-blue cursor-pointer ${!open && "rotate-180"} `
            }
            onClick={() => setOpen(!open)} 
          />
          <h1 className = {`text-2xl font-semibold text-center text-blue-100 ${!open && "scale-0"}`}>
            ERP SYSTEM
          </h1>

          <div className = {`flex items-center rounded-md bg-light-blue mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
              <BsSearch 
                className={`text-white text-lg block
                float-left cursor-pointer ${open && "mr-2"}`}
              />
              <input type = {"search"} placeholder = 'Search'
                className = {`text-base bg-transparent w-full text-white
                focus:outline-none ${!open && "hidden"}`} />
          </div>
          
          {/* Sidebar menu */}
          <ul className='pt-2'>
            {
              Menus.map((menu, indx) => (
                <>
                  <Link to = {menu.path}>
                    <li key={indx}
                      className={`text-gray-300 text-sm flex items-center
                    gap-x-4 cursor-pointer p-2 hover:bg-light-blue
                    rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                      <span className={`text-2xl block float-left`}>
                        {menu.icon ? menu.icon : <RiDashboardFill />}
                      </span>
                      <span className={`font-medium text-xl flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                    </li>
                  </Link>
                </>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default Sidebar