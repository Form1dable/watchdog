import ReactDOM from "react-dom";
import React, {useEffect} from "react";
import {
    Container,
    TelemetryContainer,
    TelemetryContainerSection
} from "./TelemetryStyles";


// Custom hooks

// Utils
import GeneralTelemetry from "./interface/GeneralTelemetry";
import PageTelemetry from "./interface/PageTelemetry";
import EventTelemetry from "./interface/EventTelemetry";
import SessionTelemetry from "./interface/SessionTelemetry";

// ======== Layout =======
// Container
// TelemetryContainerSection
// TelemetryContainer
// List
// ListItem
// Value
// Property

const Telemetry = () => {

    useEffect(() => {

        console.log("Telemetry")
    })

    return ReactDOM.createPortal(
        <Container>
            <TelemetryContainerSection>
                <GeneralTelemetry/>
                <SessionTelemetry/>
            </TelemetryContainerSection>
            <TelemetryContainerSection>
                <PageTelemetry/>
            </TelemetryContainerSection>
            <TelemetryContainerSection>
                <EventTelemetry/>
            </TelemetryContainerSection>

        </Container>, document.getElementById("telemetry")
    )
}


export default Telemetry