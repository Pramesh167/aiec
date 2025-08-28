import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import SideDrawer from "./Components/sidedrawer/Sidedrawer";
import Homepage from "./Pages/homepage/Homepage";
import Chatbot from "./Components/chatbot/chatbot";





function App() {
  const [drawerOpen, setDrawerOpen] = useState(true); // default open
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <>
      <BrowserRouter>
        {/* Navbar fixed on top */}
        <Navbar />


        {/* Side Drawer fixed on left */}
        <SideDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />

        <ToastContainer />

        {/* Main Content */}
        <div
          className={`pt-20 transition-all duration-300 ${
            drawerOpen ? "ml-64" : "ml-12"
          }`}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Chatbot></Chatbot>
          
        </div>
        
      </BrowserRouter>

    </>
  );
}

export default App;
