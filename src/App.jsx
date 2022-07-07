import React, {useState, useEffect, isValidElement} from 'react'
import {Routes, Route} from "react-router"
import {useIdleTimer} from "react-idle-timer";

// Styles
import "./styles/main.scss"

// Custom Hooks
import usePointerCordinates from "./hooks/usePointerCordinates";
import useViewport from "./hooks/useViewport";

// Components
import Telemetry from "./components/telemetry/Telemetry"

// UI Elements
import Trigger from "./components/ui/Trigger"

// Pages
import Home from "./pages/Home"

// Utils
import timeFormatter from "./utils/timeFormatter"

export default function App() {
    const [coordinates, setCordinates] = usePointerCordinates()
    const [currentSessionDuration, setCurrentSessionDuration] = useState(0)
    const [totalIdleTime, setTotalIdleTime] = useState(0)
    const [totalActiveTime, setTotalActiveTime] = useState(0)
    const [active, setActive] = useState(true)
    const timeout = 3000


    const viewport = useViewport()


    const onIdle = () => {
        setActive(false)
    }
    const onActive = () => {
        setActive(true)
    }

    const {getTotalIdleTime, getTotalActiveTime} = useIdleTimer({
        timeout,
        onIdle,
        onActive
    })

    useEffect(() => {
        setInterval(() => {
            setTotalIdleTime(getTotalIdleTime())
            setTotalActiveTime(getTotalActiveTime())
        }, 1000)
    }, [])


    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentSessionDuration((prevState) => prevState + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <main className="container">
            {/* Trigger in Portal */}
            <Trigger x={coordinates.x} y={coordinates.y} color={"#333"}/>
            {/*Telemetry in Portal */}
            <Telemetry x={coordinates.x} y={coordinates.y} currentSessionDuration={currentSessionDuration}
                       totalIdleTime={totalIdleTime} totalActiveTime={totalActiveTime} active={active}
                       viewport={viewport}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </main>
    )
}