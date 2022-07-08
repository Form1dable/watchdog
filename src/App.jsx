import React, {useState, useEffect, isValidElement} from 'react'
import {Routes, Route, Link} from "react-router-dom"
import {useIdleTimer} from "react-idle-timer";

// Styles
import "./styles/main.scss"


// Components
import Telemetry from "./components/telemetry/Telemetry"

// UI Elements
import Trigger from "./components/ui/Trigger"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"


export default function App() {


    return (
        <main className="container">
            {/* Trigger in Portal */}
            <Trigger/>
            {/*Telemetry in Portal */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Telemetry/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </main>
    )
}