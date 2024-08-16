'use client'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state'
//cannot pass OnClick function on server component in NEXTJS this is why we import use client
import { Bell, Menu, Moon, Settings, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
      (state) => state.global.isSidebarCollapsed );
  const isDarkMode = useAppSelector((state) => state.global.isDarkmode);


  const toggleSidebar = () => {
      dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
  };

  const toggleDarkmode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  }
  return (
    <div className='flex justify-between items-center w-full mb-7'>
      {/*left side */}
      <div className='flex justify-between items-center gap-5 '>
        <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
            <Menu className='w-4 h-4' />
        </button>

      <div className="relative">
        <input type="search" placeholder='Start type  to search groups & products' className='pl-10 py-2 w-50 md:w-60  border-2 border-gray-500 bg-white rounded-lg focus:outline-none focus:border-blue-500'/>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className='text-gray-500' size={20} />
        </div>
      </div>
      </div>
      {/* right side*/}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
            <div>
                <button onClick={toggleDarkmode}>
                  {isDarkMode ? (
                    <Sun className='cursor-pointer text-gray-500' size={24}/>
                  ):(   <Moon className='cursor-pointer text-gray-500' size={24}/> ) }
                </button>
            </div>
            <div className="relative">
                <Bell className='cursor-pointer text-gray-500 ' size={24}/>
                <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
                3
                </span>
            </div>
            <hr className='w-0 h-7 border border-solid border-1 border-gray-300  mx-3' />
            <div className='flex items-center gap-3 cursor-pointer'>
                <Image src="https://s3-inventorymanagementmo.s3.amazonaws.com/profile.jpg" alt="Profile" width={50} height={50} className='rounded-full h-full object-cover'/>
                <span className='font-semibold'> Mohamad Haddad</span>
            </div>
        </div>
        <Link href='/settings'>
            <Settings className='cursor-pointer text-gray-500' size={24} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
