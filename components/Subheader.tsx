import React from 'react'
import Link from 'next/link'

const background = 'https://unsplash.com/@shubzweb3'

function Subheader() {
  return (
    <div
    
      className="flex items-center justify-between text-white px-10 py-5"
    >
      <div>
        <Link href="/" className="text-xl  font-bold">
          DappLottery
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-6 font-semibold">
        <p>Home</p>
        <p>How to play</p>
        <p>All Lottery</p>
        <p>Contact</p>
      </div>
      <button className="flex flex-nowrap border py-2 px-4 rounded-full bg-amber-500 hover:bg-rose-600 cursor-pointer font-semibold text-sm">
        Connect wallet
      </button>
    </div>
  )
}

export default Subheader
