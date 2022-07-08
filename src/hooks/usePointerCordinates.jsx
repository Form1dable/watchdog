import {useState, useEffect} from "react"

export default function usePointerCordinates() {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const handleCursorCoordinates = event => {
            setCoordinates({x: event.clientX, y: event.clientY})
        }

        window.addEventListener("mousemove", handleCursorCoordinates)

        return () => {
            window.removeEventListener("mousemove", handleCursorCoordinates)
        }
    }, [coordinates])

    return coordinates
}