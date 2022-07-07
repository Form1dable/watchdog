import {useState, useEffect} from "react"


export default function useViewport() {
    const [viewport, setViewport] = useState({
        browserWidth: window.innerWidth,
        browserHeight: window.innerHeight
    })


    useEffect(() => {
        const handleResize = () => {
            setViewport({
                browserWidth: window.innerWidth,
                browserHeight: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setViewport])

    return viewport
}