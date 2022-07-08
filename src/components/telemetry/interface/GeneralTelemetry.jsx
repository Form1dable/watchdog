import {useState, useEffect} from "react"
import styled from "styled-components";

// Component
import TelemetryMetric from "../TelemetryMetric";

// Libraries
import {browserName, browserVersion, osName, osVersion, engineName} from "react-device-detect";

// Styles
import {TelemetryListContainer, List, Subtitle} from "../TelemetryStyles";


export default function GeneralTelemetry() {

    // States
    const [general, setGeneral] = useState({
        browser: `${browserName} ${browserVersion}`,
        engineName,
        os: `${osName} ${osVersion}`,
        latitude: "",
        longitude: ""
    })

    // Effects
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setGeneral({
                    ...general,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            })
        }
    }, [])


    return (
        <TelemetryListContainer>
            <Subtitle>General</Subtitle>
            <List>
                <TelemetryMetric property="Browser" value={general.browser}/>
                <TelemetryMetric property="Browser Engine" value={general.engineName}/>
                <TelemetryMetric property="Operating System" value={general.os}/>
                <TelemetryMetric property="Latitude" value={general.latitude}/>
                <TelemetryMetric property="Longitude" value={general.longitude}/>
            </List>

        </TelemetryListContainer>
    )
}
