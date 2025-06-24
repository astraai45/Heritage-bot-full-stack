import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./NavbarComponent";
import Home from "./Home";
import Chat from "./Chat";
import Translate from "./Translate";
import Maps from "./maps";
// import Contact from "./Contact";
import More from "./More";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/more" element={<More />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
