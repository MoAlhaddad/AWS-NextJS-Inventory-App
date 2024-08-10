"use client";

import React, { useEffect } from 'react'
import Navbar from '@/app/(components)/Navbar/Navbar';
import Sidebar from '@/app/(components)/Navbar/Sidebar';
import StoreProvider, { useAppSelector } from './redux';

const DashboardLayout = ({children}:{children: React.ReactNode}) => {
        const isSideBarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed);
        
        
        
        const isDarkMode = useAppSelector((state) => state.global.isDarkmode);

        useEffect(() => {
          if (isDarkMode) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.add("light");
          }
        });
    return (
        <div
        className={`${
          isDarkMode ? "dark" : "light"
        } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
      >
      
        <Sidebar/>
        <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSideBarCollapsed ? "md:pl-24": "md:pl-72" }`}>
          <Navbar />
        {children}
        </main>
        
      </div>
    )
}


const DashboardWrapper = ({children}:{children: React.ReactNode}) => {
  return (
  <StoreProvider>
   <DashboardLayout>{children}</DashboardLayout>
  </StoreProvider>
  )
}

export default DashboardWrapper
