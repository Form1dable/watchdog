import {Routes, Route, Link} from "react-router-dom"

// Styles
import "./styles/main.scss"


// Components
import Telemetry from "./components/telemetry/Telemetry"
import Navbar from "./components/ui/Navbar";

// UI Elements
import Trigger from "./components/telemetry/Trigger"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"


export default function App() {


    return (
        <main className="container" style={{height: "300vh"}}>
            {/* Trigger in Portal */}
            <Trigger/>
            {/*Telemetry in Portal */}
            <Telemetry/>

            {/* Navbar */}
            <Navbar/>

            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </main>
    )
}