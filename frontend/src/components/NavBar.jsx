import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import LogoutModal from './modal/LogoutModal'
import StockProfile from '../assets/StockProfile.jpg'

const NavBar = ({notifButtonCircle}) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Diary</a>
        </div>
        <div className="flex gap-2">
          
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span className={`badge badge-xs badge-primary indicator-item`}></span>
            </div>
          </button>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring-2 ring-green-600 rounded-full p-[0.5px]">
                <img
                  className=''
                  alt="Tailwind CSS Navbar component"
                  src={StockProfile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("logout_modal").showModal()}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <LogoutModal 
        id="logout_modal"
        cancelOnclick={() => document.getElementById("logout_modal").close()}
      />


      <Outlet />
    </div>
  )
}

export default NavBar
