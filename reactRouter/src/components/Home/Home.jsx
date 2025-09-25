import React from "react";

export default function Home() {
  return (
    <div className="mx-auto mt-0 h-113 w-full items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full w-full">
        {/* Left side */}
        <div className="flex justify-center items-center">
          <img
            className="w-100 h-60 border-orange-600 border-2 rounded-lg shadow-amber-500 shadow-xl"
            src="https://imgs.search.brave.com/xE9krDnlQDLUzhQ7atzUiDg-ed6s6IJ7InTx_F3pCIU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDExMTM5NTEv/MTI4MS03Njh4NTkx/LnBuZw"
            alt="Logo"
          />
        </div>

        {/* Right Side */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Downlaod Now
          </h1>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
            Download Now
          </button>

          <p className="text-gray-600 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}
