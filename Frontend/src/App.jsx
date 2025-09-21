import React from 'react';
import UIGenerator from './components/UIGenerator.jsx';
import './App.css'; // Make sure this is linked

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="flex">
        {/* Mock Sidebar */}
        <aside className="w-64 bg-gray-950 p-6 hidden md:block border-r border-gray-800">
          <div className="flex items-center mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg mr-3 flex items-center justify-center">
              {/* Sidebar Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0l-2-1m2 1V2M4 7l2 1M4 7l2-1M4 7v2.5M12 21.5V19M12 19l2-1m-2 1l-2-1m2-1.5V14" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">AI Builder</h1>
          </div>
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#" className="flex items-center p-3 bg-gray-800 rounded-lg text-indigo-400 font-semibold">
                  {/* Dashboard Icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Dashboard
                </a>
              </li>
              {/* Other sidebar links... */}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10">
          <UIGenerator />
        </main>
      </div>
    </div>
  );
}

export default App;