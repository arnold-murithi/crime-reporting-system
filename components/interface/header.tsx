
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="">
    <div className="bg-[#0071dc] px-3 py-2 lg:px-8 text-white flex justify-between items-center">
      {/* Left */}
      <div className="flex  items-center gap-x-3 shrink-0">
        <div className="hover:bg-[#06529a] p-2 rounded-full">
          
        </div>

        <div className="md:flex items-center gap-2 hidden hover:bg-[#06529a] p-3 rounded-full">
          <p className="text-[16px] font-semibold">
            <Link href="./chat">Chat room</Link>
            </p>
        </div>
        <div className="md:flex hidden  items-center gap-2 hover:bg-[#06529a] p-3 rounded-full ">
        
          <p className="text-[16px] font-semibold">
          <Link href="./map">Map</Link>
            </p>
        </div>
      </div>
      {/* Right */}
      <div className="flex  items-center gap-x-2">
        <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full">
        
          <p className="text-[16px] font-semibold">
            <Link href="./authentication">Admin</Link>
            </p>
        </div>
        <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap">
          
          <p className="text-[16px] font-semibold">
          <Link href="./authentication">Sign in</Link>
            </p>
        </div>
        <div className="hover:bg-[#06529a] p-3 rounded-full">
    
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header