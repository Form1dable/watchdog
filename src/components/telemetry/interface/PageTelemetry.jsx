import {useState, useEffect} from "react"

// Components
import TelemetryMetric from "../TelemetryMetric";

// Styles
import {TelemetryContainer, List, Subtitle} from "../TelemetryStyles";

// Libraries
import {useLocation} from "react-router-dom";
import {useIdleTimer} from "react-idle-timer";


export default function PageTelemetry() {
    // Hooks
    const location = useLocation()
    const [visitedRoutes, setVisitedRoutes] = useState([location.pathname])
    const [currentRoute, setCurrentRoute] = useState()
    const [currentRouteDuration, setCurrentRouteDuration] = useState(1)

    const {reset, getElapsedTime} = useIdleTimer()


    useEffect(() => {
        setCurrentRoute(location.pathname)

        if (location.pathname !== visitedRoutes[visitedRoutes.length - 1]) {
            setVisitedRoutes([...visitedRoutes, location.pathname])
        }

    }, [location.pathname])


    useEffect(() => {
        reset()
        let interval = setInterval(() => {
            setCurrentRouteDuration(getElapsedTime())
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [currentRoute])


    return (
        <TelemetryContainer>
            <Subtitle>Page Details</Subtitle>
            <List>
                <TelemetryMetric property="Current Route" value={currentRoute}/>
                <TelemetryMetric property="Previous Route" value={visitedRoutes[visitedRoutes.length - 2]}/>
                <TelemetryMetric property="Current Page Duration"
                                 value={`${Math.floor(currentRouteDuration / 1000)} seconds`}/>
                <TelemetryMetric property="Total Pages Navigated" value={visitedRoutes.length}/>
            </List>

        </TelemetryContainer>
    )
}
