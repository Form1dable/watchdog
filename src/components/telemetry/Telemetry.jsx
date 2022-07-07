import ReactDOM from "react-dom";
import React, {useState, useEffect} from "react";
import {browserName, browserVersion, osName, osVersion, engineName} from "react-device-detect";
import styled from "styled-components"


// Custom hooks

// Utils
import timeFormatter from ".././../utils/timeFormatter"

const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  min-width: 360px;
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 100;
  color: #FAFAFA;
`

const HorizontalLine = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  height: 1.5px;
  margin: 0.3rem 0;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 2.6rem;
  text-align: center;
`

const Subtitle = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
`

const TelemetryContainer = styled.div`
  margin-top: 2rem;
`

const TelemetryDetails = styled.div`
  margin: 1rem 0;
`

const List = styled.ul`
  list-style: none;
  margin-top: 1rem;
`
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 2em;
`

const Property = styled.span`
  font-weight: 500;
  opacity: 0.9;
`

const Value = styled.span`
  opacity: 0.7;

`

export default function Telemetry(props) {

    const [location, setLocation] = useState({
        latitude: "",
        longitude: "",
        timestamp: "",
        accuracy: ""
    })

    const [userAgent, setUserAgent] = useState({
        browserName: "",
        browserVersion: "",
        osName: "",
        osVersion: ""
    })

    const [keyboardStrokeAmount, setKeyboardStrokeAmount] = useState(0)
    const [keyboardStrokeKeys, setKeyboardStrokeKeys] = useState([])

    useEffect(() => {

        console.log(keyboardStrokeKeys.join(""))

    }, [keyboardStrokeKeys])


    // Browser Info
    useEffect(() => {
        setUserAgent({
            browserName: browserName,
            browserVersion: browserVersion,
            osName: osName,
            osVersion: osVersion,
            engineName: engineName,
        })
    }, [])

    // Geolocation Info
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            })
        } else {
            console.log("The browser doesn't support geolocation")
        }
    }, [])


    // Keypress
    useEffect(() => {
        function handleKeydown(e) {
            setKeyboardStrokeAmount(prevState => prevState + 1)
            setKeyboardStrokeKeys([...keyboardStrokeKeys, e.key])
        }

        document.addEventListener("keydown", handleKeydown)

        return () => {
            document.removeEventListener("keydown", handleKeydown)
        }
    })


    return ReactDOM.createPortal(
        <Container>
            <Title>Telemetry</Title>

            <TelemetryContainer>
                <TelemetryDetails>
                    <Subtitle>General</Subtitle>
                    <List>
                        <ListItem>
                            <Property>Browser</Property>
                            <Value>{userAgent.browserName} {userAgent.browserVersion}</Value>
                        </ListItem>
                        <ListItem>
                            <Property>Browser Engine</Property>
                            <Value>{userAgent.engineName}</Value>
                        </ListItem>
                        <ListItem>
                            <Property>OS</Property>
                            <Value>{userAgent.osName} {userAgent.osVersion}</Value>
                        </ListItem>
                        <ListItem>
                            <Property>Latitude</Property>
                            <Value>{location.latitude}</Value>
                        </ListItem>
                        <ListItem>
                            <Property>Longitude</Property>
                            <Value>{location.longitude}</Value>
                        </ListItem>
                    </List>

                </TelemetryDetails>
                <HorizontalLine/>

                <TelemetryDetails>
                    <Subtitle>Session Details</Subtitle>
                    <List>
                        <ListItem>
                            <Property>Current Session</Property>
                            <Value>{props.currentSessionDuration} seconds</Value>
                        </ListItem>
                        <ListItem>
                            <Property>Idle Duration</Property>
                            <Value>{parseInt(props.totalIdleTime / 1000)} seconds</Value>
                        </ListItem>
                        <ListItem>
                            <Property>Active Duration</Property>
                            <Value>{parseInt(props.totalActiveTime / 1000)} seconds</Value>
                        </ListItem>
                        <ListItem>
                            <Property>Status</Property>
                            <Value
                                style={{fontWeight: 600, color: `${props.active ? "mediumseagreen" : "skyblue"}`}}
                            >{props.active ? "Active" : "Idle"}</Value>
                        </ListItem>
                    </List>
                </TelemetryDetails>
                <HorizontalLine/>

                <TelemetryDetails>
                    <Subtitle>UI</Subtitle>
                    <List>
                        <ListItem>
                            <Property>ClientX</Property>
                            <Value>{props.x} px</Value>
                        </ListItem>
                        <ListItem>
                            <Property>ClientY</Property>
                            <Value>{props.y} px</Value>
                        </ListItem>
                        <ListItem>
                            <Property>Keyboard Strokes</Property>
                            <Value>{keyboardStrokeAmount}</Value>
                        </ListItem>
                        <ListItem>
                            <Property>Width</Property>
                            <Value>{props.viewport.browserWidth} px</Value>
                        </ListItem>
                        <ListItem>
                            <Property>Height</Property>
                            <Value>{props.viewport.browserHeight} px</Value>
                        </ListItem>
                    </List>
                </TelemetryDetails>
                <HorizontalLine/>
            </TelemetryContainer>

        </Container>, document.getElementById("telemetry")
    )
}