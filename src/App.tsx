import React from 'react';
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="text-center	">
      <Header />
      <div
        className="bg-neutral-50 px-6 py-20 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200"
      >
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
            Show All Appointments
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2">
            Create Appointments
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
