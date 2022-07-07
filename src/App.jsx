import React from 'react'
import {Routes, Route} from "react-router"
import "./styles/main.scss"

// Custom Hooks
import usePointerCordinates from "./hooks/usePointerCordinates";
import Telemetry from "./components/telemetry/Telemetry"

// UI Elements
import Trigger from "./components/ui/Trigger"

// Pages
import Home from "./pages/Home"

export default function App() {
    const [coordinates, setCordinates] = usePointerCordinates()

    return (
        <main className="container">
            {/* Trigger in Portal */}
            <Trigger x={coordinates.x} y={coordinates.y}></Trigger>
            {/*Telemetry in Portal */}
            <Telemetry/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </main>
    )
}