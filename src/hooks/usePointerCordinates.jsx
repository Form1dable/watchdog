import {useState, useEffect} from "react"

export default function usePointerCordinates() {
    const [cordinates, setCordinates] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const handleCursorCoordinates = event => {
            setCordinates({x: event.clientX, y: event.clientY})
        }

        window.addEventListener("mousemove", handleCursorCoordinates)

        return () => {
            window.removeEventListener("mousemove", handleCursorCoordinates)
        }
    })

    return [cordinates, setCordinates]
}