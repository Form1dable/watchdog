import {useState, useEffect} from "react"
import styled from "styled-components";

// Components
import TelemetryMetric from "../TelemetryMetric";

// Styles
import {TelemetryListContainer, List, Subtitle} from "../TelemetryStyles";

// Libraries
import {useLocation} from "react-router-dom";


export default function PageTelemetry() {
    // Hooks
    const location = useLocation()

    // States
    const [page, setpage] = useState({
        currentRoute: location.pathname
    })


    return (
        <TelemetryListContainer>
            <Subtitle>Page Details</Subtitle>
            <List>
                <TelemetryMetric property="Current Route" value={page.currentRoute}/>
            </List>

        </TelemetryListContainer>
    )
}
