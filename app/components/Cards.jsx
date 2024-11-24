"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Cards = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(data[0]); // Default to the first item

  // Handle button click
  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-col items-center p-8">
      {/* Title and Subtitle */}
      <div className="w-full max-w-xl text-center mb-8">
        <h1 className="text-sm font-medium text-gray-500">WHY CHOOSE US</h1>
        <h2 className="text-2xl font-bold text-gray-900">We Are Different From Others</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap justify-between items-center gap-8 w-full max-w-4xl">
        {/* Left Side: Circle with Selected Item Info */}
        <div className="flex-1 flex flex-col items-center">
          <div
            className={`w-64 h-64 opacity-70 rounded-full bg-[#c66478] z-50 flex items-center justify-center text-start p-6 transform transition-all duration-500 ${
              selectedItem ? "scale-100 opacity-100" : "scale-90 opacity-50"
            }`}
          >
            {selectedItem ? (
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold text-white mb-2">{selectedItem.title}</h3>
                <p className="text-sm text-white mb-4">{selectedItem.description}</p>
              </div>
            ) : (
              <p className="text-white">Select an option</p>
            )}
          </div>
        </div>

        {/* Image with Animation */}
        {selectedItem.cover?.url && (
          <div
            className={`relative -ml-36 z-0 w-64 h-64 rounded-full overflow-hidden transform transition-transform duration-500 ${
              selectedItem ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-50"
            }`}
          >
            <Image
              src={`https://strapi-demo-7o4t.onrender.com${selectedItem.cover.url}`}
              alt={selectedItem.title}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        )}

        {/* Right Side: Buttons */}
        <div className="flex-1 flex flex-col gap-4">
          {data.map((item) => (
            <button
              key={item.id}
              className={`flex justify-between px-4 py-2 items-center rounded-r-full shadow-md transform transition-all duration-300 ${
                selectedItem?.id === item.id
                  ? "bg-[#ae223e] text-white scale-105"
                  : "bg-gray-100 text-gray-800"
              }`}
              onClick={() => handleButtonClick(item)}
            >
              <IoIosArrowBack />
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
