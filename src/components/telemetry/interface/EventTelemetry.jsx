import {useState, useEffect} from "react"

import usePointerCordinates from "../../../hooks/usePointerCordinates";

// Components
import TelemetryMetric from "../TelemetryMetric";

// Styles
import {TelemetryListContainer, List, Subtitle} from "../TelemetryStyles";


export default function EventTelemetry() {
    // Hooks
    const coordinates = usePointerCordinates()

    // States
    const [viewport, setViewport] = useState({
        browserWidth: window.innerWidth,
        browserHeight: window.innerHeight
    })

    const [keydownAmount, setKeydownAmount] = useState(0)
    const [keydownList, setKeydownList] = useState([])


    // Effects
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


    useEffect(() => {
        const handleKeydown = (event) => {
            setKeydownAmount(prevState => prevState + 1)
            setKeydownList([...keydownList, event.key])
        }

        document.addEventListener("keydown", handleKeydown)

        return () => {
            window.removeEventListener("keydown", handleKeydown)
        }
    }, [])


    return (
        <TelemetryListContainer>
            <Subtitle>Events</Subtitle>
            <List>
                <TelemetryMetric property="ClientX" value={`${coordinates.x} px`}/>
                <TelemetryMetric property="ClientY" value={`${coordinates.y} px`}/>
                <TelemetryMetric property="Browser Height" value={`${viewport.browserHeight} px`}/>
                <TelemetryMetric property="Browser Width" value={`${viewport.browserWidth} px`}/>
                <TelemetryMetric property="Keypress" value={keydownAmount}/>
            </List>

        </TelemetryListContainer>
    )
}
