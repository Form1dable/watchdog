import ReactDOM from "react-dom";
import React, {useEffect} from "react"
import styled from "styled-components"
import usePointerCordinates from "../../hooks/usePointerCordinates";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`
const X = styled.div`
  width: 2px;
  height: 100vh;
  position: fixed;
  pointer-events: none;
`
const Y = styled.div`
  width: 100vw;
  height: 2px;
  position: fixed;
  pointer-events: none;
`
const Coordinates = styled.div`
  position: fixed;
  overflow-wrap: normal;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  user-select: none;
`

const Trigger = React.memo(() => {
    const coordinates = usePointerCordinates()


    return ReactDOM.createPortal(
        <Container>
            <Coordinates
                style={{top: `${coordinates.y}px`, left: `${coordinates.x}px`}}>{coordinates.x} px, {coordinates.y} px
            </Coordinates>
            <X style={{left: `${coordinates.x}px`, background: "#333"}}></X>
            <Y style={{top: `${coordinates.y}px`, background: "#333"}}></Y>
        </Container>,
        document.getElementById("trigger")
    )
})

export default Trigger