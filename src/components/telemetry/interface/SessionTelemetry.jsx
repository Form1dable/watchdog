import {useState, useEffect} from "react"
import {useIdleTimer} from "react-idle-timer";

// Components
import TelemetryMetric from "../TelemetryMetric";

// Styles
import {TelemetryListContainer, List, Subtitle} from "../TelemetryStyles";
import {clear} from "@testing-library/user-event/dist/clear";


export default function SessionTelemetry() {

    // States
    const [time, setTime] = useState({
        elapsed: 1,
        totalIdle: 1,
        totalActive: 1,
        remainingTime: 1,
    })

    const [activeStatus, setActiveStatus] = useState(true)

    const timeout = 3000

    // Handlers
    const onActive = () => {
        setActiveStatus(true)
    }

    const onIdle = () => {
        setActiveStatus(false)
    }

    // Hooks
    const {
        getElapsedTime,
        getTotalActiveTime,
        getTotalIdleTime,
    } = useIdleTimer({timeout, onActive, onIdle})


    // Effects
    useEffect(() => {
        let interval = setInterval(() => {
            setTime({
                ...time,
                elapsed: getElapsedTime(),
                totalIdle: getTotalIdleTime(),
                totalActive: getTotalActiveTime(),
            })

            return () => {
                clearInterval(interval)
            }
        }, 1000)
    }, [])


    return (
        <TelemetryListContainer>
            <Subtitle>Session Details</Subtitle>
            <List>
                <TelemetryMetric property="Current Session" value={`${Math.floor(time.elapsed / 1000)} seconds`}/>
                <TelemetryMetric property="Active Duration" value={`${Math.floor(time.totalActive / 1000)} seconds`}/>
                <TelemetryMetric property="Idle Duration" value={`${Math.floor(time.totalIdle / 1000)} seconds`}/>
                <TelemetryMetric property="Status" value={activeStatus ? "Active" : "Idle"}/>
            </List>

        </TelemetryListContainer>
    )
}
