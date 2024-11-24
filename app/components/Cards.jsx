"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

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
          <motion.div
            key={selectedItem.id} // Framer Motion will re-animate when `key` changes
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-64 z-20 h-64 opacity-70 rounded-full bg-[#c66478] flex items-center justify-center text-start p-6"
          >
            {selectedItem ? (
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold text-white mb-2">{selectedItem.title}</h3>
                <p className="text-sm text-white mb-4">{selectedItem.description}</p>
              </div>
            ) : (
              <p className="text-white">Select an option</p>
            )}
          </motion.div>
        </div>

        {/* Image with Animation */}
        {selectedItem.cover?.url && (
          <motion.div
            key={`image-${selectedItem.id}`} // Ensure animations happen when `selectedItem` changes
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="relative -ml-36 z-0 w-64 h-64"
          >
            <Image
              src={`https://strapi-demo-7o4t.onrender.com${selectedItem.cover.url}`}
              alt={selectedItem.title}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
        )}

        {/* Right Side: Buttons */}
        <div className="flex-1 flex flex-col gap-4">
          {data.map((item) => (
            <button
              key={item.id}
              className={`flex justify-between px-4 py-2 items-center rounded-r-full shadow-md ${
                selectedItem?.id === item.id ? "bg-[#ae223e] text-white" : "bg-gray-100 text-gray-800"
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
