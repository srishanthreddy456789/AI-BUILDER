import React from 'react';
import { AiFillHome, AiFillFolder, AiFillSetting } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-24 bg-gray-900 text-white p-4 shadow-xl"> {/* Increased width, darker bg, added shadow */}
      {/* Top Section - Logo/Brand */}
      <div className="flex items-center justify-center h-16 w-16 mb-10 mt-2"> {/* More margin */}
        <div className="h-12 w-12 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-lg">
          AI
        </div> {/* Colorful logo */}
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col items-center space-y-10"> {/* Increased space-y */}
        {/* Home Icon */}
        <div className="relative group cursor-pointer flex flex-col items-center p-2 rounded-lg hover:bg-gray-700 transition-all duration-200"> {/* Added hover background */}
          <AiFillHome className="text-3xl text-purple-400 group-hover:text-purple-200 transition-colors duration-200" /> {/* Brighter purple */}
          <span className="absolute left-full ml-4 py-1 px-3 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Home
          </span>
        </div>

        {/* Folder Icon */}
        <div className="relative group cursor-pointer flex flex-col items-center p-2 rounded-lg hover:bg-gray-700 transition-all duration-200">
          <AiFillFolder className="text-3xl text-purple-400 group-hover:text-purple-200 transition-colors duration-200" />
          <span className="absolute left-full ml-4 py-1 px-3 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Projects
          </span>
        </div>

        {/* Settings Icon */}
        <div className="relative group cursor-pointer flex flex-col items-center p-2 rounded-lg hover:bg-gray-700 transition-all duration-200">
          <AiFillSetting className="text-3xl text-purple-400 group-hover:text-purple-200 transition-colors duration-200" />
          <span className="absolute left-full ml-4 py-1 px-3 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Settings
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;