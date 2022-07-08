import ReactDOM from "react-dom";
import React, {useEffect} from "react";
import {
    Container,
    TelemetryContainer,
    Title,
    HorizontalLine,
} from "./TelemetryStyles";


// Custom hooks

// Utils
import GeneralTelemetry from "./interface/GeneralTelemetry";
import PageTelemetry from "./interface/PageTelemetry";
import EventTelemetry from "./interface/EventTelemetry";
import SessionTelemetry from "./interface/SessionTelemetry";


const Telemetry = () => {

    useEffect(() => {

        console.log("Telemetry")
    })

    return ReactDOM.createPortal(
        <Container>
            <Title>Telemetry</Title>

            <TelemetryContainer>
                <GeneralTelemetry/>
                <HorizontalLine/>


                <SessionTelemetry/>
                <HorizontalLine/>

                <PageTelemetry/>
                <HorizontalLine/>

                <EventTelemetry/>
            </TelemetryContainer>

        </Container>, document.getElementById("telemetry")
    )
}


export default Telemetry