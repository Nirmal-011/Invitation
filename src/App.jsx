import React from "react";
import { Heart, MapPin, Calendar, Clock,   } from "lucide-react";
import "./App.css";
import Invitaion from "./pages/Invivation";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/invite" element={<Invitaion/>}/>
    </Routes>
  )
}

export default App;
